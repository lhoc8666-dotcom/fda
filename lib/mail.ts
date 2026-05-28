import nodemailer from "nodemailer"

export async function sendContactEmail({
  companyName,
  contactName,
  email,
  phone,
  productType,
  description,
}: {
  companyName: string
  contactName: string
  email: string
  phone: string
  productType: string
  description: string
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || "587"),
    secure: process.env.MAIL_PORT === "465",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const productTypeLabel = {
    "thuc-pham": "Thực phẩm",
    "my-pham": "Mỹ phẩm",
    "thiet-bi-y-te": "Thiết bị y tế",
    "thuc-pham-chuc-nang": "Thực phẩm chức năng",
    khac: "Khác",
  }[productType] || productType

  // Email to customer
  await transporter.sendMail({
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
    to: email,
    subject: "Cảm ơn bạn đã liên hệ Vexim Global - Ưu đãi 20% chờ bạn",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 30px; border-radius: 8px; color: white; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Cảm ơn bạn!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">Chúng tôi đã nhận được yêu cầu của bạn</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Xin chào ${contactName},</h2>
          <p style="color: #6b7280; line-height: 1.6;">
            Chúng tôi vừa nhận được thông tin liên hệ của bạn. Đội ngũ tư vấn chuyên nghiệp của Vexim Global sẽ liên hệ với bạn trong vòng <strong>24 giờ</strong> để trao đổi chi tiết về dịch vụ đăng ký FDA cho sản phẩm ${productTypeLabel} của bạn.
          </p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #1e40af; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #1f2937; margin-top: 0;">Thông tin bạn đã cung cấp:</h3>
            <table style="width: 100%; font-size: 14px; color: #6b7280;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">Công ty:</td>
                <td style="padding: 8px 0;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">Liên hệ:</td>
                <td style="padding: 8px 0;">${contactName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">Điện thoại:</td>
                <td style="padding: 8px 0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">Loại sản phẩm:</td>
                <td style="padding: 8px 0;">${productTypeLabel}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; color: #92400e; font-weight: 600;">🎁 Ưu đãi đặc biệt dành cho bạn</p>
            <p style="margin: 8px 0 0 0; color: #b45309; font-size: 14px;">Giảm 20% chi phí đăng ký FDA cho khách hàng mới - Chỉ áp dụng cho yêu cầu gửi trong 24 giờ tới.</p>
          </div>
          
          <p style="color: #6b7280; line-height: 1.6;">
            Nếu bạn cần liên hệ trực tiếp, bạn có thể gọi hotline của chúng tôi: <strong>0373 685 634</strong> hoặc trả lời email này.
          </p>
          
          <p style="color: #6b7280; line-height: 1.6; margin-bottom: 0;">
            Trân trọng,<br/>
            <strong>Đội ngũ Vexim Global</strong><br/>
            <span style="font-size: 12px;">contact@veximglobal.com</span>
          </p>
        </div>
        
        <div style="background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0;">
            © 2024 Vexim Global. All rights reserved.<br/>
            Số 25/6 Ngõ 51 Phố Ngọa Long, Phường Tây Tựu, TP Hà Nội, Việt Nam
          </p>
        </div>
      </div>
    `,
  })

  // Email to company
  await transporter.sendMail({
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
    to: process.env.MAIL_FROM_ADDRESS,
    subject: `[VEXIM] Yêu cầu mới từ ${contactName} - ${productTypeLabel}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e40af; padding: 20px; border-radius: 8px; color: white;">
          <h1 style="margin: 0; font-size: 24px;">🔔 Yêu cầu liên hệ mới</h1>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <table style="width: 100%; font-size: 14px; color: #6b7280;">
            <tr style="background: white;">
              <td style="padding: 12px; font-weight: 600; color: #1f2937; width: 150px;">Công ty:</td>
              <td style="padding: 12px;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 600; color: #1f2937;">Người liên hệ:</td>
              <td style="padding: 12px;">${contactName}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 12px; font-weight: 600; color: #1f2937;">Email:</td>
              <td style="padding: 12px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 600; color: #1f2937;">Điện thoại:</td>
              <td style="padding: 12px;">${phone}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 12px; font-weight: 600; color: #1f2937;">Loại sản phẩm:</td>
              <td style="padding: 12px;">${productTypeLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 600; color: #1f2937; vertical-align: top;">Mô tả:</td>
              <td style="padding: 12px;">${description || "(Không có mô tả)"}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; margin: 20px 0; border-radius: 4px; text-align: center;">
          <p style="margin: 0; color: #92400e; font-weight: 600;">Khách hàng này nhận ưu đãi 20% giảm giá</p>
        </div>
      </div>
    `,
  })
}
