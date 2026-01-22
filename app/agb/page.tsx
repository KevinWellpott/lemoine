import { Metadata } from 'next'
import { AGBPage } from '@/components/AGBPage'

export const metadata: Metadata = {
  title: 'AGB - Lemoine Nutzfahrzeuge',
  description: 'Allgemeine Geschäftsbedingungen von Lemoine Nutzfahrzeuge',
  robots: 'index, follow'
}

export default function AGB() {
  return <AGBPage />
}