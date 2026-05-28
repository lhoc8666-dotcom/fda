import { sendContactEmail } from "@/lib/mail"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { companyName, contactName, email, phone, productType, description } =
      body

    // Validate required fields
    if (!companyName || !contactName || !email || !phone || !productType) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin bắt buộc" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email không hợp lệ" },
        { status: 400 }
      )
    }

    // Send email
    await sendContactEmail({
      companyName,
      contactName,
      email,
      phone,
      productType,
      description: description || "",
    })

    return NextResponse.json(
      {
        message: "Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ trong 24 giờ.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)

    return NextResponse.json(
      {
        error: "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại hoặc liên hệ trực tiếp.",
      },
      { status: 500 }
    )
  }
}
