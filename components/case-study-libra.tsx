"use client"

import { useState } from "react"
import { Building2, CheckCircle, Zap, Truck, ZoomIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const caseSteps = [
  {
    id: 1,
    title: "Nhà máy / Xưởng sản xuất",
    subtitle: "CÔNG TY TNHH LIBRA VIỆT NAM",
    description: "Công ty Cổ phần Libra Việt Nam – Nhà máy sản xuất bánh kẹo quy mô lớn, có nhu cầu đăng ký chứng nhận và đưa các dòng sản phẩm bánh kẹo thương hiệu Việt xuất khẩu sang thị trường Mỹ.",
    icon: Building2,
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-300",
    badgeColor: "bg-blue-100 text-blue-700",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-1024x683-lgRItnY55YmvhY31UvXW0UzBV2Vdpu.jpeg",
    imageAlt: "Nhà máy sản xuất bánh kẹo Libra Việt Nam",
  },
  {
    id: 2,
    title: "Vexim Global tiếp nhận",
    subtitle: "Tư vấn & Chuẩn bị hồ sơ",
    description: "Vexim Global trực tiếp tiếp nhận hồ sơ, tiến hành rà soát thành phần sản phẩm, tối ưu nhãn mác theo chuẩn FDA và thiết lập pháp nhân U.S. Agent chính thức bảo lãnh cho cơ sở của Libra.",
    icon: Zap,
    bgGradient: "from-green-50 to-green-100",
    borderColor: "border-green-300",
    badgeColor: "bg-green-100 text-green-700",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b2aBoCntYn8fGh7KN8U6UicowkWNnO.png",
    imageAlt: "Form FDA 3537 - Facility Registration - Mẫu hồ sơ đăng ký",
  },
  {
    id: 3,
    title: "Đăng ký FDA thành công",
    subtitle: "Phê duyệt & Cấp mã số",
    description: "Hoàn thiện thủ tục nộp hồ sơ thần tốc. Hệ thống cơ quan Mỹ phê duyệt và cấp mã số đăng ký FDA (Active) cho nhà máy sản xuất bánh kẹo Libra chỉ trong vòng 3 - 5 ngày làm việc.",
    icon: CheckCircle,
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-300",
    badgeColor: "bg-purple-100 text-purple-700",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FDA-cetificate_page-0001-_1_-_1_-RefaPqEQVsmsXKnVeC4SWyAd1rK9o1.webp",
    imageAlt: "Giấy chứng nhận FDA Vietnam Libra Company Limited",
  },
  {
    id: 4,
    title: "Xuất khẩu Mỹ thành công",
    subtitle: "Tháng 3/2026",
    description: "Lô hàng bánh kẹo của Libra thông quan thuận lợi tại cảng Mỹ vào tháng 3/2026 vừa qua. Toàn bộ lịch sử vận đơn được ghi nhận minh bạch, hiển thị công khai trên hệ thống hải quan Mỹ.",
    icon: Truck,
    bgGradient: "from-orange-50 to-orange-100",
    borderColor: "border-orange-300",
    badgeColor: "bg-orange-100 text-orange-700",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bill_of_lading_Libra-DPEt73FYChpAtURwNKXZ1kqu0rnYVS.png",
    imageAlt: "House Bill of Lading BCPIBCOLO26 - Libra Việt Nam",
  },
]

export function CaseStudyLibra() {
  const [openDialogs, setOpenDialogs] = useState<Record<number, boolean>>({})

  const toggleDialog = (id: number) => {
    setOpenDialogs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="case-study" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <span className="font-[var(--font-display)] text-sm font-semibold text-primary">
              Case Study
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Hành trình thành công của Libra
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cách Vexim Global giúp CÔNG TY TNHH LIBRA VIỆT NAM xuất khẩu bánh kẹo sang Mỹ thành công
          </p>
        </div>

        {/* Case Study Steps */}
        <div className="grid gap-6 lg:grid-cols-4">
          {caseSteps.map((step, index) => {
            const Icon = step.icon
            const hasImage = step.imageSrc !== null

            return (
              <div
                key={step.id}
                className={`relative rounded-2xl bg-gradient-to-br ${step.bgGradient} border-2 ${step.borderColor} p-6 overflow-hidden transition-all hover:shadow-lg`}
              >
                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 rounded-full ${step.badgeColor} px-3 py-1 mb-4`}>
                  <span className="font-sans text-xs font-bold tracking-wide">
                    Bước {step.id}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-display)] text-lg font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="font-sans text-xs font-semibold text-primary/80 mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-foreground/80 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Image Thumbnail */}
                {hasImage && (
                  <Dialog open={openDialogs[step.id]} onOpenChange={(open) => toggleDialog(step.id)}>
                    <DialogTrigger asChild>
                      <button
                        className="relative group w-full"
                        aria-label={`Xem chi tiết ${step.title}`}
                      >
                        <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-white/50 shadow-md hover:shadow-lg transition-all cursor-pointer">
                          <img
                            src={step.imageSrc}
                            alt={step.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-lg">
                                <ZoomIn className="h-5 w-5 text-foreground" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-2 sm:p-4">
                      <img
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="mt-4 font-sans text-sm text-muted-foreground text-center px-4">
                        {step.imageAlt}
                      </p>
                    </DialogContent>
                  </Dialog>
                )}

                {/* Connector Line */}
                {index < caseSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden lg:block">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-foreground/30 to-transparent" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Bạn muốn trải nghiệm quá trình tương tự?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-[var(--font-display)] text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Liên hệ tư vấn miễn phí
          </a>
        </div>
      </div>
    </section>
  )
}
