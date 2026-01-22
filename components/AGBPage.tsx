'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

export function AGBPage() {
  return (
    <>
      <Header />
      <Box pt={{ base: 20, md: 24 }} pb={{ base: 16, md: 20 }} bg="white">
        <Container maxW="4xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" color="gray.800">
              Allgemeine Geschäftsbedingungen
            </Heading>

            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 1 Geltungsbereich
                </Heading>
                <Text lineHeight="tall">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäfte zwischen der Firma 
                  Lemoine Nutzfahrzeuge und ihren Kunden. Abweichende Bedingungen des Kunden werden 
                  nicht anerkannt, es sei denn, wir haben ausdrücklich schriftlich zugestimmt.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 2 Vertragsschluss
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich 
                  als verbindlich bezeichnet sind.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (2) Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch 
                  die Lieferung der Ware zustande.
                </Text>
                <Text lineHeight="tall">
                  (3) Änderungen des Vertrages bedürfen der Schriftform.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 3 Preise und Zahlungsbedingungen
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  (1) Die Preise verstehen sich als Nettopreise zuzüglich der gesetzlichen Mehrwertsteuer.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (2) Bei Fahrzeugkäufen ist eine Anzahlung in Höhe von mindestens 20% des Kaufpreises 
                  bei Vertragsschluss fällig. Der Restbetrag ist bei Übergabe des Fahrzeugs zu zahlen.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (3) Zahlungen sind spätestens 14 Tage nach Rechnungsstellung ohne Abzug fällig.
                </Text>
                <Text lineHeight="tall">
                  (4) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem 
                  Basiszinssatz berechnet.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 4 Lieferung und Gefahrenübergang
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  (1) Liefertermine sind nur verbindlich, wenn sie von uns schriftlich bestätigt wurden.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (2) Die Gefahr geht mit der Bereitstellung des Fahrzeugs zur Abholung auf den Käufer über.
                </Text>
                <Text lineHeight="tall">
                  (3) Teillieferungen sind zulässig, soweit sie dem Käufer zumutbar sind.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 5 Gewährleistung
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  (1) Wir gewähren eine Gewährleistung von 12 Monaten auf verkaufte Gebrauchtfahrzeuge, 
                  beginnend mit dem Tag der Übergabe.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (2) Die Gewährleistung umfasst die Reparatur oder den Austausch defekter Teile nach 
                  unserer Wahl.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (3) Ausgeschlossen von der Gewährleistung sind:
                </Text>
                <UnorderedList mb={4} ml={6}>
                  <ListItem>Verschleißteile (Reifen, Bremsen, Kupplung etc.)</ListItem>
                  <ListItem>Schäden durch unsachgemäße Behandlung</ListItem>
                  <ListItem>Schäden durch normale Abnutzung</ListItem>
                  <ListItem>Schäden durch Nichtbeachtung der Betriebsanleitung</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 6 Eigentumsvorbehalt
                </Heading>
                <Text lineHeight="tall">
                  Das verkaufte Fahrzeug bleibt bis zur vollständigen Bezahlung des Kaufpreises 
                  unser Eigentum. Der Käufer ist verpflichtet, das Fahrzeug pfleglich zu behandeln 
                  und gegen Diebstahl und Beschädigungen zu versichern.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 7 Haftung
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  (1) Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (2) Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht 
                  wesentliche Vertragspflichten verletzt werden.
                </Text>
                <Text lineHeight="tall">
                  (3) Die Haftung für mittelbare Schäden und Folgeschäden ist ausgeschlossen.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 8 Datenschutz
                </Heading>
                <Text lineHeight="tall">
                  Wir verarbeiten personenbezogene Daten im Einklang mit den Bestimmungen der 
                  Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz. 
                  Einzelheiten regelt unsere Datenschutzerklärung.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  § 9 Schlussbestimmungen
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  (1) Erfüllungsort und Gerichtsstand ist Bielefeld.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  (2) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </Text>
                <Text lineHeight="tall">
                  (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt der übrige Vertrag wirksam.
                </Text>
              </Box>

              <Box bg="gray.50" p={6} borderRadius="lg">
                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  <strong>Stand:</strong> Dezember 2025<br />
                  Lemoine Nutzfahrzeuge, Brönninghauser Str. 35B, 33729 Bielefeld
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