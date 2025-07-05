import React from "react";
import { Palette } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Palette className="h-8 w-8 text-coral-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-sage-green rounded-full"></div>
                </div>
                <div>
                  <span className=" text-sm font-serif font-bold">Art With</span>
                  <div className="text-xl text-coral-600 font-medium tracking-wide uppercase">
                    Asiya Kinebrew-Okanta
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Inspiring creativity and nurturing artistic talent through personalized
                art instruction, mindful practices, and comprehensive educational
                resources.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-coral-600">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-coral-200 transition-colors"
                  >
                    About
                  </a>
                </li>
                {/* <li><a href="#gallery" className="text-gray-300 hover:text-dusty-rose transition-colors">Student Artwork</a></li> */}
                <li>
                  <a
                    href="https://docs.google.com/document/d/1FjWNguA60g2dS67Y7MswOywLRwBy5GAXBqOo6ALfRI8"
                    className="text-gray-300 hover:text-coral-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-coral-200 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-coral-600">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Elementary Art</li>
                <li>Junior School Art</li>
                <li>High School Art</li>
                <li>Creative Workshops</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 flex items-center space-x-2">
                <span>© 2025, All Rights Reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
