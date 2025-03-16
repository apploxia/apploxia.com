import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
                  Terms of Service
                </h1>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 mb-6">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-slate-600 mb-6">
                    By accessing and using Apploxia&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Description of Service</h2>
                  <p className="text-slate-600 mb-6">
                    Apploxia provides mobile application development services and related consulting. Our services include but are not limited to app design, development, testing, and deployment to various app stores.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">3. User Responsibilities</h2>
                  <p className="text-slate-600 mb-6">
                    Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must notify Apploxia immediately of any unauthorized use of their account.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Intellectual Property Rights</h2>
                  <p className="text-slate-600 mb-6">
                    All intellectual property rights in the services and their content are owned by or licensed to Apploxia. Users may not use, copy, adapt, modify, or create derivative works of any part of the services without our express written consent.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Privacy Policy</h2>
                  <p className="text-slate-600 mb-6">
                    Your use of Apploxia&apos;s services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Limitation of Liability</h2>
                  <p className="text-slate-600 mb-6">
                    Apploxia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Changes to Terms</h2>
                  <p className="text-slate-600 mb-6">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website. Continued use of our services after such changes constitutes acceptance of the new terms.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-800 mb-4">8. Contact Information</h2>
                  <p className="text-slate-600">
                    If you have any questions about these Terms of Service, please contact us at hello@apploxia.com.
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