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
  useColorModeValue,
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
      text: "Sehr nettes Personal und auch immer hilfsbereit wenn man Probleme hat versuchen sie ne Lösung zu finden . Also ich werde dort immer wieder kaufen top Leute .",
      sterne: 5,
   
    },
    {
      name: "Horst Guerntke",
      text: "Alles sehr gut in der Werkstatt. Sehr freundliche Mitarbeiter",
      sterne: 5,
      
    },
    {
      name: "Ralf Uttenreuther",
      text: "Freundliche, nette und kompetende Leute",
      sterne: 5,
  
    },
    {
      name: "Stephan",
      text: "Bodenständig und Fair",
      sterne: 5,
   
    },

  ]

  const bgGradient = useColorModeValue(
    'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  )

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50" position="relative" overflow="hidden">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.03}
        backgroundImage="url('/truck-pattern.svg')"
        backgroundSize="100px"
        backgroundRepeat="repeat"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* Header */}
        <VStack spacing={6} textAlign="center" mb={{ base: 12, md: 20 }}>
          <Box
            bgGradient="linear(135deg, #1e40af, #3b82f6)"
            color="white"
            py={3}
            px={8}
            borderRadius="xl"
            transform="rotate(-1deg)"
            shadow="lg"
            _hover={{ transform: "rotate(0deg)", transition: "all 0.3s" }}
          >
            <Heading 
              as="h2" 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="800"
            >
              Das sagen unsere Kunden auf mobile.de
            </Heading>
          </Box>

          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600" 
            maxW="600px"
            lineHeight="tall"
          >
            Über 500 zufriedene Kunden vertrauen auf unsere Expertise. 
            Lesen Sie, was unsere Kunden über uns sagen.
          </Text>
        </VStack>

        {/* Bewertungen Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
          {bewertungen.map((bewertung, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              shadow="xl"
              border="1px solid"
              borderColor="gray.100"
              position="relative"
              _hover={{
                transform: "translateY(-8px)",
                shadow: "2xl",
                borderColor: "blue.200",
                transition: "all 0.3s ease"
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px', 
                right: '-2px',
                bottom: '-2px',
                bg: 'linear-gradient(135deg, #3b82f6, #1e40af, #1e3a8a)',
                borderRadius: '2xl',
                zIndex: -1,
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              
            >
              {/* Sterne */}
              <HStack spacing={1} mb={4}>
                {[...Array(bewertung.sterne)].map((_, i) => (
                  <Box
                    key={i}
                    color="orange.400"
                    fontSize="lg"
                  >
                    ⭐
                  </Box>
                ))}
              </HStack>

              {/* Bewertungstext */}
              <Text 
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
                mb={6}
                fontStyle="italic"
                position="relative"
                _before={{
                  content: '"„"',
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  fontSize: '3xl',
                  color: 'blue.200',
                  fontFamily: 'serif'
                }}
                _after={{
                  content: '"‟"',
                  position: 'absolute',
                  bottom: '-20px',
                  right: '10px',
                  fontSize: '3xl',
                  color: 'blue.200',
                  fontFamily: 'serif'
                }}
                pl={4}
                pr={4}
              >
                {bewertung.text}
              </Text>

              {/* Customer Info */}
              <HStack spacing={4} align="center">
                <Avatar
                  size="md"
                  name={bewertung.name}
                  bg="blue.500"
                  color="white"
                  fontWeight="bold"
                />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="700" color="gray.800" fontSize="md">
                    {bewertung.name}
                  </Text>
               
                </VStack>
              </HStack>

              {/* Mobile.de Badge */}
              <Box
                position="absolute"
                top={4}
                right={4}
                bg="orange.500"
                color="white"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Box
                  w="12px"
                  h="12px"
                  bg="white"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="orange.500"
                  fontSize="8px"
                  fontWeight="bold"
                >
                  m
                </Box>
                <Text>mobile.de</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Stats */}
        <Box 
          bg="white"
          borderRadius="3xl"
          p={{ base: 8, md: 12 }}
          mt={{ base: 12, md: 20 }}
          shadow="2xl"
          border="1px solid"
          borderColor="gray.100"
          textAlign="center"
        >
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 8, md: 12 }}>
            <VStack spacing={2}>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="blue.600">
                4.8/5
              </Text>
              <Text color="gray.600" fontWeight="600">
                ⭐ Durchschnittsbewertung
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="blue.600">
                500+
              </Text>
              <Text color="gray.600" fontWeight="600">
                👥 Zufriedene Kunden
              </Text>
            </VStack>
            <VStack spacing={2}>
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="blue.600">
                98%
              </Text>
              <Text color="gray.600" fontWeight="600">
                🔄 Weiterempfehlungsrate
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}