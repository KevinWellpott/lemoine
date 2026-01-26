'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react'

export function UeberUnsSection() {
  const highlights = [
    {
      number: "1998",
      label: "Gegründet",
      description: "27 Jahre Erfahrung im Nutzfahrzeughandel"
    },
    {
      number: "4.8/5",
      label: "Kundenbewertung", 
      description: "Über 70 positive Bewertungen auf Google & mobile.de"
    },
    {
      number: "150+",
      label: "Fahrzeuge",
      description: "Großes Lager mit sofort verfügbaren LKW"
    },
    {
      number: "100%",
      label: "Freier Händler",
      description: "Unabhängig von Mercedes, MAN, Volvo & Co."
    }
  ]

  const services = [
    "Spezialist für kommunale Fahrzeuge & Saugwagen",
    "Verkauf, Ankauf & Vermietung von Nutzfahrzeugen", 
    "Finanzierung ab 0% möglich",
    "Eigene Werkstatt in Bielefeld-Altenhagen",
    "VDRK-Mitglied für Rohr- und Kanaltechnik",
    "Online-Präsenz seit über 20 Jahren"
  ]

  return (
    <Box py={{ base: 16, md: 24 }} bg="white">
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
            Über{' '}
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
            Seit 1998 Ihr vertrauensvoller Partner für LKW und Nutzfahrzeuge 
            in Bielefeld. Familienbetrieb mit Leidenschaft für Qualität.
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} mb={{ base: 12, md: 16 }}>
          {/* Story */}
          <VStack align="start" spacing={6}>
            <Heading as="h4" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="gray.900">
              Unsere Geschichte
            </Heading>
            
            <VStack align="start" spacing={4} color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
              <Text>
              Seit der Gründung 1998 in Bielefeld verbinden wir das Beste aus zwei Welten: die Ehrlichkeit und Expertise des traditionellen Nutzfahrzeughandels mit der digitalen Weitsicht eines modernen Unternehmens.

Als einer der ersten Händler online konnten wir seit 2001 über 550.000 Besucher auf unseren Plattformen beraten. Heute ist unsere 2.000 m² große Zentrale in Bielefeld-Sennestadt die Basis für Ihre Vorteile: regionale Nähe, Spezialisierung auf kommunale Fahrzeuge und Saugwagen sowie ein umfassendes Angebot für alle Nutzfahrzeug-Bedürfnisse. Bei uns kaufen Sie nicht nur ein Fahrzeug – Sie erhalten eine Lösung aus einer Hand.
              </Text>
              
       
            </VStack>
          </VStack>

          {/* Image Placeholder */}
          <Box
            bg="gray.100"
            borderRadius="2xl"
            h={{ base: "300px", md: "400px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid"
            borderColor="gray.200"
          >
            <VStack spacing={3}>
              <Text fontSize="4xl">🚛</Text>
              <Heading as="h5" color="gray.500" fontWeight="600" textAlign="center" fontSize="md">
                Wilhelm Lemoine<br />
                Geschäftsführer seit 1998
              </Heading>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Highlights */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 8 }} mb={{ base: 12, md: 16 }}>
          {highlights.map((highlight, index) => (
            <VStack key={index} spacing={3} textAlign="center">
              <Text 
                fontSize={{ base: "2xl", md: "3xl" }} 
                fontWeight="700" 
                color="blue.600"
              >
                {highlight.number}
              </Text>
              <VStack spacing={1}>
                <Heading
                  as="h5"
                  fontSize={{ base: "sm", md: "md" }} 
                  fontWeight="600" 
                  color="gray.900"
                >
                  {highlight.label}
                </Heading>
                <Text 
                  fontSize="sm" 
                  color="gray.600" 
                  textAlign="center"
                  lineHeight="1.4"
                >
                  {highlight.description}
                </Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Services & Expertise */}
        <Box
          bg="gray.50"
          borderRadius="2xl"
          p={{ base: 6, md: 8 }}
          border="1px solid"
          borderColor="gray.200"
        >
          <VStack spacing={6}>
            <Heading as="h4" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="gray.900" textAlign="center">
              Was uns auszeichnet
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
              {services.map((service, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Box
                    w="6px"
                    h="6px"
                    bg="blue.600"
                    borderRadius="50%"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text 
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    lineHeight="1.5"
                  >
                    {service}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>

        {/* Location */}
        <VStack spacing={6} textAlign="center" mt={{ base: 12, md: 16 }}>
          <Heading as="h4" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="gray.900">
            Mitten in Ostwestfalen
          </Heading>
          
          <Text 
            fontSize={{ base: "md", md: "lg" }} 
            color="gray.600" 
            maxW="600px"
            lineHeight="1.6"
          >
            Unser Standort in Bielefeld-Altenhagen bietet optimale Anbindung an die A2 
            und das deutsche Autobahnnetz. Besuchen Sie uns in der Brönninghauser Straße 35B 
            oder kontaktieren Sie uns für eine persönliche Beratung.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}