"use client";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Logo } from "@/components/shared/Logo";
import { navLinks, siteConfig } from "@/config/site";
import { ui } from "@/data/ui";
import { fill } from "@/lib/i18n";
import { buildInstagramUrl } from "@/lib/instagram";

const socialLinks = [
  { label: "Instagram", href: buildInstagramUrl(), icon: faInstagram },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/70">
      <div className="shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2.5">
              <Logo className="h-10" />
              <span className="text-base font-extrabold tracking-tight">
                {t(siteConfig.name)}
              </span>
            </span>

            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {fill(t(ui.footer.description), {
                location: t(siteConfig.location),
              })}
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
                    {`${social.label}${t(ui.common.opensNewTab)}`}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={t(ui.footer.navLabel)} className="flex flex-col gap-3">
            <h2 className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {t(ui.footer.exploreLabel)}
            </h2>

            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {t(ui.footer.contactLabel)}
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
              {/* Latin handle: pinned to LTR so the `@` stays in front of it. */}
              <span dir="ltr">{siteConfig.instagramHandle}</span>
              <span className="sr-only">{t(ui.common.opensInstagram)}</span>
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
              <span dir="ltr">{siteConfig.email}</span>
            </a>

            <ul className="mt-2 flex flex-col gap-2.5">
              <li>
                <a
                  href={siteConfig.privacyUrl}
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  {t(ui.footer.privacy)}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.termsUrl}
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  {t(ui.footer.terms)}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            {fill(t(ui.footer.copyright), {
              year,
              name: t(siteConfig.name),
            })}
          </p>

          <p className="text-xs text-muted">{t(ui.footer.disclaimer)}</p>
        </div>
      </div>
    </footer>
  );
}
