import { TrendingUp, Users, Globe, Factory } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "$404B",
    label: "Kim ngạch xuất khẩu 2025",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    value: "6800+",
    label: "Đơn đăng ký FDA/năm",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Globe,
    value: "20+",
    label: "Quốc gia đối tác",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Factory,
    value: "500K+",
    label: "Sản phẩm trên thị trường Mỹ",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
]

export function KeyMetricsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-card p-6 shadow-sm border border-border transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div className="font-[var(--font-display)] text-3xl font-bold text-foreground">
                {metric.value}
              </div>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
