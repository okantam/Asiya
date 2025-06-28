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

        <div className="relative z-10 text-center bg-soft-white/95 p-8 rounded-lg max-w-3xl mx-4 border border-border">
          <h1 className="text-4xl md:text-5xl font-serif italic text-dusty-rose mb-4">
            Art Educator/Teaching Portfolio
          </h1>
          <p className="text-lg text-coffee/80">Inspiring Creativity Through Art & Education</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src="/images/new-Asiya-profile.png"
                  alt="Asiya - Art Educator at the beach"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 my-auto">
                <div className="mb-8">
                  <blockquote className="text-lg italic text-muted-foreground mb-4 text-center">
                  “Art has the role in education of helping children become like themselves instead of more like everyone else.”
                  — <span className="font-semibold">Sydney Gurewitz Clemens</span> 
                  </blockquote>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                 I'm <span className="font-bold"> Asiya Kinebrew-Okanta </span>
                   an Art Education student at Miami University with a passion for guiding children through creativity as a tool for healing, reflection, and growth. My teaching approach is rooted in the belief that art is not just skill, but "soul"... a path to wholeness, voice, and connection.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                Through process-based, reflective learning, I guide young artists to explore their identities, tap into their intuition, and express what words sometimes can’t. In my classroom, we embrace exploration, make space for feelings, and create with care.
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
              <span className="mr-2">🎓</span>
              My Background & Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
           I'm a Pre-Service Art Teacher and junior at Miami University of Ohio, pursuing a degree in Art Education.
            </p>
            <p className="text-muted-foreground leading-relaxed">
            My background includes collaborative lesson planning, culturally responsive teaching, hands-on craft facilitation, and continued exploration of inclusive, community-based art practices.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="mr-2">🎨</span>
              My Approach to Teaching Art
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
            I’m passionate about using art as a vehicle for learning, empowerment, and expression.
            <br />
            My work centers on:
            </p>
            <ul className=" list-inside text-muted-foreground space-y-2 mb-4">
              <li>🧑‍🏫 Teaching art with purpose</li>
              <li>⚜️ Designing inclusive and engaging curriculum</li>
              <li>🎯 Advocating creatively for social and educational change</li>
              <li>✨ Empowering students through intentional, expressive experiences</li>
              <li>🌟 Inspiring the next generation of artists</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
            Whether exploring painting, mixed media, ceramics, printmaking, or digital art, I aim to foster a creative space that’s welcoming, inclusive, and full of encouragement—where students feel confident to take artistic risks and evolve through the creative journey.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className=" mr-2">🌱</span>
              My Teaching Philosophy
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
            As a future in-service educator, I am passionate about creating an inclusive and supportive environment where students can freely explore their creativity and build confidence in their self-expression. I believe in the transformative power of art to inspire, heal, and connect, and I am dedicated to fostering these possibilities in every student I have the privilege to teach. 
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
