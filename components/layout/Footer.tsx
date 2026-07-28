import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "@/components/shared/Logo";
import { navLinks, siteConfig } from "@/config/site";
import { buildInstagramUrl } from "@/lib/instagram";

const socialLinks = [
  { label: "Instagram", href: buildInstagramUrl(), icon: faInstagram },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/70">
      <div className="shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2.5">
              <Logo size={40} className="h-10" />
              <span className="text-base font-extrabold tracking-tight">
                {siteConfig.name}
              </span>
            </span>

            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Online personal training and coaching based in{" "}
              {siteConfig.location}. Personalised programmes, practical
              nutrition guidance and weekly accountability, delivered remotely.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-line bg-white/[0.04] text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    aria-hidden="true"
                    className="size-4"
                  />
                  <span className="sr-only">
                    {social.label} (opens in a new tab)
                  </span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              Explore
            </h2>

            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              Contact
            </h2>

            <a
              href={buildInstagramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                aria-hidden="true"
                className="size-4"
              />
              {siteConfig.instagramHandle}
              <span className="sr-only"> (opens Instagram in a new tab)</span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                aria-hidden="true"
                className="size-4"
              />
              {siteConfig.email}
            </a>

            <ul className="mt-2 flex flex-col gap-2.5">
              <li>
                <a
                  href={siteConfig.privacyUrl}
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.termsUrl}
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            {`© ${year} ${siteConfig.name}. All rights reserved.`}
          </p>

          <p className="text-xs text-muted">
            Coaching does not replace medical advice. Speak to a qualified health
            professional before starting a new training programme.
          </p>
        </div>
      </div>
    </footer>
  );
}
