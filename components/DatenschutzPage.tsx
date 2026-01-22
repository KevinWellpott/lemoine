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

export function DatenschutzPage() {
  return (
    <>
      <Header />
      <Box pt={{ base: 20, md: 24 }} pb={{ base: 16, md: 20 }} bg="white">
        <Container maxW="4xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" color="gray.800">
              Datenschutzerklärung
            </Heading>

            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  1. Datenschutz auf einen Blick
                </Heading>
                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Allgemeine Hinweise
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
                  mit denen Sie persönlich identifiziert werden können.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  2. Allgemeine Hinweise und Pflichtinformationen
                </Heading>
                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Datenschutz
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </Text>
                
                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Verantwortliche Stelle
                </Heading>
                <Text lineHeight="tall">
                  Lemoine Nutzfahrzeuge<br />
                  Brönninghauser Str. 35B<br />
                  33729 Bielefeld<br />
                  Telefon: +49 521 123 456 78<br />
                  E-Mail: info@lemoine-nutzfahrzeuge.de
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  3. Datenerfassung auf unserer Website
                </Heading>
                
                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Cookies
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                  Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
                  und sicherer zu machen.
                </Text>

                <Text lineHeight="tall" mb={4}>
                  <strong>Notwendige Cookies:</strong> Einige Cookies sind erforderlich, damit Sie unsere 
                  Website nutzen können. Diese Cookies werden ohne Ihre Einwilligung gesetzt.
                </Text>

                <Text lineHeight="tall" mb={4}>
                  <strong>Analyse-Cookies:</strong> Diese helfen uns zu verstehen, wie Besucher mit unserer 
                  Website interagieren, indem Informationen anonym gesammelt werden.
                </Text>

                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Server-Log-Dateien
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien:
                </Text>
                <UnorderedList mb={4} ml={6}>
                  <ListItem>Browsertyp und Browserversion</ListItem>
                  <ListItem>verwendetes Betriebssystem</ListItem>
                  <ListItem>Referrer URL</ListItem>
                  <ListItem>Hostname des zugreifenden Rechners</ListItem>
                  <ListItem>Uhrzeit der Serveranfrage</ListItem>
                  <ListItem>IP-Adresse</ListItem>
                </UnorderedList>

                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Kontaktformular
                </Heading>
                <Text lineHeight="tall">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  4. Analyse-Tools und Werbung
                </Heading>
                
                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  Google Analytics
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die 
                  Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </Text>
                <Text lineHeight="tall" mb={4}>
                  Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu 
                  analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z.B. 
                  Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.
                </Text>
                <Text lineHeight="tall">
                  Die Nutzung von Google Analytics erfolgt nur mit Ihrer Einwilligung durch unser Cookie-Banner.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color="blue.600">
                  5. Ihre Rechte
                </Heading>
                <Text lineHeight="tall" mb={4}>
                  Sie haben jederzeit das Recht:
                </Text>
                <UnorderedList mb={4} ml={6}>
                  <ListItem>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</ListItem>
                  <ListItem>Berichtigung unrichtiger personenbezogener Daten zu verlangen</ListItem>
                  <ListItem>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</ListItem>
                  <ListItem>Einschränkung der Datenverarbeitung zu verlangen</ListItem>
                  <ListItem>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</ListItem>
                  <ListItem>Datenübertragbarkeit zu verlangen</ListItem>
                </UnorderedList>
                <Text lineHeight="tall">
                  Wenn Sie von diesen Rechten Gebrauch machen möchten, wenden Sie sich bitte an: 
                  info@lemoine-nutzfahrzeuge.de
                </Text>
              </Box>

              <Box bg="gray.50" p={6} borderRadius="lg">
                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  <strong>Stand:</strong> Dezember 2025<br />
                  Diese Datenschutzerklärung kann jederzeit auf unserer Website abgerufen und ausgedruckt werden.
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