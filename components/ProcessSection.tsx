'use client'
import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react'

export function ProzessSection() {
  const [activeMode, setActiveMode] = useState<'kaufen' | 'verkaufen'>('kaufen')

  const kaufenSteps = [
    {
      step: 1,
      title: "Fahrzeug finden",
      description: "Durchsuchen Sie unsere große Auswahl an über 150 geprüften LKW und Nutzfahrzeugen. Finden Sie das perfekte Fahrzeug für Ihre Bedürfnisse.",
      image: "/fahrzeug-finden.jpg"
    },
    {
      step: 2,
      title: "Persönliche Beratung",
      description: "Unser Expertenteam berät Sie umfassend zu Ihrem Wunschfahrzeug, Finanzierungsmöglichkeiten und allen technischen Details.",
      image: "/beratung.jpg"
    },
    {
      step: 3,
      title: "Kaufvertrag & Übergabe",
      description: "Schnelle Kaufabwicklung mit transparenten Verträgen. Ihr neues Fahrzeug ist sofort einsatzbereit und wird professionell übergeben.",
      image: "/uebergabe.jpg"
    }
  ]

  const verkaufenSteps = [
    {
      step: 1,
      title: "Infos zu Ihrem Fahrzeug",
      description: "Senden Sie uns alle Angaben zu Ihrem Fahrzeug inkl. Hersteller, Kilometerstand, Baujahr, Bild des Fahrzeugscheins sowie Bilder oder Videos des LKW.",
      image: "/truck-info.jpg"
    },
    {
      step: 2,
      title: "Bewertung Ihres Fahrzeugs",
      description: "Unser Team wertet die von Ihnen gesendeten Informationen aus und meldet sich bei Ihnen innerhalb von 48 Stunden mit einem attraktiven Angebot.",
      image: "/bewertung.jpg"
    },
    {
      step: 3,
      title: "Kaufvertrag & Überweisung",
      description: "Sollte Ihnen unser Angebot zusagen, senden wir Ihnen ein Kaufvertrag zu. Sobald dieser unterschrieben ist, überweisen wir Ihnen den Kaufbetrag sofort.",
      image: "/deal.jpg"
    }
  ]

  const activeSteps = activeMode === 'kaufen' ? kaufenSteps : verkaufenSteps

  return (
    <Box 
      py={{ base: 16, md: 24 }} 
      bg={activeMode === 'kaufen' ? 'blue.600' : 'white'}
      color={activeMode === 'kaufen' ? 'white' : 'gray.900'}
    >
      <Container maxW="6xl">
        {/* Toggle Buttons */}
        <Flex justify="center" mb={{ base: 12, md: 16 }}>
          <HStack 
            bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.1)' : 'gray.100'}
            borderRadius="full"
            p={1}
            spacing={0}
          >
            <Button
              onClick={() => setActiveMode('kaufen')}
              bg={activeMode === 'kaufen' ? 'white' : 'transparent'}
              color={activeMode === 'kaufen' ? 'blue.600' : 'gray.600'}
              _hover={{ 
                bg: activeMode === 'kaufen' ? 'gray.50' : 'rgba(0,0,0,0.05)'
              }}
              borderRadius="full"
              px={6}
              py={3}
              fontWeight="600"
              fontSize="md"
            >
              🚛 LKW kaufen
            </Button>
            <Button
              onClick={() => setActiveMode('verkaufen')}
              bg={activeMode === 'verkaufen' ? 'blue.600' : 'transparent'}
              color={activeMode === 'verkaufen' ? 'white' : (activeMode === 'kaufen' ? 'rgba(255,255,255,0.8)' : 'gray.600')}
              _hover={{ 
                bg: activeMode === 'verkaufen' ? 'blue.700' : 'rgba(0,0,0,0.05)'
              }}
              borderRadius="full"
              px={6}
              py={3}
              fontWeight="600"
              fontSize="md"
            >
              💰 LKW verkaufen
            </Button>
          </HStack>
        </Flex>

        {/* Header */}
        <Box textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="700"
            mb={6}
          >
            {activeMode === 'kaufen' 
              ? 'So einfach kommen Sie zu Ihrem neuen LKW'
              : 'So einfach verkaufen Sie Ihren LKW'
            }
          </Heading>
        </Box>

        {/* Steps */}
        <VStack spacing={{ base: 12, md: 16 }}>
          {activeSteps.map((stepData, index) => (
            <Flex
              key={`${activeMode}-${stepData.step}`}
              direction={{ base: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' }}
              align="center"
              gap={{ base: 8, lg: 12 }}
              maxW="100%"
            >
              {/* Step Number */}
              <Box
                w="80px"
                h="80px"
                bg={activeMode === 'kaufen' ? 'white' : 'blue.600'}
                color={activeMode === 'kaufen' ? 'blue.600' : 'white'}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="2xl"
                fontWeight="700"
                flexShrink={0}
              >
                {stepData.step}
              </Box>

              {/* Content */}
              <Box flex="1" maxW={{ base: 'full', lg: '45%' }}>
                <Box
                  bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.1)' : 'gray.50'}
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  border="1px solid"
                  borderColor={activeMode === 'kaufen' ? 'rgba(255,255,255,0.2)' : 'gray.200'}
                >
                  <Heading 
                    as="h3" 
                    fontSize={{ base: 'xl', md: '2xl' }}
                    mb={4}
                    fontWeight="700"
                  >
                    {stepData.title}
                  </Heading>
                  <Text 
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight="1.6"
                    opacity={0.9}
                  >
                    {stepData.description}
                  </Text>
                </Box>
              </Box>

              {/* Image */}
              <Box flex="1" maxW={{ base: 'full', lg: '45%' }}>
                <Box
                  borderRadius="2xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor={activeMode === 'kaufen' ? 'rgba(255,255,255,0.2)' : 'gray.200'}
                >
                  <Image
                    src={stepData.image}
                    alt={stepData.title}
                    w="full"
                    h={{ base: '250px', md: '300px' }}
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </Flex>
          ))}
        </VStack>

        {/* Final CTA */}
        <Box textAlign="center" mt={{ base: 16, md: 20 }}>
          <Button
            size="lg"
            h="56px"
            bg={activeMode === 'kaufen' ? 'white' : 'blue.600'}
            color={activeMode === 'kaufen' ? 'blue.600' : 'white'}
            _hover={{ 
              bg: activeMode === 'kaufen' ? 'gray.50' : 'blue.700'
            }}
            borderRadius="xl"
            px={8}
            fontSize="lg"
            fontWeight="600"
          >
            {activeMode === 'kaufen' ? '🚛 Jetzt LKW finden' : '💰 Jetzt Fahrzeug verkaufen'}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}