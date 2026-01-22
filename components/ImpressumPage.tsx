'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

export function ImpressumPage() {
  return (
    <>
      <Header />
      <Box pt={{ base: 20, md: 24 }} pb={{ base: 16, md: 20 }} bg="white">
        <Container maxW="4xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" color="gray.800">
              Impressum
            </Heading>

            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Angaben gemäß § 5 TMG
                </Heading>
                <Text lineHeight="tall">
                  <strong>Lemoine Nutzfahrzeuge</strong><br />
                  Brönninghauser Str. 35B<br />
                  33729 Bielefeld
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Kontakt
                </Heading>
                <Text lineHeight="tall">
                  <strong>Telefon:</strong> +49 521 123 456 78<br />
                  <strong>E-Mail:</strong> info@lemoine-nutzfahrzeuge.de<br />
                  <strong>Website:</strong> www.lemoine-nutzfahrzeuge.de
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Vertretungsberechtigte Geschäftsführer
                </Heading>
                <Text lineHeight="tall">
                  [Name des Geschäftsführers]
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Registereintrag
                </Heading>
                <Text lineHeight="tall">
                  Eintragung im Handelsregister.<br />
                  <strong>Registergericht:</strong> Amtsgericht Bielefeld<br />
                  <strong>Registernummer:</strong> [HRB-Nummer]
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Umsatzsteuer-ID
                </Heading>
                <Text lineHeight="tall">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <strong>DE [Umsatzsteuer-ID]</strong>
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Berufsrechtliche Regelungen
                </Heading>
                <Text lineHeight="tall">
                  Kfz-Handel nach § 38 GewO<br />
                  Zuständige Aufsichtsbehörde: Stadt Bielefeld, Gewerbeamt
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  EU-Streitschlichtung
                </Heading>
                <Text lineHeight="tall">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <Text as="a" href="https://ec.europa.eu/consumers/odr/" color="blue.500" textDecoration="underline" ml={1}>
                    https://ec.europa.eu/consumers/odr/
                  </Text>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </Heading>
                <Text lineHeight="tall">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </Text>
              </Box>

              <Box bg="gray.50" p={6} borderRadius="lg">
                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  <strong>Haftungsausschluss:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}