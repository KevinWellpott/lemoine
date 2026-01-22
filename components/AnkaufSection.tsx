'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'

export function AnkaufSection() {
  const konkurenzNachteile = [
    "Lange Bearbeitungs- und Antwortzeiten",
    "Transaktionen die sich in die Länge ziehen", 
    "Kaufen meistens nur Fahrzeuge von bestimmten Herstellern",
    "Kaufen LKW nur regional an",
    "Mehrere Ansprechpartner, komplizierte Prozesse"
  ]

  const lemoineVorteile = [
    "Schnelle Preiseinschätzung Ihrer Fahrzeuge",
    "Schnelle Überweisung Ihres Geldes",
    "Kaufen LKW unabhängig vom Hersteller", 
    "Kaufen deutschlandweit an",
    "Ein Ansprechpartner für den kompletten Prozess"
  ]

  return (
    <Box py={{ base: 16, md: 24 }} bg="transparent" id="ankauf">
      <Container maxW="6xl">
        {/* Header */}
        <VStack spacing={{ base: 6, md: 8 }} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="700"
            color="gray.900"
            maxW="800px"
          >
            Warum Sie Ihren LKW an{' '}
            <Text as="span" color="blue.600">
              Lemoine Nutzfahrzeuge
            </Text>{' '}
            verkaufen sollten
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600" 
            maxW="700px"
            lineHeight="1.6"
          >
            25 Jahre Erfahrung als Spezialist für Volvo und Mercedes LKW. 
            Schnell, transparent und zum fairen Preis.
          </Text>
        </VStack>

        {/* Vergleich */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} mb={16}>
          {/* Andere Anbieter */}
          <Box
            bg="white"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            border="1px solid"
            borderColor="gray.200"
          >
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} mb={6} color="gray.900">
              Andere Anbieter
            </Heading>
            
            <VStack spacing={4} align="stretch">
              {konkurenzNachteile.map((nachteil, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Box
                    w="20px"
                    h="20px"
                    bg="red.500"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt={1}
                  >
                    <Text color="white" fontSize="xs" fontWeight="bold">✕</Text>
                  </Box>
                  <Text 
                    fontSize={{ base: "md", md: "lg" }} 
                    color="gray.700"
                    lineHeight="1.5"
                  >
                    {nachteil}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Lemoine Vorteile */}
          <Box
            bg="white"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            border="2px solid"
            borderColor="green.200"
          >
            <VStack align="start" spacing={2} mb={6}>
              <Heading 
                as="h3" 
                fontSize={{ base: "xl", md: "2xl" }} 
                color="green.700"
                fontWeight="700"
              >
                Lemoine Nutzfahrzeuge
              </Heading>
              <Text fontSize="sm" color="green.600" fontWeight="600">
                Ihr Partner seit 1998
              </Text>
            </VStack>
            
            <VStack spacing={4} align="stretch">
              {lemoineVorteile.map((vorteil, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Box
                    w="20px"
                    h="20px"
                    bg="green.500"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt={1}
                  >
                    <Text color="white" fontSize="xs" fontWeight="bold">✓</Text>
                  </Box>
                  <Text 
                    fontSize={{ base: "md", md: "lg" }} 
                    color="gray.700"
                    lineHeight="1.5"
                  >
                    {vorteil}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* CTA */}
        <Box 
          bg="blue.600"
          color="white"
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          textAlign="center"
        >
          <VStack spacing={6}>
            <Heading 
              as="h3" 
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="700"
            >
              Jetzt Fahrzeug verkaufen
            </Heading>
            
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              maxW="600px"
              opacity={0.9}
            >
              Erhalten Sie eine kostenlose Bewertung Ihres LKWs oder Aufliegers. 
              Schnell, unkompliziert und zum besten Preis.
            </Text>
            
            <HStack
              spacing={4}
              flexWrap="wrap"
              justify="center"
            >
              
              
              <Button
                size="lg"
                h="56px"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
                borderRadius="xl"
                px={8}
                fontSize="lg"
                fontWeight="600"
              >
                Kontakt aufnehmen
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}