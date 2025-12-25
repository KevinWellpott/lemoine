'use client'
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  HStack,
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
          {/* Logo */}
          <Flex align="center">
            <Box
              bg="linear-gradient(135deg, #1e3a8a, #3b82f6)"
              bgClip="text"
              _hover={{ 
                bgGradient: "linear(135deg, #1e40af, #2563eb)",
                transition: "all 0.3s"
              }}
            >
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                fontWeight="800" 
                color="transparent"
                letterSpacing="tight"
              >
                Lemoine Nutzfahrzeuge
              </Text>
            </Box>
            <Box
              ml={3}
              bg="orange.500"
              color="white"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="600"
              display={{ base: "none", sm: "block" }}
            >
              Seit 1998
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
              href="#verkauf"
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
              href="#ankauf"
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
              href="#ueber-uns"
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
              Über uns
            </Text>
            <Text 
              as="a" 
              href="#kontakt"
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
              Kontakt
            </Text>
          </HStack>

          {/* Call Button */}
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
            href="tel:+4952112345678"
            borderRadius="lg"
            px={{ base: 3, md: 6 }}
            fontWeight="600"
            shadow="md"
          >
            <Text display={{ base: "none", sm: "block" }}>
              📞 0521 / 123 456 78
            </Text>
            <Text display={{ base: "block", sm: "none" }}>
              📞 Anrufen
            </Text>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}