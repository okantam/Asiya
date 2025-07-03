"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function HomeNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span
                className="text-3xl font-bold text-white drop-shadow-md"
                style={{ fontFamily: "sacramento,cursive" }}
              >
                Asiya Kinebrew
              </span>
            </Link>
          </div> */}

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex mx-auto ">
            <NavigationMenuList className="flex gap-40">
              <NavigationMenuItem className="flex items-center">
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
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="flex items-center">
                    <span
                      className="text-3xl font-bold text-white drop-shadow-md"
                      style={{ fontFamily: "sacramento,cursive" }}
                    >
                      Artist, Educator, & Visionary
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="flex items-center">
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
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center justify-between pt-8 md:pt-0">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-8 w-8" />
            </Button>
            <div className="flex md:hidden justify-center">
              <span
                className="text-3xl text-center font-bold text-white drop-shadow-md"
                style={{ fontFamily: "sacramento,cursive" }}
              >
                Artist, Educator, & Visionary
              </span>
            </div>
            <div className="text-white">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
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
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
