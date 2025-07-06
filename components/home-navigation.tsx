"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function HomeNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center  h-16">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex justify-center w-full">
            <NavigationMenuList
              className="flex justify-between !gap-x-28 items-center  w-full"
              
            >
              {/* Left navigation items */}
              <div className="flex items-center gap-4 ">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/lessons"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                    >
                      Lessons
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/portfolio"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                    >
                      Portfolio
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>

              {/* Center logo/title */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="flex items-center">
                    <span
                      className="text-3xl font-bold text-white drop-shadow-md"
                      style={{ fontFamily: "sacramento,cursive" }}
                    >
                      Artist & Educator
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Right navigation items */}
              <div className="flex items-center gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center justify-between w-full md:w-32 pt-8 md:pt-0">
            <div className="text-white">
              <ThemeToggle />
            </div>

            {/* Mobile title */}
            <div className="flex md:hidden justify-center">
              <span
                className="text-3xl text-center font-bold text-white drop-shadow-md"
                style={{ fontFamily: "sacramento,cursive" }}
              >
                Artist & Educator
              </span>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              {/* Mobile Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden text-white">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Toggle menu</span>
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
                      className="text-lg font-medium hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/lessons"
                      className="text-lg font-medium hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Lessons
                    </Link>
                    <Link
                      href="/portfolio"
                      className="text-lg font-medium hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-medium hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
