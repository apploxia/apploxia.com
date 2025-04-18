import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </h1>
                
                <p className="text-slate-600 mb-6">
                    Last updated: {lastUpdated}
                  </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">Introduction</h2>
                  <p className="text-slate-600">
                    At Apploxia, we respect your privacy and are committed to protecting your personal data. This privacy
                    policy will inform you about how we look after your personal data when you visit our website and tell you
                    about your privacy rights and how the law protects you.
                  </p>
                </div>
                <br />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">The Data We Collect About You</h2>
                  <p className="text-slate-600">
                    Personal data, or personal information, means any information about an individual from which that person
                    can be identified. It does not include data where the identity has been removed (anonymous data).
                  </p>
                  <p className="text-slate-600">
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                    together as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>Identity Data includes first name, last name, username or similar identifier.</li>
                    <li>Contact Data includes email address and telephone numbers.</li>
                    <li>
                      Technical Data includes internet protocol (IP) address, your login data, browser type and version, time
                      zone setting and location, browser plug-in types and versions, operating system and platform, and other
                      technology on the devices you use to access this website.
                    </li>
                    <li>Usage Data includes information about how you use our website and services.</li>
                  </ul>
                </div>
                <br />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">How We Use Your Personal Data</h2>
                  <p className="text-slate-600">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                    data in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>
                      Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                      fundamental rights do not override those interests.
                    </li>
                    <li>Where we need to comply with a legal obligation.</li>
                  </ul>
                </div>
                <br />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
                  <p className="text-slate-600">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
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

