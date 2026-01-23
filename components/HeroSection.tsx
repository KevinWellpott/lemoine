'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
} from '@chakra-ui/react'

export function HeroSection() {
  return (
    <Box 
      bg="white"
      pt={{ base: 20, md: 32 }} 
      pb={{ base: 16, md: 24 }}
      position="relative"
    >
      {/* Subtle geometric pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.02"
        backgroundImage="radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)"
        backgroundSize="60px 60px"
        backgroundPosition="0 0, 30px 30px"
      />

      <Container maxW="5xl" px={{ base: 4, md: 8 }} position="relative">
        <VStack spacing={{ base: 12, md: 16 }} textAlign="center" align="center">
          
          {/* Header with asymmetric layout */}
          <VStack spacing={6} maxW="900px">
          

            <Heading
              as="h1"
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="800"
              lineHeight="0.85"
              color="gray.900"
              letterSpacing="-0.02em"
            >
              LKW & Nutzfahrzeuge
              <br />
              <Text 
                as="span" 
                color="blue.600"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: { base: "4px", md: "8px" },
                  left: "0",
                  right: "0",
                  height: { base: "3px", md: "4px" },
                  bg: "blue.200",
                  borderRadius: "full",
                  opacity: 0.3
                }}
              >
                vom Profi
              </Text>
            </Heading>

            <Text
              as="h3"
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="gray.600"
              fontWeight="400"
              lineHeight="1.6"
              maxW="650px"
              mt={4}
            >
              150+ geprüfte Fahrzeuge von Mercedes, MAN und Volvo.
              <br />
              <Text as="span" fontWeight="600" color="gray.700">
                Finanzierung ab 0% möglich
              </Text>
              {' '}– direkt aus Bielefeld.
            </Text>
          </VStack>

          {/* Unique stats layout */}
          

          {/* Clean CTA section */}
          <VStack spacing={6} pt={4}>
            <HStack 
              spacing={4} 
              direction={{ base: "column", sm: "row" }}
              w="full" 
              align="center" 
              justify="center"
              maxW={{ base: "300px", sm: "auto" }}
            >
              <Button
                size={{ base: "lg", md: "lg" }}
                bg="#1E3689"
                color="white"
                _hover={{ 
                  bg: "white",
                  color: "#1E3689",
                  boxShadow: '0 8px 25px rgba(30,58,138,0.3)',
                  borderColor: "#1E3689",
                }}
                transition="all 0.3s"
                as="a"
                href="/kontakt"
                borderRadius="lg"
                px={{ base: 8, md: 12 }}
                fontWeight="600"
                shadow="md"
                border="1px solid"
                borderColor="#1E3689"
                minW={{ base: "full", sm: "180px" }}
              >
                Kontakt
              </Button>
              
              <Button
                size={{ base: "lg", md: "lg" }}
                variant="outline"
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
                px={{ base: 8, md: 12 }}
                fontWeight="600"
                minW={{ base: "full", sm: "180px" }}
              >
                Fahrzeuge
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}