"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Example state for admin check
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-br from-pink-50 to-pink-100 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center space-x-2">
            <div className="w-8 h-8 bg-coral-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🎨</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-serif font-bold text-coffee dark:text-primary-dark">
                Art With
              </span>
              <span className=" text-xl lg:text-2xl text-coral-600 dark:text-primary-dark font-medium tracking-wide">
                Asiya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-coral-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname === "/"
                        ? "bg-accent text-coral-600"
                        : "bg-background hover:text-accent-foreground"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/lessons"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-coral-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname === "/lessons"
                        ? "bg-accent text-coral-600"
                        : "bg-background hover:text-accent-foreground"
                    }`}
                  >
                    Lesson & Curriculum
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/portfolio"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-coral-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname === "/portfolio"
                        ? "bg-accent text-coral-600"
                        : "bg-background hover:text-accent-foreground"
                    }`}
                  >
                    Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>
                 My Works
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[200px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/elementary-art"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        Elementary Art
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/middle-school-art"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        Middle School Art
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/high-school-art"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        High School Art
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-coral-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname === "/about"
                        ? "bg-accent text-coral-600"
                        : "bg-background hover:text-accent-foreground"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-coral-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname === "/contact"
                        ? "bg-accent text-coral-600"
                        : "bg-background hover:text-accent-foreground"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Authentication Links & Theme Toggle - Desktop */}

          <div className="flex items-center space-x-4 ">
            {isAdmin && (
              <div className="hidden lg:flex items-center space-x-4 ml-8">
                <Link
                  href="/auth/signin"
                  className="text-foreground hover:text-coral-600 dark:hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-dusty-rose hover:bg-primary-dark dark:bg-dusty-rose  text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  href="/admin"
                  className="text-foreground hover:text-coral-600 dark:hover:text-coral-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Admin
                </Link>
              </div>
            )}

            <ThemeToggle />
          </div>

          <div className="flex md:hidden justify-center">
            <span
              className="text-3xl text-center font-bold text-coral-600 drop-shadow-md"
              style={{ fontFamily: "sacramento,cursive" }}
            >
              Artist & Educator
            </span>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-coral-600">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Menu</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/" ? "text-coral-600" : "hover:text-coral-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/lessons"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/lessons" ? "text-coral-600" : "hover:text-primary-dark"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Lessons
                </Link>
                <Link
                  href="/portfolio"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/portfolio"
                      ? "text-primary-dark"
                      : "hover:text-primary-dark"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>

                <Link
                  href="/about"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/about"
                      ? "text-primary-dark"
                      : "hover:text-primary-dark"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/contact"
                      ? "text-primary-dark"
                      : "hover:text-primary-dark"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                {/* <Link
                  href="/auth/signin"
                  className="text-lg font-medium hover:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="text-lg font-medium hover:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  href="/admin"
                  className="text-lg font-medium hover:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
