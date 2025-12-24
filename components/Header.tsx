'use client'
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
} from '@chakra-ui/react'

export function Header() {
  return (
    <Box bg="white" shadow="md" position="sticky" top="0" zIndex="sticky">
      <Container maxW="7xl">
        <Flex h={16} align="center" justify="space-between">
          <Flex align="center">
            <Text fontSize="xl" fontWeight="bold" color="blue.700">
              Lemoine Nutzfahrzeuge
            </Text>
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Flex direction="row" gap={8} align="center">
              <Text as="a" href="#fahrzeuge" _hover={{ color: 'blue.500' }}>
                Fahrzeuge
              </Text>
              <Text as="a" href="#ueber-uns" _hover={{ color: 'blue.500' }}>
                Über uns
              </Text>
              <Text as="a" href="#kontakt" _hover={{ color: 'blue.500' }}>
                Kontakt
              </Text>
              <Button
                size="sm"
                colorScheme="blue"
                as="a"
                href="tel:+4952112345678"
              >
                📞 0521 / 123 456 78
              </Button>
            </Flex>
          </Flex>

          <Button
            display={{ md: 'none' }}
            size="sm"
            colorScheme="blue"
            as="a"
            href="tel:+4952112345678"
          >
            📞 Anrufen
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}