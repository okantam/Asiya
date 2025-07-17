import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/paint-brash.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center bg-soft-white/95 dark:bg-gray-800/95 p-8 rounded-lg max-w-3xl mx-4 border border-border dark:border-gray-700">
          <h1 className="text-4xl md:text-5xl font-serif italic text-coral-600 dark:text-coral-400 mb-4">
            Let's Create Together
          </h1>
          <p className="text-lg text-coffee/80 dark:text-gray-300">
            Ready to start your artistic journey? Get in touch to learn more about
            classes, schedule a consultation, or ask any questions about art education.
          </p>
        </div>
      </section>

      {/* Main Content */}

      {/* Contact Form Section */}
      <section className="py-16">
        <ContactForm />
      </section>
    </div>
  );
}
