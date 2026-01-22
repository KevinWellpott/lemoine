'use client'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react'

export function HeroSection() {
  return (
    <Box bg="white" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="4xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 8, md: 12 }} textAlign="center" align="center">
          {/* Eyebrow */}
          <Text
            fontSize="sm"
            fontWeight="600"
            color="blue.600"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Lemoine Nutzfahrzeuge
          </Text>

          {/* Main Headline */}
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="700"
            lineHeight="0.9"
            color="gray.900"
            letterSpacing="tight"
            maxW="800px"
          >
            LKW & Nutzfahrzeuge{' '}
            <Text as="span" color="blue.600">
              vom Profi
            </Text>
          </Heading>

          {/* Description */}
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.600"
            fontWeight="400"
            lineHeight="1.4"
            maxW="600px"
          >
            150+ geprüfte Fahrzeuge von Mercedes, MAN und Volvo.
            Finanzierung ab 0% möglich.
          </Text>

          {/* Stats */}
          <HStack spacing={{ base: 8, md: 16 }} pt={4}>
            <VStack spacing={0}>
              <Text fontSize="3xl" fontWeight="700" color="gray.900" lineHeight="1">
                25+
              </Text>
              <Text fontSize="md" color="gray.600" fontWeight="500">
                Jahre
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize="3xl" fontWeight="700" color="gray.900" lineHeight="1">
                150+
              </Text>
              <Text fontSize="md" color="gray.600" fontWeight="500">
                Fahrzeuge
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize="3xl" fontWeight="700" color="gray.900" lineHeight="1">
                98%
              </Text>
              <Text fontSize="md" color="gray.600" fontWeight="500">
                Zufrieden
              </Text>
            </VStack>
          </HStack>

          {/* CTAs */}
          <HStack spacing={4} pt={6} flexWrap="wrap" justify="center">
            <Button
              size="lg"
              h="56px"
              px={8}
              bg="blue.600"
              color="white"
              fontSize="lg"
              fontWeight="600"
              borderRadius="xl"
              _hover={{ bg: "blue.700" }}
              as="a"
              href="/kontakt"
            >
Kontakt            </Button>
            <Button
              size="lg"
              h="56px"
              px={8}
              variant="outline"
              borderColor="gray.300"
              color="gray.700"
              fontSize="lg"
              fontWeight="600"
              borderRadius="xl"
              _hover={{ borderColor: "blue.400", color: "blue.600" }}
              as="a"
              href="#fahrzeuge"
            >
              Fahrzeuge ansehen
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}