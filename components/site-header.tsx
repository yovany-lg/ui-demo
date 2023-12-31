"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

function MainNav() {
  const pathname = usePathname();

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
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/about")
              ? "text-foreground/"
              : "text-foreground/60"
          )}
        >
          About us
        </Link>
        <Link
          href="/services"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/services")
              ? "text-foreground/"
              : "text-foreground/60"
          )}          
        >
          Our services
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/contact")
              ? "text-foreground/"
              : "text-foreground/60"
          )}
        >
          Contact us
        </Link>
      </nav>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
