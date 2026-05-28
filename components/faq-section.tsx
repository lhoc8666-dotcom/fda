"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "FDA là gì và tại sao doanh nghiệp Việt Nam cần đăng ký?",
    answer:
      "FDA (Food and Drug Administration) là Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ. Tất cả các cơ sở sản xuất, chế biến, đóng gói hoặc lưu trữ thực phẩm, đồ uống, thực phẩm chức năng, mỹ phẩm và thiết bị y tế muốn xuất khẩu sang Mỹ đều bắt buộc phải đăng ký FDA. Không có chứng nhận FDA, hàng hóa sẽ bị từ chối nhập cảnh hoặc bị giữ lại tại cảng Mỹ.",
  },
  {
    question: "Thời gian đăng ký FDA mất bao lâu?",
    answer:
      "Với quy trình tối ưu của Vexim Global, thời gian đăng ký FDA thường mất từ 3-5 ngày làm việc cho các trường hợp thông thường. Đối với các sản phẩm phức tạp hoặc cần bổ sung hồ sơ, thời gian có thể kéo dài từ 1-2 tuần. Chúng tôi cam kết hỗ trợ 24/7 để đẩy nhanh tiến độ.",
  },
  {
    question: "Chi phí đăng ký FDA là bao nhiêu?",
    answer:
      "Chi phí đăng ký FDA phụ thuộc vào loại sản phẩm và độ phức tạp của hồ sơ. Vexim Global cung cấp báo giá minh bạch, không phát sinh chi phí ẩn. Hiện tại chúng tôi đang có chương trình giảm 20% chi phí cho khách hàng mới. Liên hệ ngay để nhận báo giá chi tiết.",
  },
  {
    question: "Giấy chứng nhận FDA có thời hạn bao lâu?",
    answer:
      "Đăng ký cơ sở FDA (FDA Facility Registration) cần được gia hạn 2 năm một lần vào các năm chẵn (2024, 2026, 2028...) trong khoảng thời gian từ 1/10 đến 31/12. Vexim Global sẽ nhắc nhở và hỗ trợ bạn gia hạn đúng hạn để tránh gián đoạn hoạt động xuất khẩu.",
  },
  {
    question: "Vexim Global có phải là đại lý chính thức của FDA không?",
    answer:
      "Vexim Global là đại lý FDA được ủy quyền (U.S. Agent for FDA) có trụ sở tại Mỹ. Chúng tôi hoạt động theo đúng quy định của FDA, là cầu nối giữa FDA và các doanh nghiệp nước ngoài. Với hơn 500 doanh nghiệp đã đăng ký thành công, chúng tôi tự hào là đối tác tin cậy của các nhà xuất khẩu Việt Nam.",
  },
  {
    question: "Tôi cần chuẩn bị những giấy tờ gì để đăng ký FDA?",
    answer:
      "Hồ sơ cơ bản bao gồm: Giấy đăng ký kinh doanh, thông tin cơ sở sản xuất (địa chỉ, số điện thoại, email), danh mục sản phẩm xuất khẩu, và thông tin người liên hệ. Vexim Global sẽ hướng dẫn chi tiết từng bước và hỗ trợ bạn chuẩn bị hồ sơ hoàn chỉnh.",
  },
  {
    question: "Nếu hàng bị FDA giữ lại (detention) thì phải làm sao?",
    answer:
      "Khi hàng bị detention, Vexim Global sẽ hỗ trợ bạn: Xác định nguyên nhân vi phạm, chuẩn bị hồ sơ phản hồi (Response to Detention), liên hệ trực tiếp với FDA để giải quyết, và tư vấn các bước khắc phục để tránh tái phạm. Với tỷ lệ thành công 99%, chúng tôi cam kết đồng hành cùng bạn.",
  },
  {
    question: "Vexim Global hỗ trợ những loại sản phẩm nào?",
    answer:
      "Chúng tôi hỗ trợ đăng ký FDA cho: Thực phẩm (đồ ăn, đồ uống, gia vị, nông sản chế biến), Thực phẩm chức năng (dietary supplements), Mỹ phẩm (skincare, makeup, hair care), Thiết bị y tế (medical devices) các loại. Mỗi loại sản phẩm có quy trình và yêu cầu riêng, chúng tôi sẽ tư vấn phù hợp.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="font-sans text-sm font-medium text-primary">
              Câu hỏi thường gặp
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Giải đáp mọi thắc mắc về đăng ký FDA
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Những câu hỏi phổ biến nhất từ khách hàng của chúng tôi
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:bg-muted/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-[var(--font-display)] font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(4).map((faq, index) => (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:bg-muted/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-[var(--font-display)] font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-muted-foreground">
            Không tìm thấy câu trả lời bạn cần?{" "}
            <a
              href="#contact"
              className="font-semibold text-primary hover:underline"
            >
              Liên hệ với chúng tôi
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
