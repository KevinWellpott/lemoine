import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lemoine Nutzfahrzeuge - LKW & Nutzfahrzeuge kaufen in Bielefeld',
  description: 'Ihr Partner für LKW und Nutzfahrzeuge in Bielefeld. Große Auswahl an Mercedes, MAN, Volvo, Scania. Professionelle Beratung, Finanzierung und Wartung. Jetzt Termin vereinbaren!',
  alternates: {
    canonical: 'https://lemoine-nutzfahrzeuge.de'
  }
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* Hier kommen später die anderen Sections */}
      </main>
      <Footer />
    </>
  )
}