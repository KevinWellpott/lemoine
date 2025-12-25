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
  HStack,
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
            {/* Mobile.de Badge */}
            <HStack mb={6} spacing={4}>
              <Box
                bg="rgba(255,255,255,0.15)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255,255,255,0.2)"
                borderRadius="full"
                px={4}
                py={2}
                display="inline-block"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="600"
              >
                🏆 Seit 1998 in Bielefeld
              </Box>
              
              <Box
                bg="rgba(255,255,255,0.9)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255,255,255,0.3)"
                borderRadius="full"
                px={4}
                py={2}
                display="inline-flex"
                alignItems="center"
                gap={2}
              >
            
                <Text color="gray.800" fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                  ⭐⭐⭐⭐⭐ 4,5 Sterne auf mobile.de
                </Text>
              </Box>
            </HStack>
            
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              mb={6}
              lineHeight="shorter"
              fontWeight="800"
              textShadow="0 4px 12px rgba(0,0,0,0.3)"
            >
              LKW & Nutzfahrzeuge direkt vom Profi aus Bielefeld
            </Heading>
            
            <Heading
              as="h2"
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              mb={6}
              fontWeight="400"
              opacity={0.9}
              lineHeight="tall"
            >
              Mercedes • MAN • Volvo • Scania • Iveco • uvm
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

            {/* CTA Buttons mit Verkauf/Ankauf */}
            <Stack 
  direction={{ base: 'column', sm: 'row' }} 
  gap={4}
  mb={6}
  justify="center"
  align="center"
>
  <Button
    size={{ base: "lg", md: "xl" }}
    bg="rgba(30,58,138,0.9)"
    color="white"
    backdropFilter="blur(10px)"
    border="2px solid rgba(255,255,255,0.3)"
    _hover={{ 
      bg: "rgba(30,58,138,1)",
      transform: 'translateY(-4px)', 
      boxShadow: '0 20px 40px rgba(30,58,138,0.4)',
      borderColor: "rgba(255,255,255,0.5)"
    }}
    transition="all 0.3s"
    as="a"
    href="tel:+4952112345678"
    borderRadius="lg"
    px={{ base: 8, md: 10 }}
    py={{ base: 4, md: 5 }}
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="700"
    minW={{ base: "280px", sm: "200px" }}
  >
    📞 0521 / 123 456 78
  </Button>
  
  <Button
    size={{ base: "lg", md: "xl" }}
    bg="rgba(59,130,246,0.9)"
    color="white"
    backdropFilter="blur(10px)"
    border="2px solid rgba(255,255,255,0.3)"
    _hover={{ 
      bg: "rgba(59,130,246,1)",
      transform: 'translateY(-4px)', 
      boxShadow: '0 20px 40px rgba(59,130,246,0.4)',
      borderColor: "rgba(255,255,255,0.5)"
    }}
    transition="all 0.3s"
    borderRadius="lg"
    px={{ base: 8, md: 10 }}
    py={{ base: 4, md: 5 }}
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="700"
    as="a"
    href="#verkauf"
    minW={{ base: "280px", sm: "200px" }}
  >
    🚛 LKW kaufen
  </Button>
  
  <Button
    size={{ base: "lg", md: "xl" }}
    bg="rgba(96,165,250,0.9)"
    color="white"
    backdropFilter="blur(10px)"
    border="2px solid rgba(255,255,255,0.3)"
    _hover={{ 
      bg: "rgba(96,165,250,1)",
      transform: 'translateY(-4px)', 
      boxShadow: '0 20px 40px rgba(96,165,250,0.4)',
      borderColor: "rgba(255,255,255,0.5)"
    }}
    transition="all 0.3s"
    borderRadius="lg"
    px={{ base: 8, md: 10 }}
    py={{ base: 4, md: 5 }}
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="700"
    as="a"
    href="#ankauf"
    minW={{ base: "280px", sm: "200px" }}
  >
    💰 LKW verkaufen
  </Button>
</Stack>

           
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