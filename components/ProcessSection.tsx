'use client'
import { useState, useEffect } from 'react'
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
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll-Animation für Zeitstrahl
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('prozess-section')
      if (!element) return

      const rect = element.getBoundingClientRect()
      const elementHeight = rect.height
      const windowHeight = window.innerHeight
      
      // Berechne Progress basierend auf Scroll-Position
      const scrolled = Math.max(0, windowHeight - rect.top)
      const maxScroll = elementHeight + windowHeight
      const progress = Math.min(100, (scrolled / maxScroll) * 100)
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      title: "Infos zu Ihrem Fahrzeug/Auflieger",
      description: "Senden Sie uns alle Angaben zu Ihrem Fahrzeug inkl. Hersteller, Kilometerstand, Baujahr, Bild des Fahrzeugscheins sowie Bilder oder Videos des LKW.",
      image: "/truck-info.jpg"
    },
    {
      step: 2,
      title: "Bewertung Ihres Fahrzeugs/Aufliegers",
      description: "Unser Team wertet die von Ihnen gesendeten Informationen aus und meldet sich bei Ihnen innerhalb von 48 Stunden mit einem attraktiven Angebot.",
      image: "/bewertung.jpg"
    },
    {
      step: 3,
      title: "Kaufvertrag, Überweisung, DEAL!",
      description: "Sollte Ihnen unser Angebot zusagen, senden wir Ihnen ein Kaufvertrag zu. Sobald dieser unterschrieben ist, überweisen wir Ihnen den Kaufbetrag sofort. Wir kümmern uns auch um die Abholung.",
      image: "/deal.jpg"
    }
  ]

  const activeSteps = activeMode === 'kaufen' ? kaufenSteps : verkaufenSteps
  const sectionBg = activeMode === 'kaufen' 
    ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)'
    : 'white'
  const textColor = activeMode === 'kaufen' ? 'white' : 'gray.800'

  return (
    <Box 
      id="prozess-section"
      py={{ base: 16, md: 24 }} 
      bg={sectionBg}
      color={textColor}
      position="relative"
      overflow="hidden"
      transition="all 0.6s ease"
    >
      {/* Glassmorphism Background Shapes für Kaufen-Modus */}
      {activeMode === 'kaufen' && (
        <>
          <Box
            position="absolute"
            top="10%"
            right="5%"
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
            left="10%"
            w="400px"
            h="400px"
            bg="rgba(255,255,255,0.05)"
            borderRadius="50%"
            filter="blur(80px)"
            zIndex={0}
          />
        </>
      )}

      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* Toggle Buttons */}
        <Flex justify="center" mb={{ base: 10, md: 16 }}>
          <HStack 
            bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.15)' : 'gray.100'}
            borderRadius="full"
            p={1}
            spacing={0}
            backdropFilter={activeMode === 'kaufen' ? 'blur(10px)' : 'none'}
            border={activeMode === 'kaufen' ? '1px solid rgba(255,255,255,0.2)' : '1px solid gray.200'}
          >
            <Button
              onClick={() => setActiveMode('kaufen')}
              bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.9)' : 'transparent'}
              color={activeMode === 'kaufen' ? 'blue.600' : 'white'}
              _hover={{ 
                bg: activeMode === 'kaufen' ? 'white' : 'rgba(255,255,255,0.1)',
                transform: 'scale(1.02)'
              }}
              borderRadius="full"
              px={8}
              py={3}
              fontWeight="700"
              fontSize="md"
              transition="all 0.3s"
              border="none"
            >
              🚛 LKW kaufen
            </Button>
            <Button
              onClick={() => setActiveMode('verkaufen')}
              bg={activeMode === 'verkaufen' ? 'blue.500' : 'transparent'}
              color={activeMode === 'verkaufen' ? 'white' : (activeMode === 'kaufen' ? 'rgba(255,255,255,0.8)' : 'gray.600')}
              _hover={{ 
                bg: activeMode === 'verkaufen' ? 'blue.600' : (activeMode === 'kaufen' ? 'rgba(255,255,255,0.1)' : 'gray.100'),
                transform: 'scale(1.02)'
              }}
              borderRadius="full"
              px={8}
              py={3}
              fontWeight="700"
              fontSize="md"
              transition="all 0.3s"
              border="none"
            >
              💰 LKW verkaufen
            </Button>
          </HStack>
        </Flex>

        {/* Header */}
        <Box textAlign="center" mb={{ base: 12, md: 20 }}>
          {activeMode === 'verkaufen' && (
            <Box
              bg="linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
              color="white"
              py={4}
              px={8}
              borderRadius="2xl"
              display="inline-block"
              transform="rotate(-1deg)"
              shadow="2xl"
              mb={8}
              _hover={{ transform: "rotate(0deg)", transition: "all 0.3s" }}
            >
              <Heading 
                as="h2" 
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="800"
              >
                So einfach kriegen Sie Ihren LKW oder Auflieger verkauft
              </Heading>
            </Box>
          )}
          
          {activeMode === 'kaufen' && (
            <Heading 
              as="h2" 
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="800"
              mb={6}
              textShadow="0 4px 12px rgba(0,0,0,0.3)"
            >
              So einfach kommen Sie zu Ihrem neuen LKW
            </Heading>
          )}
        </Box>

        {/* Timeline */}
        <Box position="relative">
          {/* Animated Timeline Line */}
          <Box
            position="absolute"
            left="50%"
            top="0"
            transform="translateX(-50%)"
            w="4px"
            h="full"
            bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.2)' : 'gray.200'}
            borderRadius="full"
            display={{ base: 'none', lg: 'block' }}
          >
            <Box
              w="full"
              bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.8)' : 'blue.500'}
              borderRadius="full"
              transition="height 0.3s ease"
              height={`${scrollProgress}%`}
            />
          </Box>

          {/* Steps */}
          <VStack spacing={{ base: 12, lg: 20 }}>
            {activeSteps.map((stepData, index) => (
              <Flex
                key={`${activeMode}-${stepData.step}`}
                direction={{ base: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' }}
                align="center"
                gap={{ base: 8, lg: 16 }}
                maxW="100%"
                position="relative"
              >
                {/* Step Number */}
                <Box
                  position={{ base: 'static', lg: 'absolute' }}
                  left="50%"
                  transform={{ base: 'none', lg: 'translateX(-50%)' }}
                  zIndex={2}
                  display={{ base: 'block', lg: 'block' }}
                  mb={{ base: 4, lg: 0 }}
                >
                  <Box
                    w={{ base: '60px', md: '80px' }}
                    h={{ base: '60px', md: '80px' }}
                    bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.9)' : 'gray.800'}
                    color={activeMode === 'kaufen' ? 'blue.600' : 'white'}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="800"
                    shadow="2xl"
                    border={activeMode === 'kaufen' ? '3px solid rgba(255,255,255,0.3)' : '3px solid blue.200'}
                  >
                    {stepData.step}
                  </Box>
                </Box>

                {/* Content */}
                <Box flex="1" maxW={{ base: 'full', lg: '45%' }}>
                  <Box
                    bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.15)' : 'white'}
                    backdropFilter={activeMode === 'kaufen' ? 'blur(15px)' : 'none'}
                    border={activeMode === 'kaufen' ? '1px solid rgba(255,255,255,0.2)' : '1px solid gray.200'}
                    borderRadius="2xl"
                    p={{ base: 6, md: 8 }}
                    shadow="2xl"
                    _hover={{ 
                      transform: 'translateY(-4px)',
                      shadow: '3xl',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Heading 
                      as="h3" 
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={4}
                      fontWeight="700"
                      color={activeMode === 'kaufen' ? 'white' : 'gray.800'}
                    >
                      {stepData.title}
                    </Heading>
                    <Text 
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight="tall"
                      opacity={activeMode === 'kaufen' ? 0.9 : 0.8}
                      color={activeMode === 'kaufen' ? 'white' : 'gray.600'}
                    >
                      {stepData.description}
                    </Text>
                  </Box>
                </Box>

                {/* Image */}
                <Box flex="1" maxW={{ base: 'full', lg: '45%' }}>
                  <Box
                    bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.1)' : 'gray.50'}
                    borderRadius="2xl"
                    overflow="hidden"
                    shadow="2xl"
                    _hover={{ 
                      transform: 'scale(1.02)',
                      transition: 'all 0.3s'
                    }}
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
        </Box>

        {/* Final CTA */}
        <Box textAlign="center" mt={{ base: 12, md: 20 }}>
          {activeMode === 'verkaufen' && (
            <Box
              bg="linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
              color="white"
              py={4}
              px={8}
              borderRadius="2xl"
              display="inline-block"
              mb={8}
              shadow="2xl"
            >
              <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700">
                Überzeugt? Dann senden Sie uns jetzt die Infos zu Ihrem Fahrzeug oder Auflieger!
              </Heading>
            </Box>
          )}
          
          <Button
            size="xl"
            bg={activeMode === 'kaufen' ? 'rgba(255,255,255,0.9)' : 'linear-gradient(135deg, #dc2626, #b91c1c)'}
            color={activeMode === 'kaufen' ? 'blue.600' : 'white'}
            _hover={{ 
              bg: activeMode === 'kaufen' ? 'white' : 'linear-gradient(135deg, #b91c1c, #991b1b)',
              transform: 'translateY(-3px)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}
            transition="all 0.3s"
            borderRadius="xl"
            px={10}
            py={6}
            fontSize="lg"
            fontWeight="700"
            shadow="2xl"
          >
            {activeMode === 'kaufen' ? '🚛 Jetzt LKW finden' : '💰 Jetzt Fahrzeug verkaufen'}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}