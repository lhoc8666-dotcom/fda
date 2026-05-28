import { Rocket, PiggyBank, Shield, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Rocket,
    title: "Nhanh chóng",
    description: "5-7 ngày đăng ký thành công, không mất thời gian chờ đợi",
    color: "border-l-primary",
  },
  {
    icon: PiggyBank,
    title: "Tiết kiệm",
    description: "Không trung gian, chi phí tối ưu, giá cố định rõ ràng",
    color: "border-l-secondary",
  },
  {
    icon: Shield,
    title: "An tâm",
    description: "Đại lý trực tiếp tại Mỹ, xử lý sự cố ngay lập tức",
    color: "border-l-accent",
  },
  {
    icon: TrendingUp,
    title: "Uy tín",
    description: "Có EIN, thực thể kinh doanh chính thức tại Hoa Kỳ",
    color: "border-l-warning",
  },
]

export function ValuePropositionSection() {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Tại sao chọn Vexim Global?
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Chúng tôi mang đến giải pháp toàn diện cho doanh nghiệp muốn xuất khẩu sang thị trường Mỹ
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group rounded-xl bg-card p-6 shadow-sm border border-border border-l-4 ${value.color} transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <value.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-[var(--font-display)] text-lg font-bold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 border border-border">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <h3 className="font-[var(--font-display)] text-xl font-bold text-foreground">
                Dịch vụ FDA toàn diện
              </h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                Hỗ trợ đăng ký cho tất cả loại sản phẩm
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:col-span-2">
              {["Thực phẩm", "Mỹ phẩm", "Thiết bị y tế", "Thực phẩm chức năng", "Dược phẩm"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 font-sans text-sm font-medium text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
