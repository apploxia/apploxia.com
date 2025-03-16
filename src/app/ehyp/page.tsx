import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Apple } from 'lucide-react'

export default function EHYP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#52b69a] to-[#429980] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Apploxia</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  HYP+
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Your Personal Health Companion
                </p>
              </div>

              <p className="text-lg text-white/80 leading-relaxed">
                Track your health metrics, set goals, and achieve better wellness with eHYP. 
                Our intuitive iOS app helps you maintain a healthier lifestyle through personalized insights and recommendations.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white hover:bg-black/90 transition-colors"
                >
                  <Apple className="h-5 w-5" />
                  <span className="font-medium">Download on the App Store</span>
                </a>
              </div>

              <div className="pt-4">
                <p className="text-sm text-white/70">
                  Available for iOS 15.0 or later
                </p>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="w-[280px] md:w-[320px] relative">
                <div className="aspect-[9/19] relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#52b69a] to-transparent md:hidden"></div>
                  <Image
                    src="/eHYP_mockup.jpeg"
                    alt="eHYP App Screenshot"
                    width={320}
                    height={680}
                    className="w-full h-full object-contain rounded-[2.5rem] shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Health Tracking</h3>
              <p className="text-white/80">
                Monitor your vital signs, activity levels, and wellness metrics in real-time.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Smart Insights</h3>
              <p className="text-white/80">
                Get personalized recommendations based on your health data and goals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Progress Reports</h3>
              <p className="text-white/80">
                View detailed reports and track your progress over time with beautiful visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 