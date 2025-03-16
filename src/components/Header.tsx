import Link from "next/link"
import Image from 'next/image'
import { Mail } from "lucide-react"

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
              <div className="relative">
                <Link
                  href="/ehyp"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full font-medium bg-[#52b69a] text-white hover:bg-[#429980] transition-colors min-w-[100px]"
                >
                  HYP+
                </Link>
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full shadow-sm">
                  New
                </span>
              </div>
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