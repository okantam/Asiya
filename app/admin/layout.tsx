"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Upload, Users, Settings, ArrowLeft } from "lucide-react"

const adminNavItems = [
  
  {
    title: "Upload Artwork",
    href: "/admin",
    icon: Upload,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border min-h-screen">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-pink-600 dark:bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎨</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg text-foreground">Admin Panel</span>
                  <span className="font-serif text-xs text-muted-foreground -mt-1">ART WITH Asiya</span>
                </div>
              </div>
            </div>

            <nav className="space-y-2">
              <Link
                href="/"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-accent rounded-lg px-3 py-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Site</span>
              </Link>

              {adminNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors",
                      isActive
                        ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                        : "text-muted-foreground hover:text-green-600 dark:hover:text-green-400 hover:bg-accent",
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
