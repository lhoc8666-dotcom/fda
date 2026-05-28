"use client"

import { Building2, TrendingUp, Package, Star, Quote, Zap } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Doanh nghiệp đã hỗ trợ",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Tỷ lệ thành công",
  },
  {
    icon: Package,
    value: "4",
    label: "Ngành hàng được hỗ trợ",
    sublabel: "Thực phẩm · Mỹ phẩm · TPCN · Dược phẩm",
  },
  {
    icon: Zap,
    value: "3-5",
    label: "Ngày xử lý hồ sơ",
    sublabel: "Nhanh nhất thị trường",
  },
]

const testimonials = [
  {
    quote: "Vexim Global giúp chúng tôi đăng ký FDA chỉ trong 6 ngày. Đội ngũ chuyên nghiệp, hỗ trợ tận tình. Rất hài lòng!",
    author: "Nguyễn Văn Huynh",
    role: "CEO Công ty Thực phẩm Azzan",
    rating: 5,
  },
  {
    quote: "Lần đầu tiên chúng tôi xuất khẩu sang Mỹ. Vexim giải thích chi tiết từng bước, không có bất kỳ bất ngờ nào. Giá cũng rất hợp lý so với các đơn vị khác.",
    author: "Trần Thanh Trúc",
    role: "Giám đốc Công ty Mỹ phẩm Lava",
    rating: 5,
  },
  {
    quote: "Chúng tôi đã thử với 2 đơn vị khác trước đó, nhưng đều thất bại. Vexim là lựa chọn đúng đắn. Đã giúp chúng tôi bán hàng trên Amazon Mỹ thành công.",
    author: "Lê Minh Hưng",
    role: "Công ty N&P",
    rating: 5,
  },
]

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Khách hàng tin tưởng chúng tôi
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hàng trăm doanh nghiệp Việt Nam đã thành công cùng Vexim Global
          </p>
        </div>

        {/* Stats Row - 4 equal columns */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 border border-border"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-[var(--font-display)] text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <p className="mt-2 font-sans text-sm text-muted-foreground text-center">
                {stat.label}
              </p>
              {stat.sublabel && (
                <p className="mt-1 font-sans text-xs text-primary/70 text-center font-medium">
                  {stat.sublabel}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-card p-6 shadow-sm border-l-4 border-l-primary border border-border"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="font-sans text-sm italic text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-[var(--font-display)] text-sm font-bold text-primary">
                    {testimonial.author.split(" ").pop()?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
