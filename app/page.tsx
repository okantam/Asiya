import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background-blue.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center bg-background/95 dark:bg-background/90 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-4 border border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Cheryl</h1>
          <h2 className="text-2xl md:text-3xl font-serif italic text-muted-foreground mb-4">Art Educator/Artist</h2>
          <p className="text-lg text-muted-foreground mb-6">Inspiring Creativity Through Art & Education</p>
          <Button
            asChild
            className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-3"
          >
            <Link href="/elementary-art">Student Art Work</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-green-50 dark:bg-green-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Hi, I'm Cheryl</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Welcome! I am an experienced art educator passionate about fostering creativity in students. Through
                  hands-on projects, mixed media, and mindfulness, I help young artists explore, express, and gain
                  confidence in their creative process.
                </p>
                <div className="flex space-x-4 mb-6">
                  <Link href="#" className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400">
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="bg-green-700 text-white hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 border-green-700 dark:border-green-600"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=face"
                  alt="Cheryl - Art Educator"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Elementary Art */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow border border-border">
              <div className="h-48 bg-blue-100 dark:bg-blue-900/20">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop"
                  alt="Elementary Art - Colorful children's artwork"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Elementary Art</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Students explore colors, shapes, and textures, building creative foundations through play and
                  curiosity.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-green-700 group-hover:text-white dark:group-hover:bg-green-600 transition-colors"
                >
                  <Link href="/elementary-art" className="flex items-center">
                    View Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Middle School Art */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow border border-border">
              <div className="h-48 bg-yellow-100 dark:bg-yellow-900/20">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
                  alt="Middle School Art - Art supplies and paintings"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Middle School Art</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Growing artists experiment with techniques, materials, and self-expression, gaining confidence and
                  creativity.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-green-700 group-hover:text-white dark:group-hover:bg-green-600 transition-colors"
                >
                  <Link href="/middle-school-art" className="flex items-center">
                    View Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* High School Art */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow border border-border">
              <div className="h-48 bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop"
                  alt="High School Art - Advanced artwork and sketches"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">High School Art</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Advanced students refine their skills, explore personal themes, and blend traditional and digital
                  techniques.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-green-700 group-hover:text-white dark:group-hover:bg-green-600 transition-colors"
                >
                  <Link href="/high-school-art" className="flex items-center">
                    View Gallery <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
