import React from 'react';
import Link from 'next/link';
import { Heart, Video, Gift, Shield, ArrowRight, Users, Radio } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

export default function page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#111c1d] font-sans">
      
      {/* Hero Section - Minimalist */}
      <section className="relative py-24 lg:py-36">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#385759] dark:text-white mb-8 leading-[1.1]">
                Conectando <br/>
                <span className="text-[#9dc0b3]">Corazones</span>.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                La primera plataforma de streaming dedicada al bienestar animal. 
                <strong className="font-medium text-[#385759] dark:text-[#9dc0b3]"> Mira, interactúa y dona</strong> en tiempo real.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link href="/explorar" className="px-8 py-3 bg-[#385759] hover:bg-[#2a4143] text-white rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg">
                  Empezar a Ver
                </Link>
                <Link href="/registro" className="px-8 py-3 text-[#385759] dark:text-[#9dc0b3] font-medium text-lg hover:underline underline-offset-4 decoration-2">
                  Crear Cuenta
                </Link>
              </div>
            </div>

            {/* Hero Image - Clean Frame */}
            <div className="flex-1 w-full max-w-lg relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-[#9dc0b3]/20 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1972&auto=format&fit=crop" 
                        alt="Happy Dog" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features - Clean Grid */}
      <section className="py-24 bg-[#f8faf9] dark:bg-[#162425]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <MinimalFeature 
              icon={<Radio className="w-6 h-6" />}
              title="Streaming en Vivo"
              description="Conoce a los animales y sus historias sin filtros."
            />
            <MinimalFeature 
              icon={<Gift className="w-6 h-6" />}
              title="Donaciones Directas"
              description="Tu ayuda llega directamente a la causa que ves."
            />
            <MinimalFeature 
              icon={<Shield className="w-6 h-6" />}
              title="Transparencia"
              description="Verifica en tiempo real cómo se utiliza tu ayuda."
            />
          </div>
        </div>
      </section>

      {/* Audience Section - Split */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Donors */}
            <div className="space-y-6">
              <Heart className="w-8 h-8 text-[#385759] dark:text-[#9dc0b3]" />
              <h3 className="text-3xl font-bold text-[#385759] dark:text-white">Para Amantes de los Animales</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Forma parte de una comunidad que celebra cada adopción y cada recuperación. Tu impacto es visible y real.
              </p>
              <Link href="/explorar" className="inline-flex items-center gap-2 text-[#385759] dark:text-[#9dc0b3] font-semibold hover:gap-3 transition-all">
                Explorar causas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Shelters */}
            <div className="space-y-6">
              <Users className="w-8 h-8 text-[#385759] dark:text-[#9dc0b3]" />
              <h3 className="text-3xl font-bold text-[#385759] dark:text-white">Para Refugios</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Una herramienta poderosa para mostrar tu trabajo, recaudar fondos transparentemente y gestionar adopciones.
              </p>
              <Link href="/registro-refugio" className="inline-flex items-center gap-2 text-[#385759] dark:text-[#9dc0b3] font-semibold hover:gap-3 transition-all">
                Registrar mi refugio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-24 bg-[#385759] text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Únete a la revolución.</h2>
          <Link href="/registro" className="inline-block px-10 py-4 bg-white text-[#385759] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Crear Cuenta Gratis
          </Link>
        </div>
      </section>

    </div>
  )
}

function MinimalFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="space-y-4">
      <div className="text-[#385759] dark:text-[#9dc0b3]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#385759] dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
        {description}
      </p>
    </div>
  )
}
