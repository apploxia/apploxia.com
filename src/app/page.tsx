import Image from 'next/image'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

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
                  className="drop-shadow-md"
                />
              </div>

              <div className="text-center space-y-10">
                <div className="space-y-4">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 leading-tight">
                    Galaxy of Apps?<br className="hidden sm:block" /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">I'm the Oxygen It Needs</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-600 font-medium tracking-wide">
                    Breathing Life into Mobile
                  </p>
                </div>
                
                <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-lg md:text-xl font-normal leading-relaxed">
                    Apploxia redefines mobile with apps that stand out in a cluttered digital universe. 
                    Our passion for innovation drives us to create seamless, impactful experiences. 
                    From concept to launch, we’re your gateway to the future of mobile.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

