import Image from "next/image"
import Link from "next/link"

function MainNav() {
  return (
    <div className="flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/assets/logo-simple.svg"
          width={120}
          height={120}
          alt="My logo"
          className="w-6 h-6 block"
        />
        <span className="font-medium">App</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm">
        <Link href="/about">
          About us
        </Link>
        <Link href="/services">
          Our services
        </Link>
        <Link href="/contact">
          Contact us
        </Link>
      </nav>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
      </div>
    </header>
  )
}
