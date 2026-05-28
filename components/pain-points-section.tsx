import { X, Check } from "lucide-react"

const painPoints = [
  {
    pain: "Quy trình phức tạp, khó hiểu",
    solution: "Hướng dẫn chi tiết từng bước",
  },
  {
    pain: "Rủi ro thông quan, bị từ chối nhập khẩu",
    solution: "Hồ sơ đầy đủ, chính xác 100%",
  },
  {
    pain: "Thiếu đại diện tại Mỹ để xử lý sự cố",
    solution: "Đại lý trực tiếp tại Mỹ (EIN chính thức)",
  },
  {
    pain: "Chi phí không minh bạch, phát sinh nhiều",
    solution: "Giá cố định, không phát sinh",
  },
  {
    pain: "Khó duy trì tuân thủ sau đăng ký",
    solution: "Hỗ trợ gia hạn định kỳ, nhắc nhở tự động",
  },
]

export function PainPointsSection() {
  return (
    <section id="pain-points" className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Bạn gặp phải những vấn đề này khi đăng ký FDA?
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Chúng tôi hiểu những thách thức mà doanh nghiệp Việt Nam phải đối mặt khi xuất khẩu sang thị trường Hoa Kỳ
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 rounded-xl bg-card p-6 shadow-sm border border-border"
            >
              {/* Pain */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-medium uppercase tracking-wider text-destructive">
                      Vấn đề
                    </span>
                    <p className="mt-1 font-sans text-sm text-foreground">
                      {item.pain}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center justify-center">
                <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Solution */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-medium uppercase tracking-wider text-success">
                      Giải pháp
                    </span>
                    <p className="mt-1 font-sans text-sm text-foreground">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
