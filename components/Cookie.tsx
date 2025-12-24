'use client'
import {
  Box,
  Button,
  Text,
  Flex,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    saveCookiePreferences(necessaryOnly)
    setShowBanner(false)
  }

  const saveCustomPreferences = () => {
    saveCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    
    if (prefs.analytics) {
      window.dispatchEvent(new Event('cookieAccepted'))
    }
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Cookie Banner */}
      {!showSettings && (
        <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg="white"
          borderTop="3px solid"
          borderColor="blue.500"
          p={6}
          boxShadow="0 -4px 20px rgba(0,0,0,0.1)"
          zIndex={1000}
        >
          <Flex
            maxW="7xl"
            mx="auto"
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'start', lg: 'center' }}
            justify="space-between"
            gap={4}
          >
            <Box flex="1" mr={{ base: 0, lg: 6 }}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Cookies & Datenschutz
              </Text>
              <Text color="gray.600" fontSize="sm" lineHeight="tall">
                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                Einige sind technisch notwendig, andere helfen uns die Website zu verbessern.{' '}
                <Link color="blue.500" href="/datenschutz" textDecoration="underline">
                  Mehr erfahren
                </Link>
              </Text>
            </Box>
            
            <Flex direction={{ base: 'column', sm: 'row' }} gap={3} flexShrink={0}>
              <Button
                size="md"
                variant="outline"
                colorScheme="gray"
                onClick={() => setShowSettings(true)}
                minW="140px"
              >
                Einstellungen
              </Button>
              <Button
                size="md"
                variant="ghost"
                onClick={acceptNecessary}
                minW="140px"
              >
                Nur Notwendige
              </Button>
              <Button
                size="md"
                colorScheme="blue"
                onClick={acceptAll}
                minW="140px"
              >
                Alle akzeptieren
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg="white"
          borderTop="3px solid"
          borderColor="blue.500"
          p={6}
          boxShadow="0 -4px 20px rgba(0,0,0,0.1)"
          zIndex={1000}
          maxH="80vh"
          overflowY="auto"
        >
          <VStack maxW="7xl" mx="auto" gap={6} align="stretch">
            <Text fontSize="lg" fontWeight="bold">
              Cookie-Einstellungen
            </Text>
            
            <VStack gap={4} align="stretch">
              <Box p={4} bg="gray.50" borderRadius="md">
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="bold">Notwendige Cookies</Text>
                  <Button size="sm" colorScheme="green">
                    An
                  </Button>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                </Text>
              </Box>

              <Box p={4} bg="gray.50" borderRadius="md">
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="bold">Analyse-Cookies</Text>
                  <Button 
                    size="sm"
                    colorScheme={preferences.analytics ? "blue" : "gray"}
                    variant={preferences.analytics ? "solid" : "outline"}
                    onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                  >
                    {preferences.analytics ? "An" : "Aus"}
                  </Button>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  Helfen uns die Website zu verbessern (Google Analytics).
                </Text>
              </Box>

              <Box p={4} bg="gray.50" borderRadius="md">
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="bold">Marketing-Cookies</Text>
                  <Button 
                    size="sm"
                    colorScheme={preferences.marketing ? "blue" : "gray"}
                    variant={preferences.marketing ? "solid" : "outline"}
                    onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                  >
                    {preferences.marketing ? "An" : "Aus"}
                  </Button>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  Für relevante Werbung und Kampagnen-Messung.
                </Text>
              </Box>
            </VStack>

            <Flex gap={3} justify="flex-end">
              <Button variant="ghost" onClick={() => setShowSettings(false)}>
                Zurück
              </Button>
              <Button colorScheme="blue" onClick={saveCustomPreferences}>
                Einstellungen speichern
              </Button>
            </Flex>
          </VStack>
        </Box>
      )}
    </>
  )
}