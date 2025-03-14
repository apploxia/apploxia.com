import Link from "next/link"
import Image from 'next/image'

export default function LegalStatement() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="container px-4 py-6 flex items-center justify-between border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image
                  src="/apploxia_logo.png"
                  width={128}
                  height={128}
                  alt="Picture of the apploxia"
                />
          <span className="tracking-tight">Apploxia</span>
        </Link>
        <nav className="flex gap-6">
          <Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/legal" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Legal
          </Link>
        </nav>
      </header>
      <main className="flex-1 container py-12 px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Legal Statement
            </h1>
            <p className="mt-4 text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Terms of Use</h2>
            <p className="text-slate-600">
              These terms and conditions outline the rules and regulations for the use of Apploxias website and
              services.
            </p>
            <p className="text-slate-600">
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
              Apploxias website if you do not accept all of the terms and conditions stated on this page.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Intellectual Property Rights</h2>
            <p className="text-slate-600">
              Unless otherwise stated, Apploxia and/or its licensors own the intellectual property rights for all
              material on Apploxia. All intellectual property rights are reserved. You may view and/or print pages from
              the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className="text-slate-600">You must not:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from the website</li>
              <li>Reproduce, duplicate or copy material from the website</li>
              <li>Redistribute content from Apploxia (unless content is specifically made for redistribution)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Disclaimer</h2>
            <p className="text-slate-600">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and
              conditions relating to our website and the use of this website (including, without limitation, any
              warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of
              reasonable care and skill).
            </p>
            <p className="text-slate-600">Nothing in this disclaimer will:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
            <p className="text-slate-600">If you have any questions about these terms, please contact us at:</p>
            <p className="text-slate-600">
              Email:{" "}
              <a href="mailto:hello@apploxia.com" className="text-primary hover:underline">
                hello@apploxia.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t border-slate-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Apploxia. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">
                Legal Statement
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

