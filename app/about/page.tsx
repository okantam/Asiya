import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800">
      {/* Main Content */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-200 to-pink-100 dark:from-gray-800/90 dark:to-gray-800/90 rounded-lg shadow-lg overflow-hidden border border-border dark:border-gray-700">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 overflow-hidden">
                <Image
                  src="/images/about-profile.png"
                  alt="Asiya - Art Educator at the beach"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-8 my-auto">
                <div className="mb-8">
                  <blockquote className="text-lg italic text-foreground dark:text-gray-200 mb-4 text-center border-l-4 border-pink-300 dark:border-pink-700 pl-4 py-2 bg-pink-50 dark:bg-gray-800 rounded">
                    "Art has the role in education of helping children become like
                    themselves instead of more like everyone else." —{" "}
                    <span className="font-semibold">Sydney Gurewitz Clemens</span>
                  </blockquote>
                </div>

                <p className="text-foreground dark:text-gray-200 mb-6 leading-relaxed">
                  Hi, I'm Asiya - an artist, educator, and Visionary
                </p>

                <p className="text-foreground dark:text-gray-200 mb-6 leading-relaxed">
                  My work lives at the intersection of creativity, care, and
                  self-discovery. Whether I'm in the studio or the classroom, I believe
                  art is more than just a product - it's a process of healing, reflection,
                  and connection. Through mindful teaching and expressive practice, I help
                  students not only build skills but also tune into their inner voice,
                  their history, and their sense of wonder….
                </p>
                <p className="text-foreground dark:text-gray-200 mb-6 leading-relaxed">
                  I'm passionate about creating spaces where every student feels seen,
                  valued, and free to explore, as well as express what words sometimes
                  can't. In my classroom my approach blends traditional art techniques
                  with intuitive making, storytelling, and holistic learning. Here, we
                  honor both the mess and the magic. Let's create, grow, and imagine new
                  possibilities - together!
                </p>

                <p className="text-foreground dark:text-gray-200 mb-6 leading-relaxed">
                  Through process-based, reflective learning, I guide young artists to
                  explore their identities, tap into their intuition, and express what
                  words sometimes can't. In my classroom, we embrace exploration, make
                  space for feelings, and create with care.
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
            <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 flex items-center">
              <span className="mr-2">🎓</span>
              My Background & Experience
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
              I'm a Pre-Service Art Teacher at Miami University of Ohio, pursuing a degree
              in Art Education.
            </p>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
              My background includes collaborative lesson planning, culturally responsive
              teaching, hands-on craft facilitation, and continued exploration of
              inclusive, community-based art practices.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 flex items-center">
              <span className="mr-2">🎨</span>
              My Approach to Teaching Art
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
              I'm passionate about using art as a vehicle for learning, empowerment, and
              expression.
              <br />
              My work centers on:
            </p>
            <ul className="list-disc list-inside pl-5 text-muted-foreground dark:text-gray-300 space-y-2 mb-4">
              <li>Teaching art with purpose</li>
              <li>Designing inclusive and engaging curriculum</li>
              <li>Advocating creatively for social and educational change</li>
              <li>Empowering students through intentional, expressive experiences</li>
            </ul>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
              Whether exploring painting, mixed media, ceramics, printmaking, or digital
              art, I aim to foster a creative space that's welcoming, inclusive, and full
              of encouragement where students feel confident to take artistic risks and
              evolve through the creative journey.
            </p>
          </div>

          <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-pink-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 flex items-center">
              <span className="mr-2">📚</span>
              My Teaching Philosophy
            </h2>

            <a
              href="https://docs.google.com/document/d/1FjWNguA60g2dS67Y7MswOywLRwBy5GAXBqOo6ALfRI8/edit?usp=drivesdk"
              target="_blank"
              className="inline-flex items-center text-coral-600 hover:text-coral-700 dark:text-coral-400 dark:hover:text-coral-300 underline underline-offset-2"
            >
              Read about my teaching philosophy
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
