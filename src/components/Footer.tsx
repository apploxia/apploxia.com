"use client"

import Link from "next/link"
import { Globe, Twitter, Github, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-slate-500 text-center md:text-left">
              © {currentYear} Apploxia. All rights reserved.
            </p>
            
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center">
              <nav className="flex flex-row justify-center flex-wrap gap-4 md:gap-0 md:flex-row md:space-x-6">
                <Link 
                  href="/privacy-policy" 
                  className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/legal-statement" 
                  className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Legal Statement
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Terms of Service
                </Link>
              </nav>
              
              <div className="flex justify-center items-center gap-2 md:ml-6">
                <a
                  href="https://twitter.com/apploxia"
                  className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <Twitter className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
                </a>
                <a
                  href="https://github.com/apploxia"
                  className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <Github className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
                </a>
                <a
                  href="https://www.instagram.com/apploxia/"
                  className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Instagram className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
                </a>
                <a
                  href="https://apploxia.com"
                  className="group p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                  aria-label="Website"
                  target="_blank"
                >
                  <Globe className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 