'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Avatar,
} from '@chakra-ui/react'

export function BewertungenSection() {
  const bewertungen = [
    {
      name: "Mark Heine",
      text: "Sehr nette und ehrliche Beratung. Habe zwei schöne Sattelaufzüge gekauft. Immer wieder gerne!",
      sterne: 5,
    },
    {
      name: "Markus Nolte", 
      text: "Sehr nettes Personal und auch immer hilfsbereit wenn man Probleme hat versuchen sie ne Lösung zu finden. Also ich werde dort immer wieder kaufen top Leute.",
      sterne: 5,
    },
    {
      name: "Horst Guerntke",
      text: "Alles sehr gut in der Werkstatt. Sehr freundliche Mitarbeiter",
      sterne: 5,
    },
    {
      name: "Ralf Uttenreuther",
      text: "Freundliche, nette und kompetente Leute",
      sterne: 5,
    },
    {
      name: "Stephan",
      text: "Bodenständig und Fair",
      sterne: 5,
    },
  ]

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="6xl">
        {/* Header */}
        <VStack spacing={{ base: 6, md: 8 }} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="700"
            color="gray.900"
          >
            Das sagen unsere Kunden
          </Heading>

          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600" 
            maxW="600px"
          >
            Über 500 zufriedene Kunden vertrauen auf unsere Expertise seit 1998.
          </Text>
        </VStack>

        {/* Bewertungen Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} mb={{ base: 12, md: 16 }}>
          {bewertungen.map((bewertung, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "blue.300",
                shadow: "md"
              }}
              transition="all 0.2s"
            >
              {/* Sterne */}
              <HStack spacing={1} mb={4}>
                {[...Array(bewertung.sterne)].map((_, i) => (
                  <Text key={i} color="orange.400" fontSize="lg">
                    ⭐
                  </Text>
                ))}
              </HStack>

              {/* Bewertungstext */}
              <Text 
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.6"
                color="gray.700"
                mb={6}
              >
                "{bewertung.text}"
              </Text>

              {/* Customer Info */}
              <HStack spacing={3}>
                <Avatar
                  size="sm"
                  name={bewertung.name}
                  bg="blue.500"
                  color="white"
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="600" color="gray.800" fontSize="sm">
                    {bewertung.name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    mobile.de Kunde
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Stats */}
        <Box 
          bg="white"
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          border="1px solid"
          borderColor="gray.200"
          textAlign="center"
        >
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 6, md: 8 }}>
            <VStack spacing={2}>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="gray.900">
                4.8/5
              </Text>
              <Text color="gray.600" fontSize="sm" fontWeight="500">
                Durchschnittsbewertung
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="gray.900">
                500+
              </Text>
              <Text color="gray.600" fontSize="sm" fontWeight="500">
                Zufriedene Kunden
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="gray.900">
                98%
              </Text>
              <Text color="gray.600" fontSize="sm" fontWeight="500">
                Weiterempfehlungsrate
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}