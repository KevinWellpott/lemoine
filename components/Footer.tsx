'use client'
import {
  Box,
  Container,
  Text,
  Flex,
  VStack,
  HStack,
} from '@chakra-ui/react'

export function Footer() {
  return (
    <Box bg="gray.900" color="white" py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
        >
          {/* Company Info */}
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="xl" fontWeight="700" color="white">
              Lemoine Nutzfahrzeuge
            </Text>
            <Text color="gray.300" lineHeight="1.6" maxW="300px">
              Ihr vertrauensvoller Partner für LKW und Nutzfahrzeuge in 
              Bielefeld. Seit über 25 Jahren am Markt.
            </Text>
            <Text 
              color="blue.400" 
              fontSize="lg" 
              fontWeight="600"
              _hover={{ color: 'blue.300' }}
              as="a" 
              href="tel:+4952112345678"
              cursor="pointer"
            >
              📞 0521 / 123 456 78
            </Text>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="lg" fontWeight="600" color="white">
              Kontakt
            </Text>
            <VStack align="start" spacing={2} color="gray.300">
              <Text>Musterstraße 123, 33602 Bielefeld</Text>
              <Text>0521 / 123 456 78</Text>
              <Text>info@lemoine-nutzfahrzeuge.de</Text>
              <Text>Mo-Fr: 8:00-18:00, Sa: 9:00-14:00</Text>
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="lg" fontWeight="600" color="white">
              Unsere Services
            </Text>
            <VStack align="start" spacing={2} color="gray.300">
              <Text>LKW Verkauf</Text>
              <Text>Transporter</Text>
              <Text>Finanzierung</Text>
              <Text>Inzahlungnahme</Text>
              <Text>Service & Wartung</Text>
            </VStack>
          </VStack>
        </Flex>

        {/* Bottom Bar */}
        <Box borderTop="1px" borderColor="gray.700" mt={{ base: 8, md: 12 }} pt={{ base: 6, md: 8 }}>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color="gray.400" fontSize="sm">
              © 2024 Lemoine Nutzfahrzeuge. Alle Rechte vorbehalten.
            </Text>
            <HStack spacing={6} color="gray.400" fontSize="sm">
              <Text 
                as="a" 
                href="/impressum" 
                _hover={{ color: 'white' }}
                cursor="pointer"
              >
                Impressum
              </Text>
              <Text 
                as="a" 
                href="/datenschutz" 
                _hover={{ color: 'white' }}
                cursor="pointer"
              >
                Datenschutz
              </Text>
              <Text 
                as="a" 
                href="/agb" 
                _hover={{ color: 'white' }}
                cursor="pointer"
              >
                AGB
              </Text>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}