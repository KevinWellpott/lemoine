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
      bg="rgb(255, 255, 255)" 
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
              borderRadius="lg"
              p={1}
              _hover={{ 
                transform: "scale(1.05)",
                transition: "all 0.3s"
              }}
            >
              <Image
                src="/lemoine.svg"
                alt="Lemoine Nutzfahrzeuge Logo"
                height={{ base: "40px", md: "50px" }}
                width="auto"
                borderRadius="md"
              />
            </Box>
          </Flex>

          {/* Contact Buttons */}
          <HStack spacing={3}>
            <Button
              size={{ base: "sm", md: "md" }}
              bg="#1E3689"
              color="white"
              _hover={{ 
                bg: "white",
                color: "#1E3689",

                boxShadow: '0 8px 25px rgba(30,58,138,0.3)' ,
                borderColor:"1E3689",
              }}
              transition="all 0.3s"
              as="a"
              href="/kontakt"
              borderRadius="lg"
              px={{ base: 4, md: 6 }}
              fontWeight="600"
              shadow="md"
              border="1px solid"
              borderColor="#1E3689"
            >
              <Text display={{ base: "none", sm: "block" }}>
                Kontakt
              </Text>
              
            </Button>
            
            <Button
              size={{ base: "sm", md: "md" }}
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
              px={{ base: 4, md: 6 }}
              fontWeight="600"
            >
              <Text display={{ base: "none", sm: "block" }}>
                Inserate
              </Text>
          
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}