'use client'
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  HStack,
  Image,
} from '@chakra-ui/react'

export function Header() {
  return (
    <Box 
      bg="rgba(255,255,255,0.95)" 
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor="rgba(59,130,246,0.1)"
      position="fixed" 
      top="0" 
      left="0"
      right="0"
      zIndex={1000}
      shadow="lg"
    >
      <Container maxW="7xl">
        <Flex h={{ base: 14, md: 16 }} align="center" justify="space-between">
          {/* Logo - klickbar zur Startseite */}
          <Flex 
            align="center" 
            gap={3} 
            as="a"
            href="/"
            cursor="pointer"
            _hover={{ transform: "scale(1.02)", transition: "all 0.3s" }}
          >
            <Box
              bg="linear-gradient(135deg, #1e40af, #3b82f6)"
              borderRadius="lg"
              p={2}
              shadow="md"
              _hover={{ 
                transform: "scale(1.05)",
                transition: "all 0.3s"
              }}
            >
              <Box
                bg="white"
                borderRadius="md"
                px={3}
                py={1}
                minW="60px"
                textAlign="center"
              >
                <Text 
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="900"
                  bgGradient="linear(135deg, #1e40af, #3b82f6)"
                  bgClip="text"
                  color="transparent"
                  letterSpacing="tight"
                >
                  Lemoine
                </Text>
              </Box>
            </Box>
            
            <Box>
              <Text 
                fontSize={{ base: "md", md: "lg" }} 
                fontWeight="800" 
                color="gray.800"
                lineHeight="1"
              >
                Nutzfahrzeuge
              </Text>
              <Text 
                fontSize="xs"
                color="gray.500"
                fontWeight="600"
                lineHeight="1"
              >
                Bielefeld seit 1998
              </Text>
            </Box>
          </Flex>

          {/* Desktop Navigation */}
          <HStack 
            display={{ base: 'none', lg: 'flex' }} 
            spacing={8}
            align="center"
          >
            <Text 
              as="a" 
              href='/kontakt'
              fontSize="md"
              fontWeight="600"
              color="gray.700"
              _hover={{ 
                color: 'blue.600',
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "blue.300",
                transition: "all 0.3s"
              }}
            >
              LKW kaufen
            </Text>
            <Text 
              as="a" 
              href="/kontakt"
              fontSize="md"
              fontWeight="600"
              color="gray.700"
              _hover={{ 
                color: 'blue.600',
                textDecoration: "underline",
                textUnderlineOffset: "4px", 
                textDecorationColor: "blue.300",
                transition: "all 0.3s"
              }}
            >
              LKW verkaufen
            </Text>
    
            <Text 
              as="a" 
              href="https://home.mobile.de/LEMOINE-NUTZFAHRZEUGE#ses"
              fontSize="md"
              fontWeight="600"
              color="gray.700"
              _hover={{ 
                color: 'blue.600',
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "blue.300",
                transition: "all 0.3s"
              }}
            >
              Inserate
            </Text>
          </HStack>

          {/* Contact Button */}
          <Button
            size={{ base: "sm", md: "md" }}
            bg="linear-gradient(135deg, #1e3a8a, #3b82f6)"
            color="white"
            _hover={{ 
              bg: "linear-gradient(135deg, #1e40af, #2563eb)",
              transform: 'translateY(-2px)', 
              boxShadow: '0 8px 25px rgba(30,58,138,0.3)' 
            }}
            transition="all 0.3s"
            as="a"
            href="/kontakt"
            borderRadius="lg"
            px={{ base: 4, md: 6 }}
            fontWeight="600"
            shadow="md"
          >
            <Text display={{ base: "none", sm: "block" }}>
              💬 Kontakt
            </Text>
            <Text display={{ base: "block", sm: "none" }}>
              💬 Kontakt
            </Text>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}