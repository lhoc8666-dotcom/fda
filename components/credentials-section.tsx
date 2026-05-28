"use client"

import { useState } from "react"
import { ShieldCheck, FileText, Award, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function CredentialsSection() {
  const [formOpen, setFormOpen] = useState(false)
  const [certOpen, setCertOpen] = useState(false)

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-4">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="font-sans text-sm font-medium text-primary">Uy tín được kiểm chứng</span>
          </div>
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Hồ sơ & Chứng nhận thực tế
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Minh bạch hoàn toàn — chúng tôi cung cấp hồ sơ FDA đầy đủ, chính xác và được chứng thực bởi cơ quan FDA Hoa Kỳ
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">

          {/* LEFT: Form 3537 */}
          <div className="group">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-foreground">
                  Form FDA 3537
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Mẫu đăng ký cơ sở thực phẩm với FDA
                </p>
              </div>
              <Badge variant="secondary" className="ml-auto font-sans text-xs">
                Hồ sơ mẫu
              </Badge>
            </div>

            <Dialog open={formOpen} onOpenChange={setFormOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer rounded-2xl border border-border bg-card shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

                  {/* Form image */}
                  <div className="p-6">
                    {/* Label row */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="font-[var(--font-display)] text-sm font-semibold text-foreground">
                          Food Facility Registration
                        </span>
                      </div>
                      <span className="font-sans text-xs text-muted-foreground">
                        Reg. No: 10048679256
                      </span>
                    </div>

                    {/* Form image - same style as certificate */}
                    <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-inner bg-white">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b2aBoCntYn8fGh7KN8U6UicowkWNnO.png"
                        alt="Form FDA 3537 - Facility Registration - N&P Fruits"
                        className="w-full h-auto object-top"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      {[
                        { label: "Cơ sở đăng ký", value: "N&P FRUITS IMPORT EXPORT" },
                        { label: "Số đăng ký", value: "10048679256" },
                        { label: "Loại đăng ký", value: "Foreign Registration" },
                        { label: "Hạn hiệu lực", value: "2026-12-31" },
                      ].map((item, i) => (
                        <div key={i} className="rounded-lg bg-muted/60 px-3 py-2">
                          <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-wide">{item.label}</p>
                          <p className="font-[var(--font-display)] text-xs font-semibold text-foreground mt-0.5">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 shadow-lg">
                      <ExternalLink className="h-3.5 w-3.5 text-white" />
                      <span className="font-sans text-xs font-semibold text-white">Xem đầy đủ</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b2aBoCntYn8fGh7KN8U6UicowkWNnO.png"
                  alt="Form FDA 3537 - Facility Registration - Vexim Global mẫu"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>

            <p className="mt-4 font-sans text-xs text-muted-foreground text-center">
              Hồ sơ mẫu thực tế do Vexim Global xử lý. Nhấn để xem chi tiết.
            </p>
          </div>

          {/* RIGHT: FDA Certificate */}
          <div className="group">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Award className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-foreground">
                  Giấy Chứng Nhận FDA
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Xác nhận đăng ký hợp lệ từ Vexim Global
                </p>
              </div>
              <Badge className="ml-auto font-sans text-xs bg-success text-white hover:bg-success/90">
                Đã xác thực
              </Badge>
            </div>

            <Dialog open={certOpen} onOpenChange={setCertOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer rounded-2xl border-2 border-success/25 bg-card shadow-sm overflow-hidden hover:shadow-xl hover:border-success/50 transition-all duration-300 hover:-translate-y-1">
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-success via-primary to-secondary" />

                  {/* Certificate image */}
                  <div className="p-6">
                    {/* Label row */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-success" />
                        <span className="font-[var(--font-display)] text-sm font-semibold text-foreground">
                          Certificate of Registration
                        </span>
                      </div>
                      <span className="font-sans text-xs text-muted-foreground">
                        Reg. No: 17721772358
                      </span>
                    </div>

                    {/* Certificate thumbnail — full display */}
                    <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-inner bg-white">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FDA%20cetificate.pdf-0uhi497jPFfdgGuUSUaRv9opyznQE9.png"
                        alt="FDA Certificate of Registration - Vexim Global"
                        className="w-full h-auto object-top"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      {[
                        { label: "Đơn vị cấp", value: "Vexim Global LLC" },
                        { label: "Số đăng ký FDA", value: "17721772358" },
                        { label: "UFI (DUNS)", value: "555653770" },
                        { label: "Hạn hiệu lực", value: "April 17, 2028" },
                      ].map((item, i) => (
                        <div key={i} className="rounded-lg bg-muted/60 px-3 py-2">
                          <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-wide">{item.label}</p>
                          <p className="font-[var(--font-display)] text-xs font-semibold text-foreground mt-0.5">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 bg-success/0 group-hover:bg-success/5 transition-colors flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="flex items-center gap-2 rounded-full bg-success px-5 py-2 shadow-lg">
                      <ExternalLink className="h-3.5 w-3.5 text-white" />
                      <span className="font-sans text-xs font-semibold text-white">Xem toàn bộ</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FDA%20cetificate.pdf-0uhi497jPFfdgGuUSUaRv9opyznQE9.png"
                  alt="FDA Certificate of Registration - Vexim Global - Full Size"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>

            <p className="mt-4 font-sans text-xs text-muted-foreground text-center">
              Giấy chứng nhận xác thực từ Vexim Global. Nhấn để xem toàn màn hình.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
