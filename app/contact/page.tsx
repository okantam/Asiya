"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">Contact</h1>

          <div className="max-w-2xl mx-auto text-muted-foreground space-y-4 mb-8">
            <p>Thank you for visiting my site.</p>
            <p>I'm currently based in Muscat, Oman and always happy to connect.</p>
            <p>If you have any questions or would like to reach out, feel free to contact me below.</p>
          </div>
        </div>

        <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-8 border border-border">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-4">Follow along or reach out via email or social media:</p>

            <div className="mb-6">
              <Link
                href="mailto:artdesigncheryl@gmail.com"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                artdesigncheryl@gmail.com
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="mt-1"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white px-12 py-3"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
