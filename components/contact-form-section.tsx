"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, MapPin, Building2, Send, CheckCircle, Gift } from "lucide-react"
import { trackConversion } from "@/lib/analytics"

const productTypes = [
  { value: "thuc-pham", label: "Thực phẩm" },
  { value: "my-pham", label: "Mỹ phẩm" },
  { value: "thiet-bi-y-te", label: "Thiết bị y tế" },
  { value: "thuc-pham-chuc-nang", label: "Thực phẩm chức năng" },
  { value: "khac", label: "Khác" },
]

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    productType: "",
    description: "",
    website: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Anti-spam check - honeypot field
    if (formData.website) {
      console.log("[v0] Spam detected - honeypot filled")
      return
    }
    
    setError(null)
    setIsLoading(true)
    
    try {
      // Track conversion event
      trackConversion()
      
      // Submit form to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          productType: formData.productType,
          description: formData.description,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Đã xảy ra lỗi khi gửi yêu cầu")
      }

      setIsSubmitted(true)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Đã xảy ra lỗi khi gửi yêu cầu"
      setError(errorMessage)
      console.error("[v0] Contact form error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl bg-card p-12 shadow-lg border border-border">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground">
                Cảm ơn bạn!
              </h2>
              <p className="mt-4 font-sans text-muted-foreground">
                Chúng tôi đã nhận được thông tin của bạn. Đội ngũ tư vấn sẽ liên hệ trong vòng 24 giờ.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    companyName: "",
                    contactName: "",
                    email: "",
                    phone: "",
                    productType: "",
                    description: "",
                    website: "",
                  })
                }}
                className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Gửi yêu cầu khác
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Bắt đầu hành trình của bạn ngay hôm nay
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong vòng 24 giờ
          </p>
          
          {/* Incentive Banner */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-warning/10 border border-warning/30 px-5 py-2.5">
            <Gift className="h-5 w-5 text-warning" />
            <span className="font-[var(--font-display)] text-sm font-semibold text-warning">
              Đăng ký ngay để nhận ưu đãi giảm 20% chi phí!
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-8 text-white h-full">
              <h3 className="font-[var(--font-display)] text-xl font-bold">
                Thông tin liên hệ
              </h3>
              <p className="mt-2 font-sans text-sm text-white/80">
                Liên hệ trực tiếp với chúng tôi qua các kênh sau
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-semibold">
                      VEXIM GLOBAL COMPANY LIMITED
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/80">
                      MST: 0111040294 | EIN: 35-2957758
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-semibold">
                      Văn phòng Việt Nam
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/80 leading-relaxed">
                      Số 25/6 Ngõ 51 Phố Ngọa Long<br />
                      Phường Tây Tựu, TP Hà Nội, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-semibold">
                      U.S. Agent (Mỹ)
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/80 leading-relaxed">
                      1207 Delaware Ave<br />
                      Wilmington, DE 19806, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-semibold">
                      Email
                    </p>
                    <a
                      href="mailto:contact@veximglobal.com"
                      className="mt-1 font-sans text-xs text-white/80 hover:text-white transition-colors"
                    >
                      contact@veximglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-sm font-semibold">
                      Hotline
                    </p>
                    <a
                      href="tel:+84373685634"
                      className="mt-1 font-sans text-xs text-white/80 hover:text-white transition-colors"
                    >
                      0373685634
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {error && (
              <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                <p className="font-sans text-sm text-destructive">{error}</p>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card p-8 shadow-lg border border-border"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="font-[var(--font-display)] font-semibold">
                    Tên công ty <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Công ty TNHH ABC"
                    required
                    minLength={3}
                    className="font-sans"
                  />
                </div>

                {/* Contact Name */}
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="font-[var(--font-display)] font-semibold">
                    Tên liên hệ <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Nguyễn Văn A"
                    required
                    minLength={2}
                    className="font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-[var(--font-display)] font-semibold">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@company.com"
                    required
                    className="font-sans"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-[var(--font-display)] font-semibold">
                    Số điện thoại <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0912 345 678"
                    required
                    className="font-sans"
                  />
                </div>

                {/* Product Type */}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="productType" className="font-[var(--font-display)] font-semibold">
                    Loại sản phẩm <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.productType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, productType: value }))
                    }
                    required
                  >
                    <SelectTrigger className="font-sans">
                      <SelectValue placeholder="Chọn loại sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="font-sans">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="description" className="font-[var(--font-display)] font-semibold">
                    Mô tả ngắn
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Mô tả sản phẩm hoặc yêu cầu của bạn..."
                    rows={4}
                    maxLength={500}
                    className="font-sans resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.description.length}/500 ký tự
                  </p>
                </div>

                {/* Anti-Spam Honeypot */}
                <input
                  type="hidden"
                  name="website"
                  value={formData.website || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      website: e.target.value,
                    }))
                  }
                />

                {/* Submit Button */}
                <div className="sm:col-span-2 flex gap-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-[var(--font-display)] font-semibold"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
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
                  <Button
                    type="reset"
                    variant="outline"
                    onClick={() =>
                      setFormData({
                        companyName: "",
                        contactName: "",
                        email: "",
                        phone: "",
                        productType: "",
                        description: "",
                        website: "",
                      })
                    }
                    className="font-[var(--font-display)] font-semibold"
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
