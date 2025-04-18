import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function Support() {
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
                  App Support 
                </h1>
                
                <p className="text-slate-600 mb-6">
                    Last updated: {lastUpdated}
                  </p>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Thank you for using our app! We’re here to help you have the best possible experience with our app.
                  </p>
                </div>
                <br />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">💡 Frequently Asked Questions (FAQ)</h2>
                 
                  <h2 className="text-xl font-semibold text-slate-800 mb-4">1. How do I use the app?</h2>
                  <p className="text-slate-600 mb-6">
                  HYP+ helps you track visa durations and plan your trips efficiently. From the home screen, you can add new travels and monitor their end dates easily.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Is my data safe?</h2>
                  <p className="text-slate-600 mb-6">
                    Yes. All data is stored locally on your device. We do not collect or share your personal information with third parties.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">3. How can I change the app&apos;s language?</h2>
                  <p className="text-slate-600 mb-6">
                    The app automatically switches to your device&apos;s system language.
                  </p>

                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">📧 Get Support</h2>
                  <p className="text-slate-600">
                    If you have any questions, suggestions, or encounter any issues, feel free to contact us: 
                  </p>
                  <p className="text-slate-600">
                    Email:{" "}
                    <a href="mailto:hello@apploxia.com" className="text-primary hover:underline">
                      hello@apploxia.com
                    </a>
                  </p>
                  <p>
                  📆 We typically respond within 24 hours on business days.
                  </p>
                  
                </div>

                <br />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-800">🔄 App Updates</h2>
                  <p className="text-slate-600">
                  Stay tuned for updates with new features, performance improvements, and bug fixes. Visit our App Store page regularly to keep your app up to date!
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

