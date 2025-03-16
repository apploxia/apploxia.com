"use client"

import Link from "next/link"
import { Globe, Twitter, Github, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between w-full">
            <p className="text-xs text-slate-500">© {currentYear} Apploxia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6">
                <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                  Terms Of Service
                </Link>
                <Link href="/legal-statement" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                  Legal Statement
                </Link>
              </nav>
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
              <a
                href="https://apploxia.com"
                className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                aria-label="Website"
                target="_blank"
              >
                <Globe className="h-5 w-5 text-slate-600 group-hover:text-slate-900"  />
              </a>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 