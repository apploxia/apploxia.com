import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function LegalStatement() {
  const lastUpdated = new Date().toLocaleDateString()
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
                  Legal Statement
                </h1>
                <p className="text-slate-600 mb-6">
                    Last updated: {lastUpdated}
                  </p>
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
                <br />
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
                <br />
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
                <br />
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

