// Structured Data for Person/Artist
export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asiya Kine Brew",
  jobTitle: "Art Educator & Artist",
  description:
    "Inspiring creativity through art and education. Art educator specializing in elementary to high school art instruction.",
  url: "https://asiyakinebrew.com",
  image: "https://asiyakinebrew.com/images/Asiya-profile.png",
  sameAs: [
    // Add your social media profiles here
    // "https://instagram.com/yourusername",
    // "https://linkedin.com/in/yourusername"
  ],
  knowsAbout: [
    "Art Education",
    "Visual Arts",
    "Art Instruction",
    "Creative Education",
    "Art Curriculum Development",
  ],
  workLocation: {
    "@type": "Place",
    name: "Philadelphia, PA",
  },
};


// Structured Data for Website/Organization
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Art With Asiya",
  "url": "https://asiyakinebrew.com",
  "description": "Inspiring creativity through art and education. Explore student artwork from elementary to high school levels.",
  "author": {
    "@type": "Person",
    "name": "Asiya Kine Brew"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://asiyakinebrew.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};