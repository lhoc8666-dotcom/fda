import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Đăng ký FDA", href: "#services" },
    { label: "Tư vấn FDA", href: "#services" },
    { label: "Hỗ trợ tuân thủ", href: "#services" },
    { label: "Gia hạn chứng nhận", href: "#services" },
  ],
  company: [
    { label: "Về chúng tôi", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Liên hệ", href: "#contact" },
  ],
  legal: [
    { label: "Điều khoản dịch vụ", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-slate text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vexim-J9SIf3QvFqXPtY8fbXlgwVYEYHsRjz.png" 
                alt="Vexim Global Logo"
                className="h-10 w-auto"
              />
              <span className="font-[var(--font-display)] text-lg font-bold text-white">
                Vexim Global
              </span>
            </div>
            
            <div className="mt-6 space-y-4">
              {/* Vietnam Office */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-sans text-sm font-medium text-white mb-1">
                    Văn phòng Việt Nam
                  </p>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    Số 25/6 Ngõ 51 Phố Ngọa Long<br />
                    Phường Tây Tựu, TP Hà Nội, Việt Nam
                  </p>
                  <p className="font-sans text-xs text-white/50 mt-1">
                    MST: 0111040294
                  </p>
                </div>
              </div>

              {/* US Office */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-sans text-sm font-medium text-white mb-1">
                    U.S. Agent (Mỹ)
                  </p>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    1207 Delaware Ave<br />
                    Wilmington, DE 19806, United States
                  </p>
                  <p className="font-sans text-xs text-white/50 mt-1">
                    EIN: 35-2957758
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white">
              Dịch vụ
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white">
              Về chúng tôi
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-white">
              Liên hệ
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contact@veximglobal.com"
                  className="flex items-center gap-2 font-sans text-sm text-white/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@veximglobal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+84373685634"
                  className="flex items-center gap-2 font-sans text-sm text-white/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  0373685634
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs text-white/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="font-sans text-xs text-white/50">
              &copy; {new Date().getFullYear()} Vexim Global LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
