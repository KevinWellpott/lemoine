'use client'
import {
  Box,
  Container,
  Text,
  Flex,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'

export function Footer() {
  return (
    <Box bg="gray.900" color="white" py={12}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          gap={8}
        >
          {/* Company Info */}
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="xl" fontWeight="bold">
              Lemoine Nutzfahrzeuge
            </Text>
            <Text color="gray.300" lineHeight="tall">
              Ihr vertrauensvoller Partner für LKW und Nutzfahrzeuge in 
              Bielefeld. Seit über 25 Jahren am Markt.
            </Text>
            <Button colorScheme="blue" size="md" as="a" href="tel:+4952112345678">
              📞 0521 / 123 456 78
            </Button>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="lg" fontWeight="bold">
              Kontakt
            </Text>
            <VStack align="start" spacing={2} color="gray.300">
              <Text>📍 Musterstraße 123, 33602 Bielefeld</Text>
              <Text>📞 0521 / 123 456 78</Text>
              <Text>📧 info@lemoine-nutzfahrzeuge.de</Text>
              <Text>🕐 Mo-Fr: 8:00-18:00, Sa: 9:00-14:00</Text>
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="lg" fontWeight="bold">
              Unsere Services
            </Text>
            <VStack align="start" spacing={2} color="gray.300">
              <Text>• LKW Verkauf</Text>
              <Text>• Transporter</Text>
              <Text>• Finanzierung</Text>
              <Text>• Inzahlungnahme</Text>
              <Text>• Service & Wartung</Text>
            </VStack>
          </VStack>
        </Flex>

        {/* Bottom Bar */}
        <Box borderTop="1px" borderColor="gray.700" mt={8} pt={8}>
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
              <Text as="a" href="/impressum" _hover={{ color: 'white' }}>
                Impressum
              </Text>
              <Text as="a" href="/datenschutz" _hover={{ color: 'white' }}>
                Datenschutz
              </Text>
              <Text as="a" href="/agb" _hover={{ color: 'white' }}>
                AGB
              </Text>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}