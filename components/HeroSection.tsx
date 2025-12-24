'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Image,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react'

export function HeroSection() {
  return (
    <Box 
      bg="linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)" 
      color="white" 
      py={{ base: 10, md: 16, lg: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Glassmorphism Background Shapes */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        bg="rgba(255,255,255,0.1)"
        borderRadius="50%"
        filter="blur(60px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="15%"
        w="400px"
        h="400px"
        bg="rgba(255,255,255,0.05)"
        borderRadius="50%"
        filter="blur(80px)"
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
        >
          {/* Content */}
          <Box flex="1" maxW={{ base: 'full', lg: '600px' }}>
            {/* Glassmorphism Badge */}
            <Box
              bg="rgba(255,255,255,0.15)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255,255,255,0.2)"
              borderRadius="full"
              px={4}
              py={2}
              mb={6}
              display="inline-block"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="600"
            >
              🏆 Seit 1998 in Bielefeld
            </Box>
            
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              mb={6}
              lineHeight="shorter"
              fontWeight="800"
              textShadow="0 4px 12px rgba(0,0,0,0.3)"
            >
              LKW & Nutzfahrzeuge direkt vom Profi
            </Heading>
            
            <Heading
              as="h2"
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              mb={6}
              fontWeight="400"
              opacity={0.9}
              lineHeight="tall"
            >
              Mercedes • MAN • Volvo • Scania • Iveco
            </Heading>
            
            <Text 
              fontSize={{ base: "md", sm: "lg", md: "xl" }} 
              mb={8} 
              opacity={0.9} 
              lineHeight="tall"
              textShadow="0 2px 4px rgba(0,0,0,0.2)"
            >
              Über 150 geprüfte Nutzfahrzeuge auf Lager. Von Transportern bis 
              Sattelzugmaschinen. <strong>Finanzierung ab 0% möglich</strong> - 
              Ihr Fahrzeug wartet bereits auf Sie!
            </Text>

            {/* Glassmorphism Stats */}
            <SimpleGrid 
              columns={{ base: 1, sm: 3 }} 
              gap={{ base: 3, sm: 6 }} 
              mb={{ base: 6, md: 10 }}
            >
              {[
                { number: "25+", text: "Jahre Erfahrung" },
                { number: "150+", text: "Fahrzeuge verfügbar" },
                { number: "98%", text: "Zufriedene Kunden" }
              ].map((stat, index) => (
                <Box 
                  key={index}
                  textAlign="center"
                  bg="rgba(255,255,255,0.15)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255,255,255,0.2)"
                  borderRadius="xl"
                  p={{ base: 3, md: 4 }}
                  _hover={{ 
                    bg: "rgba(255,255,255,0.2)",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s"
                  }}
                >
                  <Text 
                    fontSize={{ base: "xl", md: "2xl" }} 
                    fontWeight="bold" 
                    color="orange.300"
                    textShadow="0 2px 4px rgba(0,0,0,0.3)"
                  >
                    {stat.number}
                  </Text>
                  <Text fontSize={{ base: "xs", sm: "sm" }} opacity={0.9}>
                    {stat.text}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Glassmorphism CTA Buttons */}
            <Stack 
              direction={{ base: 'column', sm: 'row' }} 
              gap={4}
              mb={6}
            >
              <Button
                size={{ base: "md", md: "lg" }}
                bg="rgba(255,107,53,0.9)"
                color="white"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255,107,53,0.3)"
                _hover={{ 
                  bg: "rgba(255,107,53,1)",
                  transform: 'translateY(-3px)', 
                  boxShadow: '0 15px 35px rgba(255,107,53,0.4)' 
                }}
                transition="all 0.3s"
                as="a"
                href="tel:+4952112345678"
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="600"
              >
                📞 0521 / 123 456 78
              </Button>
              <Button
                size={{ base: "md", md: "lg" }}
                variant="outline"
                bg="rgba(255,255,255,0.15)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255,255,255,0.3)"
                color="white"
                _hover={{ 
                  bg: 'rgba(255,255,255,0.25)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 15px 35px rgba(255,255,255,0.2)' 
                }}
                transition="all 0.3s"
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="600"
              >
                💬 Kostenlos anfragen
              </Button>
            </Stack>

            {/* Trust Signals */}
            <Flex 
              mt={6} 
              gap={{ base: 2, sm: 4 }} 
              flexWrap="wrap" 
              fontSize={{ base: "xs", sm: "sm" }} 
              opacity={0.8}
              justify={{ base: "center", lg: "flex-start" }}
            >
              {["✓ TÜV-geprüft", "✓ 12 Monate Garantie", "✓ Sofortige Verfügbarkeit", "✓ Inzahlungnahme möglich"].map((trust, index) => (
                <Box
                  key={index}
                  bg="rgba(255,255,255,0.1)"
                  px={{ base: 2, sm: 3 }}
                  py={1}
                  borderRadius="full"
                  border="1px solid rgba(255,255,255,0.2)"
                >
                  <Text>{trust}</Text>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Glassmorphism Image Container */}
          <Box flex="1" maxW={{ base: 'full', lg: '550px' }}>
            <Box 
              position="relative"
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(15px)"
              border="1px solid rgba(255,255,255,0.2)"
              borderRadius="3xl"
              p={{ base: 4, md: 6 }}
              _hover={{ 
                transform: "scale(1.02)",
                transition: "all 0.3s"
              }}
            >
              <Image
                src="/popel.webp"
                alt="Lemoine Nutzfahrzeuge - LKW und Transporter Verkauf in Bielefeld"
                borderRadius="2xl"
                w="full"
                h={{ base: "250px", sm: "350px", md: "450px", lg: "500px" }}
                objectFit="cover"
                transition="all 0.3s"
              />
              
              {/* Glassmorphism Badge on Image */}
              <Box
                position="absolute"
                top={{ base: 2, md: 4 }}
                right={{ base: 2, md: 4 }}
                bg="rgba(255,107,53,0.9)"
                backdropFilter="blur(10px)"
                color="white"
                px={{ base: 3, md: 4 }}
                py={{ base: 1, md: 2 }}
                borderRadius="full"
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
                border="1px solid rgba(255,255,255,0.3)"
                boxShadow="0 8px 25px rgba(0,0,0,0.2)"
                transform="rotate(-2deg)"
                textAlign="center"
              >
                🔥 0% Finanzierung möglich!
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}