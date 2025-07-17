"use client";

import { useRef, useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }
      // Set timeout to clear message after 5 seconds
      messageTimeoutRef.current = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      console.error(error);
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      messageTimeoutRef.current = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 w-1/2 mx-auto bg-white/80 dark:bg-gray-800/90 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
    >
      <div>
        <Label
          htmlFor="name"
          className="text-sm font-medium text-foreground dark:text-gray-200"
        >
          Full Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-coral-400"
        />
      </div>

      <div>
        <Label
          htmlFor="email"
          className="text-sm font-medium text-foreground dark:text-gray-200"
        >
          Email *
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-coral-400"
        />
      </div>

      <div>
        <Label
          htmlFor="message"
          className="text-sm font-medium text-foreground dark:text-gray-200"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-coral-400"
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-coral-600 hover:bg-coral-700 dark:bg-coral-700 dark:hover:bg-coral-800 text-white px-12 py-3"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="h-5 w-5 ml-2" />
        </Button>
        {submitMessage && (
          <p
            className={`text-sm text-center ${
              submitMessage.includes("error") ? "text-red-600" : "text-green-600"
            }`}
          >
            {submitMessage}
          </p>
        )}
      </div>
    </form>
  );
}
