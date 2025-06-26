import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=400&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center bg-background/95 dark:bg-background/90 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-4 border border-border">
          <h1 className="text-4xl md:text-5xl font-serif italic text-foreground mb-4">
            Art Educator/Teaching Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">Inspiring Creativity Through Art & Education</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8c5?w=400&h=400&fit=crop&crop=face"
                  alt="Cheryl - Art Educator at the beach"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-8">
                  <blockquote className="text-lg italic text-muted-foreground mb-4 text-center">
                    "When I'm not teaching or making art, you'll likely find me outside – by the ocean, in the sunlight,
                    and anywhere with wide open space. Nature feeds my creative process."
                  </blockquote>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Art has always been a meaningful part of my life, both personally and professionally. For over 15
                  years, I've had the joy of helping students tap into their creativity, build confidence, and explore
                  self-expression through hands-on projects, mixed media, and mindful art experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="text-green-600 dark:text-green-400 mr-2">🎓</span>
              My Background & Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I hold a Bachelor of Fine Arts and a Bachelor of Education, specializing in Art. Over the years, I've
              taught in Canada, Taiwan, the Cayman Islands, the United Arab Emirates, Kazakhstan, and Oman, working with
              students from elementary to high school.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience also includes curriculum development, interdisciplinary projects, ESL instruction, and an
              ongoing interest in creative therapy techniques.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="text-green-600 dark:text-green-400 mr-2">🎨</span>
              My Approach to Teaching Art
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe art is more than just technique—it's about exploration, expression, and problem-solving. My
              teaching approach centers on:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>🎯 Encouraging experimentation with materials and techniques</li>
              <li>✨ Supporting students in developing their unique artistic voice</li>
              <li>🌟 Making art accessible and enjoyable for all learners</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Whether we're working with painting, mixed media, ceramics, printmaking, or digital art, I strive to
              create a classroom environment that is engaging, inclusive, and supportive- where students feel free to
              take creative risks and grow through the process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="text-green-600 dark:text-green-400 mr-2">🌱</span>
              My Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe creativity lives in everyone, and that everyday life is full of inspiration waiting to be
              explored.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to help students feel curious and comfortable as they explore new ways of expressing their
              ideas—allowing inspiration to grow naturally, and enjoying the process of making. It's also about building
              confidence and connection—sharing their work with joy and pride, and engaging meaningfully with others
              through the creative experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
