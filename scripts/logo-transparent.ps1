Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'public\images\logo.jpg'
$outMark = Join-Path $root 'public\images\logo.png'
$outIcon = Join-Path $root 'app\icon.png'

$code = @'
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;

public static class LogoCutout
{
    static double Lum(int r, int g, int b)
    {
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    public static string Run(string src, string outMark, string outIcon)
    {
        using (Bitmap source = new Bitmap(src))
        {
            int w = source.Width;
            int h = source.Height;

            // Sample the brand colour by averaging the bright core of the
            // artwork, so JPEG ringing on the edges cannot skew the hue.
            double peak = 0;
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    Color c = source.GetPixel(x, y);
                    double l = Lum(c.R, c.G, c.B);
                    if (l > peak) peak = l;
                }
            if (peak <= 0) throw new Exception("Source image is fully black.");

            double sr = 0, sg = 0, sb = 0;
            long n = 0;
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    Color c = source.GetPixel(x, y);
                    if (Lum(c.R, c.G, c.B) >= peak * 0.85)
                    {
                        sr += c.R; sg += c.G; sb += c.B; n++;
                    }
                }

            int br = (int)Math.Round(sr / n);
            int bg = (int)Math.Round(sg / n);
            int bb = (int)Math.Round(sb / n);
            double best = Lum(br, bg, bb);

            // Luminance drives alpha: the dark plate falls away, the mark keeps
            // soft antialiased edges without a black JPEG fringe.
            using (Bitmap cut = new Bitmap(w, h, PixelFormat.Format32bppArgb))
            {
                int minX = w, minY = h, maxX = -1, maxY = -1;
                for (int y = 0; y < h; y++)
                {
                    for (int x = 0; x < w; x++)
                    {
                        Color c = source.GetPixel(x, y);
                        double a = Lum(c.R, c.G, c.B) / best;
                        if (a < 0.06) a = 0;
                        if (a > 1) a = 1;
                        int alpha = (int)Math.Round(a * 255);
                        cut.SetPixel(x, y, Color.FromArgb(alpha, br, bg, bb));
                        if (alpha > 16)
                        {
                            if (x < minX) minX = x;
                            if (y < minY) minY = y;
                            if (x > maxX) maxX = x;
                            if (y > maxY) maxY = y;
                        }
                    }
                }

                if (maxX < 0) throw new Exception("No opaque pixels found.");

                Rectangle box = Rectangle.FromLTRB(minX, minY, maxX + 1, maxY + 1);
                using (Bitmap mark = cut.Clone(box, PixelFormat.Format32bppArgb))
                {
                    mark.Save(outMark, ImageFormat.Png);

                    // Square, padded copy for the favicon.
                    int side = 512;
                    double pad = 0.92;
                    double scale = Math.Min(side * pad / mark.Width, side * pad / mark.Height);
                    int dw = (int)Math.Round(mark.Width * scale);
                    int dh = (int)Math.Round(mark.Height * scale);
                    using (Bitmap icon = new Bitmap(side, side, PixelFormat.Format32bppArgb))
                    using (Graphics g = Graphics.FromImage(icon))
                    {
                        g.Clear(Color.Transparent);
                        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                        g.PixelOffsetMode = PixelOffsetMode.HighQuality;
                        g.DrawImage(mark, (side - dw) / 2, (side - dh) / 2, dw, dh);
                        icon.Save(outIcon, ImageFormat.Png);
                    }

                    return string.Format(
                        "source {0}x{1} | brand rgb({2},{3},{4}) | mark {5}x{6}",
                        w, h, br, bg, bb, mark.Width, mark.Height);
                }
            }
        }
    }
}
'@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[LogoCutout]::Run($src, $outMark, $outIcon)
