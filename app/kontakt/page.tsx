import { Metadata } from 'next'
import { KontaktPage } from '@/components/KontaktPage'

export const metadata: Metadata = {
  title: 'Kontakt - Lemoine Nutzfahrzeuge Bielefeld',
  description: 'Kontaktieren Sie uns für LKW-Kauf oder Verkauf. Kostenlose Beratung, schnelle Antwort garantiert. Tel: 0521 / 123 456 78',
  alternates: {
    canonical: 'https://lemoine-nutzfahrzeuge.de/kontakt'
  }
}

export default function KontaktSeite() {
  return <KontaktPage />
}