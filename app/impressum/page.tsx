import { Metadata } from 'next'
import { ImpressumPage } from '@/components/ImpressumPage'

export const metadata: Metadata = {
  title: 'Impressum - Lemoine Nutzfahrzeuge',
  description: 'Impressum und Kontaktdaten von Lemoine Nutzfahrzeuge in Bielefeld',
  robots: 'index, follow'
}

export default function Impressum() {
  return <ImpressumPage />
}