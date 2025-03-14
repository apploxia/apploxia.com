import Link from "next/link"
import { Mail, Twitter, Github, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="px-4 py-6 flex items-center justify-between border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          
          <Image
            src="/apploxia_logo.png"
            width={24}
            height={24}
            alt="Picture of the apploxia"
          />

          <span className="tracking-tight">Apploxia</span>
        </Link>
        <nav className="flex gap-6">
          <Link href="/privacy-policy" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/legal-statement" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Legal Statement
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex items-center justify-center py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-12">
                <Image
                  src="/apploxia_logo.png"
                  width={128}
                  height={128}
                  alt="Picture of the apploxia"
                />
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                  Apploxia
                </h1>
                <p className="text-xl text-slate-600 mb-6 font-light">
                  Indie mobile app studio. Breathing life into your ideas.
                </p>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6"></div>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  We are a passionate team of developers and designers dedicated to creating innovative and
                  user-friendly mobile applications that provide exceptional user experiences.
                </p>
              </div>

              <div className="flex justify-center mb-10">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full px-8 shadow-md bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                >
                  <a href="mailto:hello@apploxia.com">Get in Touch</a>
                </Button>
              </div>

              {/* Social media links */}
              <div className="flex justify-center gap-5 mb-8">
                <a
                  href="mailto:hello@apploxia.com"
                  className="p-3 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-slate-600" />
                </a>
                <a
                  href="https://apploxia.com"
                  className="p-3 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200"
                  aria-label="Website"
                >
                  <Globe className="h-5 w-5 text-slate-600" />
                </a>
                <a
                  href="https://twitter.com/apploxia"
                  className="p-3 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-slate-600" />
                </a>
                <a
                  href="https://github.com/apploxia"
                  className="p-3 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-slate-600" />
                </a>
                <a
                  href="https://www.instagram.com/apploxia/"
                  className="p-3 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t border-slate-100">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Apploxia. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal-statement" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                Legal Statement
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

