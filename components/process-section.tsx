import { MessageSquare, FileText, Upload, Search, Award } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Tư vấn",
    description: "Khách hàng cung cấp thông tin sản phẩm",
    duration: "1-2 ngày",
  },
  {
    number: 2,
    icon: FileText,
    title: "Chuẩn bị hồ sơ",
    description: "Vexim hướng dẫn chuẩn bị tài liệu cần thiết",
    duration: "2-3 ngày",
  },
  {
    number: 3,
    icon: Upload,
    title: "Đăng ký với FDA",
    description: "Vexim submit hồ sơ lên FDA, theo dõi tiến độ",
    duration: "1 ngày",
  },
  {
    number: 4,
    icon: Search,
    title: "Kiểm tra & phê duyệt",
    description: "FDA xem xét, có thể yêu cầu bổ sung",
    duration: "2-4 ngày",
  },
  {
    number: 5,
    icon: Award,
    title: "Nhận chứng chỉ",
    description: "Khách hàng nhận mã số FDA & chứng chỉ",
    duration: "1 ngày",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-light-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Quy trình đăng ký FDA tại Vexim Global
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            5 bước đơn giản để đưa sản phẩm của bạn vào thị trường Hoa Kỳ
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary/30" />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <span className="font-[var(--font-display)] text-lg font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-primary/30" />
                  )}
                  
                  {/* Content Card */}
                  <div className="mt-6 rounded-xl bg-card p-6 shadow-sm border border-border text-center w-full">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-[var(--font-display)] text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1">
                      <span className="font-sans text-xs font-medium text-primary">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30" />
            
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <span className="font-[var(--font-display)] text-lg font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 rounded-xl bg-card p-5 shadow-sm border border-border">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-[var(--font-display)] text-base font-bold text-foreground">
                            {step.title}
                          </h3>
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5">
                            <span className="font-sans text-xs font-medium text-primary">
                              {step.duration}
                            </span>
                          </span>
                        </div>
                        <p className="mt-1 font-sans text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Duration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-success/10 px-6 py-3">
            <Award className="h-5 w-5 text-success" />
            <span className="font-[var(--font-display)] text-base font-semibold text-success">
              Tổng thời gian: 5-7 ngày làm việc
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
