import { Check, X } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CompetitiveAdvantageSection() {
  const criteria = [
    {
      label: "Đại lý trực tiếp tại Mỹ",
      vexim: true,
      others: false,
    },
    {
      label: "Có thực thể kinh doanh Mỹ chính thức",
      vexim: true,
      others: false,
    },
    {
      label: "Thời gian đăng ký",
      vexim: "2-5 ngày",
      others: "5-10 ngày",
    },
    {
      label: "Tỷ lệ thành công",
      vexim: "99%+",
      others: "90-95%",
    },
    {
      label: "Hỗ trợ 24/7",
      vexim: true,
      others: false,
    },
    {
      label: "Chi phí",
      vexim: "$$",
      others: "$$$",
    },
  ]

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-success" />
      ) : (
        <X className="mx-auto h-5 w-5 text-destructive" />
      )
    }
    return <span className="font-sans text-sm">{value}</span>
  }

  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Tại sao Vexim Global là lựa chọn tốt nhất?
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            So sánh các đặc điểm chính của dịch vụ FDA tại Vexim Global với các dịch vụ khác trên thị trường
          </p>
        </div>

        {/* Comparison Table - 2 Columns */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground font-[var(--font-display)] font-semibold">
                  Tiêu chí
                </TableHead>
                <TableHead className="text-center text-primary-foreground font-[var(--font-display)] font-semibold">
                  Vexim Global
                </TableHead>
                <TableHead className="text-center text-primary-foreground font-[var(--font-display)] font-semibold">
                  Dịch vụ khác
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {criteria.map((item, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                  <TableCell className="font-sans text-sm font-medium text-foreground">
                    {item.label}
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    {renderValue(item.vexim)}
                  </TableCell>
                  <TableCell className="text-center">
                    {renderValue(item.others)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-success" />
            <span>Có</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-destructive" />
            <span>Không</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-success">$$</span>
            <span>Chi phí tốt hơn</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">$$$</span>
            <span>Chi phí cao hơn</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="font-sans text-base text-muted-foreground mb-6">
            Chúng tôi tự tin rằng Vexim Global cung cấp dịch vụ tốt nhất với giá cơ bản hợp lý nhất.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-[var(--font-display)] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            So sánh ngay và nhận tư vấn
          </a>
        </div>
      </div>
    </section>
  )
}
