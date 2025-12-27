'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'

export function AnkaufSection() {
  const konkurenzNachteile = [
    "Lange Bearbeitungs- und Antwortzeiten",
    "Transaktionen die sich in die Länge ziehen", 
    "Kaufen meistens nur Fahrzeuge von bestimmten Herstellern",
    "Kaufen LKW nur regional an",
    "Meistens mehrere Ansprechpartner, die die Prozesse komplizierter machen"
  ]

  const lemoineVorteile = [
    "Schnelle Preiseinschätzung Ihrer Fahrzeuge oder Auflieger",
    "Schnelle Überweisung Ihres Geldes",
    "Wir kaufen LKW und Auflieger unabhängig vom Hersteller", 
    "Wir kaufen Ihren LKW unabhängig von Ihrem Standort",
    "Ein Ansprechpartner, der Sie während des kompletten Prozesses betreut"
  ]

  return (
    <Box py={{ base: 12, md: 20 }} bg="gray.50" id="ankauf">
      <Container maxW="7xl">
        {/* Header mit rotem Banner */}
        <Box textAlign="center" mb={{ base: 10, md: 16 }}>
          <Box
            bgGradient="linear(135deg, #1e40af, #3b82f6)"
            color="white"
            py={{ base: 4, md: 6 }}
            px={{ base: 6, md: 10 }}
            borderRadius="2xl"
            display="inline-block"
            transform="rotate(-1deg)"
            shadow="2xl"
            mb={8}
            _hover={{ transform: "rotate(0deg)", transition: "all 0.3s" }}
          >
            <Heading 
              as="h2" 
              fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="800"
              lineHeight="shorter"
              textAlign="center"
            >
              Warum Sie Ihren LKW oder Auflieger an<br />
              <Text as="span" color="yellow.300">Lemoine Nutzfahrzeuge</Text> verkaufen sollten
            </Heading>
          </Box>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.700" 
            maxW="1000px" 
            mx="auto"
            lineHeight="tall"
            fontWeight="500"
          >
            Verkaufen Sie Ihren LKW oder Auflieger einfach, schnell und zum fairen Preis - 
            mit Lemoine Nutzfahrzeuge! Als einer der größten Händler für Volvo und Mercedes LKW in 
            Deutschland und mit über 25 Jahren Erfahrung sind wir Ihr verlässlicher Partner. 
            Profitieren Sie von einer reibungslosen Abwicklung, transparenter Beratung und 
            attraktiven Konditionen.
          </Text>
        </Box>

        {/* Vergleich: Andere Anbieter vs. Lemoine */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} mb={16}>
          {/* Andere Anbieter */}
          <Box
            bg="white"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            shadow="xl"
            border="2px solid"
            borderColor="red.200"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              right: '-2px',
              bottom: '-2px',
              bg: 'linear-gradient(135deg, #fee2e2, #fecaca)',
              borderRadius: '2xl',
              zIndex: -1
            }}
          >
            <Box mb={6}>
              <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} mb={4} color="gray.800">
                Andere Anbieter
              </Heading>
            </Box>
            
            <VStack spacing={4} align="stretch">
              {konkurenzNachteile.map((nachteil, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Box
                    w="24px"
                    h="24px"
                    bg="red.500"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt={1}
                  >
                    <Text color="white" fontSize="sm" fontWeight="bold">✕</Text>
                  </Box>
                  <Text 
                    fontSize={{ base: "md", md: "lg" }} 
                    color="gray.700" 
                    lineHeight="tall"
                    fontWeight="500"
                  >
                    {nachteil}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Lemoine Vorteile */}
          <Box
            bg="linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            shadow="2xl"
            border="2px solid"
            borderColor="green.300"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              right: '-3px',
              bottom: '-3px',
              bg: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '2xl',
              zIndex: -1
            }}
          >
            <Box mb={6}>
              <Heading 
                as="h3" 
                fontSize={{ base: "xl", md: "2xl" }} 
                mb={2} 
                color="green.700"
                fontWeight="800"
              >
                Lemoine Nutzfahrzeuge
              </Heading>
              <Text fontSize="sm" color="green.600" fontWeight="600">
                🏆 Ihr vertrauensvoller Partner seit 1998
              </Text>
            </Box>
            
            <VStack spacing={4} align="stretch">
              {lemoineVorteile.map((vorteil, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Box
                    w="24px"
                    h="24px"
                    bg="green.500"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt={1}
                  >
                    <Text color="white" fontSize="sm" fontWeight="bold">✓</Text>
                  </Box>
                  <Text 
                    fontSize={{ base: "md", md: "lg" }} 
                    color="gray.700" 
                    lineHeight="tall"
                    fontWeight="500"
                  >
                    {vorteil}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* CTA Section */}
        <Box 
          bgGradient="linear(135deg, #1e40af, #3b82f6)"
          color="white"
          borderRadius="3xl"
          p={{ base: 8, md: 12 }}
          textAlign="center"
          shadow="2xl"
          position="relative"
          overflow="hidden"
        >
          {/* Glassmorphism Background Effect */}
          <Box
            position="absolute"
            top="20%"
            right="10%"
            w="200px"
            h="200px"
            bg="rgba(255,255,255,0.1)"
            borderRadius="50%"
            filter="blur(40px)"
            zIndex={0}
          />
          
          <Box position="relative" zIndex={1}>
            <Heading 
              as="h3" 
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
              mb={6}
              fontWeight="800"
              textShadow="0 2px 4px rgba(0,0,0,0.3)"
            >
              Jetzt Fahrzeug verkaufen
            </Heading>
            
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              mb={8} 
              opacity={0.9}
              maxW="600px"
              mx="auto"
              lineHeight="tall"
            >
              Erhalten Sie eine kostenlose Bewertung Ihres LKWs oder Aufliegers. 
              Schnell, unkompliziert und zum besten Preis.
            </Text>
            
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={4}
              justify="center"
              align="center"
            >
              <Button
                size="xl"
                bg="rgba(255,255,255,0.9)"
                color="black"
                _hover={{ 
                  bg: "white",
                  transform: 'translateY(-3px)', 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)' 
                }}
                transition="all 0.3s"
                borderRadius="xl"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="700"
                as="a"
                href="tel:+4952112345678"
                minW="250px"
              >
                📞 0521 / 123 456 78
              </Button>
              
              <Button
                size="xl"
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="white"
                _hover={{ 
                  bg: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 15px 35px rgba(255,255,255,0.2)' 
                }}
                transition="all 0.3s"
                borderRadius="xl"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="700"
                minW="250px"
              >
                💬 Kostenlose Bewertung
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}