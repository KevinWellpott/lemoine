'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  SimpleGrid,
  VStack,
  HStack,
} from '@chakra-ui/react'

export function HeroSection() {
  return (
    <Box 
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)"
      pt={{ base: 20, md: 24 }}
      pb={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle Glassmorphism Background Elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)"
        borderRadius="50%"
        filter="blur(40px)"
        animation="slowFloat 15s ease-in-out infinite"
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        w="300px"
        h="300px"
        bg="radial-gradient(circle, rgba(147,197,253,0.04) 0%, transparent 70%)"
        borderRadius="50%"
        filter="blur(30px)"
        animation="slowFloat 12s ease-in-out infinite reverse"
      />
      
      {/* Animated CSS */}
      <style jsx>{`
        @keyframes slowFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-10px, -15px) scale(1.1); opacity: 0.5; }
        }
      `}</style>

      <Container maxW="7xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} alignItems="center">
          {/* Content */}
          <VStack align="start" spacing={8}>
            {/* Trust Badges */}
      

            {/* Headline */}
            <VStack align="start" spacing={6}>
              <Heading 
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="900"
                lineHeight="1.1"
                color="gray.900"
                textShadow="0 1px 3px rgba(0,0,0,0.1)"
              >
                LKW & Nutzfahrzeuge 
                <Text 
                  as="span" 
                  bgGradient="linear(to-r, blue.600, blue.700)" 
                  bgClip="text"
                > 
                  direkt vom Profi
                </Text>
              </Heading>
              
              <Text 
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                fontWeight="500"
                maxW="500px"
                lineHeight="tall"
              >
                Über 150 geprüfte Fahrzeuge von Mercedes, MAN, Volvo & Co. 
                Finanzierung ab 0%, sofort verfügbar in Bielefeld.
              </Text>
            </VStack>

            {/* Stats */}
            <SimpleGrid columns={3} spacing={8} w="full" maxW="420px">
              {[
                { number: "25+", label: "Jahre Erfahrung" },
                { number: "150+", label: "Fahrzeuge" },
                { number: "98%", label: "Zufrieden" }
              ].map((stat, index) => (
                <Box 
                  key={index}
                  textAlign="center"
                  p={4}
                  bg="transparent"
                  backdropFilter="blur(10px)"
                 
                 
               
                >
                  <Text fontSize="2xl" fontWeight="800" color="blue.600" mb={1}>
                    {stat.number}
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontWeight="500">
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* CTA Buttons */}
            <VStack spacing={4} w="full" maxW="420px">
              <Button
                size="lg"
                w="full"
                bg="linear-gradient(135deg, #2563eb, #1d4ed8)"
                color="white"
                _hover={{ 
                  bg: "linear-gradient(135deg, #1d4ed8, #1e3a8a)",
                  transform: "translateY(-1px)",
                  shadow: "lg"
                }}
                borderRadius="xl"
                h="14"
                fontSize="lg"
                fontWeight="700"
                as="a"
                href="tel:+4952112345678"
                transition="all 0.3s"
                shadow="md"
              >
                📞 0521 / 123 456 78
              </Button>
              
              <HStack spacing={3} w="full">
                <Button
                  flex="1"
                  size="lg"
                  bg="rgba(255,255,255,0.8)"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="rgba(59,130,246,0.2)"
                  color="blue.700"
                  _hover={{ 
                    bg: "rgba(59,130,246,0.05)",
                    borderColor: "blue.400",
                    transform: "translateY(-1px)",
                    shadow: "md"
                  }}
                  borderRadius="xl"
                  h="14"
                  fontWeight="600"
                  as="a"
                  href="#verkauf"
                  transition="all 0.3s"
                >
                  🚛 LKW kaufen
                </Button>
                <Button
                  flex="1"
                  size="lg"
                  bg="rgba(255,255,255,0.8)"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="rgba(59,130,246,0.2)"
                  color="blue.700"
                  _hover={{ 
                    bg: "rgba(59,130,246,0.05)",
                    borderColor: "blue.400",
                    transform: "translateY(-1px)",
                    shadow: "md"
                  }}
                  borderRadius="xl"
                  h="14"
                  fontWeight="600"
                  as="a"
                  href="#KontaktSection"
                  transition="all 0.3s"
                >
                  💰 LKW verkaufen
                </Button>
              </HStack>
            </VStack>

          
          </VStack>

          {/* Image */}
          <Box position="relative">
            <Box
              bg="rgba(255,255,255,0.4)"
              backdropFilter="blur(15px)"
              borderRadius="3xl"
              p={2}
              border="1px solid"
              borderColor="rgba(255,255,255,0.6)"
              shadow="xl"
            >
              <Image
                src="/popel.webp"
                alt="LKW Verkauf Bielefeld - Lemoine Nutzfahrzeuge"
                borderRadius="2xl"
                w="full"
                h={{ base: "400px", md: "500px" }}
                objectFit="cover"
              />
              
              {/* Overlay Badge */}
              <Box
                position="absolute"
                top={6}
                right={6}
                bg="rgba(249,115,22,0.95)"
                backdropFilter="blur(10px)"
                color="white"
                px={4}
                py={3}
                borderRadius="xl"
                fontSize="sm"
                fontWeight="700"
                shadow="lg"
                border="1px solid"
                borderColor="rgba(255,255,255,0.3)"
                transform="rotate(-2deg)"
                _hover={{
                  transform: "rotate(0deg)",
                  transition: "all 0.3s"
                }}
              >
                🔥 0% Finanzierung
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}