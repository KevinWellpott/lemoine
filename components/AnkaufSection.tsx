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
  const vorteile = [
    {
      title: "Erfahrung seit 1998",
      description: "27 Jahre Expertise im Nutzfahrzeughandel mit über 550.000 zufriedenen Website-Besuchern"
    },
    {
      title: "Freier Händler", 
      description: "Unabhängig von Herstellern - wir beraten objektiv für Mercedes, MAN, Volvo, Scania und DAF"
    },
    {
      title: "Spezialist für Kommunaltechnik",
      description: "VDRK-Mitglied mit Expertise für Saugwagen, Kanalreinigung und Kommunalfahrzeuge"
    },
    {
      title: "Komplettservice",
      description: "Verkauf, Ankauf, Vermietung, Finanzierung und eigene Werkstatt - alles aus einer Hand"
    },
    {
      title: "Deutschlandweite Abwicklung",
      description: "Fahrzeugüberführung und Service deutschlandweit, nicht nur regional begrenzt"
    },
    {
      title: "Persönlicher Ansprechpartner",
      description: "Ein fester Ansprechpartner für Ihren kompletten Prozess - keine Weitervermittlung"
    }
  ]

  return (
    <Box py={{ base: 16, md: 24 }} bg="transparent" id="vorteile">
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
            Warum{' '}
            <Text as="span" color="blue.600">
              Lemoine Nutzfahrzeuge
            </Text>
          </Heading>
          
          <Heading
            as="h3"
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600" 
            maxW="700px"
            lineHeight="1.6"
            fontWeight="400"
          >
            Als inhabergeführtes Familienunternehmen stehen wir seit 1998 
            für Qualität, Vertrauen und persönlichen Service.
          </Heading>
        </VStack>

        {/* Vorteile Grid */}
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 6, md: 8 }} 
          mb={{ base: 12, md: 16 }}
        >
          {vorteile.map((vorteil, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "blue.300",
                shadow: "md"
              }}
              transition="all 0.2s"
              h="full"
            >
              <VStack align="start" spacing={4} h="full">
                <Heading 
                  as="h4"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="700"
                  color="gray.900"
                  lineHeight="1.3"
                >
                  {vorteil.title}
                </Heading>
                <Text 
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.600"
                  lineHeight="1.6"
                  flex="1"
                >
                  {vorteil.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Stats Section */}
        <Box
          bg="white"
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          border="1px solid"
          borderColor="gray.200"
          mb={{ base: 12, md: 16 }}
        >
          <VStack spacing={{ base: 8, md: 10 }}>
            <Heading 
              as="h4" 
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="700"
              color="gray.900"
              textAlign="center"
            >
              Zahlen, die für sich sprechen
            </Heading>
            
            <SimpleGrid 
              columns={{ base: 2, md: 4 }} 
              spacing={{ base: 6, md: 8 }}
              w="full"
            >
              {[
                { number: "27", label: "Jahre Erfahrung" },
                { number: "150+", label: "Fahrzeuge verfügbar" },
                { number: "4.8/5", label: "Google Bewertung" },
                { number: "550k+", label: "Website Besucher" }
              ].map((stat, index) => (
                <VStack key={index} spacing={2} textAlign="center">
                  <Text 
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="700"
                    color="blue.600"
                    lineHeight="1"
                  >
                    {stat.number}
                  </Text>
                  <Text 
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.600"
                    fontWeight="500"
                    textAlign="center"
                  >
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>

        {/* CTA */}
        <Box 
          bg="rgb(30,54,137, 0.8)"
          color="white"
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          textAlign="center"
        >
          <VStack spacing={6}>
            <Heading 
              as="h4" 
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="700"
            >
              Lassen Sie uns sprechen
            </Heading>
            
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              maxW="600px"
              opacity={0.9}
              lineHeight="1.6"
            >
              Ob Kauf, Verkauf oder Beratung - wir finden gemeinsam 
              die perfekte Lösung für Ihre Nutzfahrzeug-Anforderungen.
            </Text>
            
            <HStack spacing={3}>
            <Button
              size={{ base: "lg", md: "lg" }}
              bg="#1E3689"
              color="white"
              _hover={{ 
                bg: "white",
                color: "#1E3689",

                boxShadow: '0 8px 25px rgba(30,58,138,0.3)' ,
                borderColor:"1E3689",
              }}
              transition="all 0.3s"
              as="a"
              href="/kontakt"
              borderRadius="lg"
              px={{ base: 4, md: 6 }}
              fontWeight="600"
              shadow="md"
              border="1px solid"
              borderColor="#1E3689"
            >
              <Text >
                Kontakt
              </Text>
              
            </Button>
            
            <Button
             
              size={{ base: "lg", md: "lg" }}
              variant="outline"
              bg="white"
              borderColor="blue.600"
              color="blue.600"
              _hover={{ 
                bg: "#1E3689",
                color: "white",
                boxShadow: '0 8px 25px rgba(30,58,138,0.3)' 
              }}
              transition="all 0.3s"
              as="a"
              href="https://home.mobile.de/LEMOINE-NUTZFAHRZEUGE#ses"
              target="_blank"
              borderRadius="lg"
              px={{ base: 4, md: 6 }}
              fontWeight="600"
              
            >
              <Text >
                Inserate
              </Text>
          
            </Button>
          </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}