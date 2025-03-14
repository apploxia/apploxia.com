import Image from 'next/image'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex items-center justify-center py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-12">
                <Image
                  src="/apploxia_logo.png"
                  width={128}
                  height={128}
                  alt="Picture of the apploxia"
                />
              </div>

              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                  Apploxia
                </h1>
                <p className="text-xl text-slate-600 mb-6 font-light">
                  Indie mobile app studio. Breathing life into your ideas.
                </p>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6"></div>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  We are a passionate team of developers and designers dedicated to creating innovative and
                  user-friendly mobile applications that provide exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

