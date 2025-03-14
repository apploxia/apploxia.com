import Link from "next/link"
import Image from 'next/image'
import { Mail, Twitter, Github, Instagram } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/apploxia_logo.png"
              width={24}
              height={24}
              alt="Picture of the apploxia"
            />
            <span className="tracking-tight">Apploxia</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://twitter.com/apploxia"
                className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter className="h-5 w-5 text-slate-600 group-hover:text-slate-900" />
              </a>
              <a
                href="https://github.com/apploxia"
                className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
              >
                <Github className="h-5 w-5 text-slate-600 group-hover:text-slate-900" />
              </a>
              <a
                href="https://www.instagram.com/apploxia/"
                className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="h-5 w-5 text-slate-600 group-hover:text-slate-900" />
              </a>
            </div>
            <a
              href="mailto:hello@apploxia.com"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}