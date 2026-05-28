"use client"

const partners = [
  {
    name: "Libra",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-WanEABCOus9JZiOIlpCSC4jxB510xy.png",
  },
  {
    name: "Green Foods",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t62EDOD56eM0AngQGToKwkyoqX9jUu.png",
  },
  {
    name: "BimiFoods",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logobimifoods-removebg-preview-1747215108-XDC3YnzhVZmIOgCcPsKJxrJ0gGmS6N.png",
  },
  {
    name: "Dann Food",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bjlt-4Z8iJvSUTF7pQmpfchNfMGKrU6HhmT.jpg",
  },
  {
    name: "Pham Gia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/166683691124-yoGlukM90FADEe1GzLnoe2MjaS8QIM.png",
  },
]

export function PartnersSection() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Đối tác tin tưởng Vexim Global
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-32 md:h-20 md:w-40 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
