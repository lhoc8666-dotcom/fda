"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  { label: "Phân tích", href: "#pain-points" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Liên hệ", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[70px] items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vexim-J9SIf3QvFqXPtY8fbXlgwVYEYHsRjz.png" 
              alt="Vexim Global Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-[var(--font-display)] font-semibold"
            >
              Nhận tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-2">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vexim-J9SIf3QvFqXPtY8fbXlgwVYEYHsRjz.png" 
                    alt="Vexim Global Logo"
                    className="h-10 w-auto"
                  />
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left font-sans text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-[var(--font-display)] font-semibold"
                >
                  Nhận tư vấn miễn phí
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
