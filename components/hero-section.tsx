"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, Sparkles, Send, CheckCircle, Phone, Mail } from "lucide-react"
import { trackConversion } from "@/lib/analytics"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HeroSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", productType: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    trackConversion()
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName: formData.name,
          phone: formData.phone,
          email: formData.email,
          productType: formData.productType,
          companyName: "—",
          description: "Yêu cầu từ Hero Form",
        }),
      })
    } catch (_) {}
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent pt-[70px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left: Text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Promotion Banner */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-warning/90 px-4 py-2 shadow-lg animate-pulse">
              <Gift className="h-4 w-4 text-white" />
              <span className="font-[var(--font-display)] text-sm font-bold text-white">
                Giảm 20% chi phí đăng ký FDA cho khách hàng mới
              </span>
              <Sparkles className="h-4 w-4 text-white" />
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sans text-sm font-medium text-white">
                Đại lý Agent trực tiếp tại Hoa Kỳ
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Vexim Global - Đăng ký FDA thành công trong{" "}
              <span className="whitespace-nowrap">2-5 ngày</span>, cam kết ra mã
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/90 sm:text-lg text-pretty">
              Là đại lý US Agent chính thức tại Hoa Kỳ, Vexim Global cam kết hoàn thành đăng ký FDA chỉ trong 2-5 ngày với chi phí tiết kiệm đến 40% so với thị trường. Đã hỗ trợ 200+ doanh nghiệp Việt Nam xuất khẩu thành công sang Mỹ.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => scrollToSection("#case-study")}
                className="border-white/50 bg-white/15 text-white hover:bg-white/25 hover:text-white font-[var(--font-display)] font-semibold px-8 backdrop-blur-sm"
              >
                Xem case studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {[
                "200+ Doanh nghiệp",
                "2-5 ngày đăng ký",
                "US Agent trực tiếp",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mini Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-7 shadow-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-white">
                    Cảm ơn bạn!
                  </h3>
                  <p className="mt-2 font-sans text-sm text-white/80">
                    Chúng tôi sẽ liên hệ trong vòng 24 giờ.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 w-full">
                    <a href="tel:+84373685634" className="flex items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-2.5 font-sans text-sm font-medium text-white hover:bg-white/30 transition-colors">
                      <Phone className="h-4 w-4" /> 0373 685 634
                    </a>
                    <a href="mailto:contact@veximglobal.com" className="flex items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-2.5 font-sans text-sm font-medium text-white hover:bg-white/30 transition-colors">
                      <Mail className="h-4 w-4" /> contact@veximglobal.com
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <h3 className="font-[var(--font-display)] text-lg font-bold text-white">
                      Nhận tư vấn miễn phí
                    </h3>
                    <p className="mt-1 font-sans text-sm text-white/70">
                      Điền thông tin, chúng tôi liên hệ ngay trong 24h
                    </p>
                  </div>

                  <form onSubmit={handleHeroSubmit} className="space-y-3">
                    <Input
                      placeholder="Họ và tên *"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      required
                      className="bg-white/15 border-white/25 text-white placeholder:text-white/50 focus:bg-white/20 font-sans"
                    />
                    <Input
                      placeholder="Số điện thoại *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      required
                      className="bg-white/15 border-white/25 text-white placeholder:text-white/50 focus:bg-white/20 font-sans"
                    />
                    <Input
                      placeholder="Email *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      required
                      className="bg-white/15 border-white/25 text-white placeholder:text-white/50 focus:bg-white/20 font-sans"
                    />
                    <Select
                      value={formData.productType}
                      onValueChange={(v) => setFormData((p) => ({ ...p, productType: v }))}
                      required
                    >
                      <SelectTrigger className="bg-white/15 border-white/25 text-white font-sans [&>span]:text-white/50 data-[placeholder]:text-white/50">
                        <SelectValue placeholder="Loại sản phẩm *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thuc-pham">Thực phẩm</SelectItem>
                        <SelectItem value="my-pham">Mỹ phẩm</SelectItem>
                        <SelectItem value="thiet-bi-y-te">Thiết bị y tế</SelectItem>
                        <SelectItem value="thuc-pham-chuc-nang">Thực phẩm chức năng</SelectItem>
                        <SelectItem value="khac">Khác</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-primary hover:bg-white/90 font-[var(--font-display)] font-bold shadow-lg"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Đang gửi...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Nhận ưu đãi 20% ngay
                        </span>
                      )}
                    </Button>
                  </form>

                  <p className="mt-3 text-center font-sans text-xs text-white/50">
                    Miễn phí tư vấn · Hỗ trợ 24/7
                  </p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
