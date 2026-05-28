import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Vexim Global - Dịch vụ Đăng ký FDA Uy tín',
  description: 'Vexim Global - Đại lý Agent trực tiếp tại Hoa Kỳ. Hỗ trợ doanh nghiệp Việt Nam đăng ký FDA nhanh chóng, minh bạch và đáng tin cậy. 200+ doanh nghiệp đã thành công.',
  keywords: 'đăng ký FDA, FDA registration, xuất khẩu Mỹ, thực phẩm xuất khẩu, mỹ phẩm FDA, thiết bị y tế FDA, Vexim Global',
  generator: 'v0.app',
  icons: {
    icon: '/vexim-favicon.png',
    apple: '/vexim-apple-icon.png',
  },
  openGraph: {
    title: 'Vexim Global - Dịch vụ Đăng ký FDA Uy tín',
    description: 'Đại lý Agent trực tiếp tại Hoa Kỳ. Hỗ trợ doanh nghiệp Việt Nam đăng ký FDA nhanh chóng, minh bạch.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <head>
        {/* Google tag (gtag.js) - GA4 + Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-229VH1H6JW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-229VH1H6JW');
              gtag('config', 'AW-11529025982');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* Zalo Chat Widget */}
        <div 
          className="zalo-chat-widget" 
          data-oaid="2933050463560569889" 
          data-welcome-message="Vexim Global hỗ trợ kiểm tra tiêu chuẩn FDA xuất khẩu Mỹ cho nghành hàng của bạn. Bạn cần tư vấn sản phẩm nào?" 
          data-autopopup="0" 
          data-width="350" 
          data-height="420"
        />
        <script src="https://sp.zalo.me/plugins/sdk.js" async />
      </body>
    </html>
  )
}
