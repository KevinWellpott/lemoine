import { Metadata } from 'next'
import { DatenschutzPage } from '@/components/DatenschutzPage'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Lemoine Nutzfahrzeuge',
  description: 'Datenschutzerklärung von Lemoine Nutzfahrzeuge - Informationen zur Datenverarbeitung',
  robots: 'index, follow'
}

export default function Datenschutz() {
  return <DatenschutzPage />
}