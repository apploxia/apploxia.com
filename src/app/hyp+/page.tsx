import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Apple, Stethoscope, Calculator, BarChart3 } from 'lucide-react'

export default function HYPPlus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#52b69a] to-[#429980] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="pt-6 pb-3">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Apploxia</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/eHYP_AppLogo.png"
                    alt="HYP+ App Logo"
                    width={60}
                    height={60}
                    className="rounded-xl shadow-md"
                  />
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                    HYP+
                  </h1>
                </div>
                <p className="text-2xl text-white/90 font-medium">
                  Aile Hekimleri İçin Akıllı Performans Takip Asistanı
                </p>
              </div>

              <p className="text-lg text-white/85 leading-relaxed">
                Birinci basamak sağlık hizmetlerinde performans takibini kolaylaştıran, otomatik hesaplama ve analiz özellikleriyle donatılmış profesyonel bir iOS uygulaması.
              </p>
              <p className="text-lg text-white/85 leading-relaxed">
                HYP+ ile tüm tarama ve izlem performansınızı kolayca takip edin, maaşınıza olan etkisini anında görün.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white hover:bg-black/90 transition-colors"
                >
                  <Apple className="h-5 w-5" />
                  <span className="font-medium">App Store&apos;da İndir</span>
                </a>
              </div>

              <p className="text-sm text-white/70">
                iOS 17.6 ve üzeri sürümler için uyumludur.
              </p>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="w-[320px] md:w-[380px] lg:w-[420px] relative">
                <div className="aspect-[9/19] relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#52b69a] to-transparent md:hidden"></div>
                  <Image
                    src="/hyp+_mockup.png"
                    alt="HYP+ App Screenshot"
                    width={420}
                    height={900}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Tarama ve İzlem Performans Takibi</h3>
              </div>
              <p className="text-lg text-white/85">
                Sağlık tarama ve izlem süreçlerinizi tek platformda yönetin, performansınızı artırın.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Otomatik Hesaplama Sistemi</h3>
              </div>
              <p className="text-lg text-white/85">
                Performans ve teşvik ödemelerinizi otomatik hesaplayarak süreci kolaylaştırın.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Performans Analizi</h3>
              </div>
              <p className="text-lg text-white/85">
                Detaylı istatistikler ve karşılaştırmalarla performansınızı veriye dayalı yönetin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 