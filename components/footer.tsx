import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 mt-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025, All Rights Reserved. Website Developed By{" "}
            <Link href="#" className="text-green-600 dark:text-green-400 hover:underline">
              Zakariya
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
