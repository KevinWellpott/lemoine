'use client'
import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Flex,
  useToast,
} from '@chakra-ui/react'

export function KontaktSection() {
  const [formMode, setFormMode] = useState<'kaufen' | 'verkaufen'>('kaufen')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fahrzeugtyp: '',
    hersteller: '',
    modell: '',
    kilometerstand: '',
    vorname: '',
    nachname: '',
    plz: '',
    email: '',
    telefon: '',
    erreichbarkeit: '',
    nachricht: ''
  })

  const toast = useToast()

  const fahrzeugtypenKaufen = [
    'Sattelzugmaschine',
    'Solo-LKW',
    'Transporter/Sprinter',
    'Auflieger',
    'Kipper',
    'Kühlfahrzeug'
  ]

  const fahrzeugtypenVerkaufen = [
    'LKW',
    'Auflieger',
    'Transporter',
    'Sattelzugmaschine',
    'Kipper',
    'Sonstiges'
  ]

  const hersteller = [
    'Mercedes-Benz',
    'MAN',
    'Volvo',
    'Scania',
    'DAF',
    'Iveco',
    'Renault',
    'Sonstiges'
  ]

  const erreichbarkeitszeiten = [
    'Vormittags (8-12 Uhr)',
    'Nachmittags (12-17 Uhr)',
    'Abends (17-20 Uhr)',
    'Wochenende',
    'Jederzeit erreichbar'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formMode,
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        toast({
          title: 'Nachricht gesendet! ✅',
          description: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        
        // Form zurücksetzen
        setFormData({
          fahrzeugtyp: '',
          hersteller: '',
          modell: '',
          kilometerstand: '',
          vorname: '',
          nachname: '',
          plz: '',
          email: '',
          telefon: '',
          erreichbarkeit: '',
          nachricht: ''
        })
      } else {
        throw new Error('Fehler beim Senden')
      }
    } catch (error) {
      toast({
        title: 'Fehler beim Senden ❌',
        description: 'Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: 0521 / 123 456 78',
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50" id="kontakt">
      <Container maxW="7xl">
        {/* Header */}
        <VStack spacing={6} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="800"
            bgGradient="linear(to-r, gray.800, blue.600)"
            bgClip="text"
          >
            Jetzt Kontakt aufnehmen
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600" 
            maxW="600px"
            lineHeight="tall"
          >
            Lassen Sie uns gemeinsam die perfekte Lösung für Ihr Nutzfahrzeug finden. 
            Kostenlose Beratung und schnelle Antwort garantiert.
          </Text>
        </VStack>

        {/* Main Content Grid */}
        <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={{ base: 8, xl: 16 }}>
          {/* Contact Form */}
          <Box>
            {/* Mode Toggle */}
            <Flex justify="center" mb={8}>
              <HStack 
                bg="white"
                borderRadius="full"
                p={1}
                spacing={0}
                shadow="lg"
                border="1px solid"
                borderColor="gray.200"
              >
                <Button
                  onClick={() => setFormMode('kaufen')}
                  bg={formMode === 'kaufen' ? 'linear-gradient(135deg, #3b82f6, #1e40af)' : 'transparent'}
                  color={formMode === 'kaufen' ? 'white' : 'gray.600'}
                  _hover={{ 
                    bg: formMode === 'kaufen' ? 'linear-gradient(135deg, #2563eb, #1e3a8a)' : 'gray.100',
                    transform: 'scale(1.02)'
                  }}
                  borderRadius="full"
                  px={8}
                  py={3}
                  fontWeight="700"
                  fontSize="md"
                  transition="all 0.3s"
                  border="none"
                  shadow={formMode === 'kaufen' ? 'lg' : 'none'}
                >
                  🚛 LKW kaufen
                </Button>
                <Button
                  onClick={() => setFormMode('verkaufen')}
                  bg={formMode === 'verkaufen' ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'transparent'}
                  color={formMode === 'verkaufen' ? 'white' : 'gray.600'}
                  _hover={{ 
                    bg: formMode === 'verkaufen' ? 'linear-gradient(135deg, #b91c1c, #991b1b)' : 'gray.100',
                    transform: 'scale(1.02)'
                  }}
                  borderRadius="full"
                  px={8}
                  py={3}
                  fontWeight="700"
                  fontSize="md"
                  transition="all 0.3s"
                  border="none"
                  shadow={formMode === 'verkaufen' ? 'lg' : 'none'}
                >
                  💰 LKW verkaufen
                </Button>
              </HStack>
            </Flex>

            {/* Form */}
            <Box
              bg="white"
              borderRadius="3xl"
              p={{ base: 6, md: 8 }}
              shadow="2xl"
              border="1px solid"
              borderColor="gray.100"
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  {/* Fahrzeugtyp */}
                  <FormControl isRequired>
                    <FormLabel fontWeight="600" color="gray.700">
                      Was möchten Sie {formMode === 'kaufen' ? 'kaufen' : 'verkaufen'}?
                    </FormLabel>
                    <Select 
                      placeholder="Fahrzeugtyp auswählen"
                      value={formData.fahrzeugtyp}
                      onChange={(e) => handleInputChange('fahrzeugtyp', e.target.value)}
                      borderRadius="xl"
                      border="2px solid"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                      bg="gray.50"
                      fontSize="md"
                      h="12"
                    >
                      {(formMode === 'kaufen' ? fahrzeugtypenKaufen : fahrzeugtypenVerkaufen).map((typ) => (
                        <option key={typ} value={typ}>{typ}</option>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Hersteller & Modell */}
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Hersteller
                      </FormLabel>
                      <Select 
                        placeholder="Hersteller auswählen"
                        value={formData.hersteller}
                        onChange={(e) => handleInputChange('hersteller', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      >
                        {hersteller.map((h) => (
                          <option key={h} value={h}>{h}</option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel fontWeight="600" color="gray.700">
                        Modell
                      </FormLabel>
                      <Input 
                        placeholder="z.B. Actros, TGX, FH"
                        value={formData.modell}
                        onChange={(e) => handleInputChange('modell', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      />
                    </FormControl>
                  </SimpleGrid>

                  {/* Kilometerstand (nur bei Verkauf) */}
                  {formMode === 'verkaufen' && (
                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Kilometerstand
                      </FormLabel>
                      <Input 
                        placeholder="z.B. 450.000 km"
                        value={formData.kilometerstand}
                        onChange={(e) => handleInputChange('kilometerstand', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      />
                    </FormControl>
                  )}

                  {/* File Upload Area (nur bei Verkauf) */}
                  {formMode === 'verkaufen' && (
                    <Box
                      w="full"
                      h="100px"
                      border="2px dashed"
                      borderColor="blue.300"
                      borderRadius="xl"
                      bg="blue.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'blue.100', borderColor: 'blue.400' }}
                      transition="all 0.3s"
                    >
                      <VStack spacing={2}>
                        <Text fontSize="lg" fontWeight="600" color="blue.600">
                          📸 Bilder/Videos hochladen
                        </Text>
                        <Text fontSize="sm" color="blue.500">
                          Fahrzeug, Fahrzeugschein, Tachostand
                        </Text>
                      </VStack>
                    </Box>
                  )}

                  {/* Name & Kontakt */}
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Vorname
                      </FormLabel>
                      <Input 
                        placeholder="Ihr Vorname"
                        value={formData.vorname}
                        onChange={(e) => handleInputChange('vorname', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Nachname
                      </FormLabel>
                      <Input 
                        placeholder="Ihr Nachname"
                        value={formData.nachname}
                        onChange={(e) => handleInputChange('nachname', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Postleitzahl
                      </FormLabel>
                      <Input 
                        placeholder="z.B. 33602"
                        value={formData.plz}
                        onChange={(e) => handleInputChange('plz', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        E-Mail
                      </FormLabel>
                      <Input 
                        type="email"
                        placeholder="ihre@email.de"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      />
                    </FormControl>
                  </SimpleGrid>

                  {/* Telefon & Erreichbarkeit */}
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Telefon
                      </FormLabel>
                      <HStack spacing={0}>
                        <Box
                          bg="gray.100"
                          px={3}
                          py={3}
                          borderLeftRadius="xl"
                          border="2px solid"
                          borderColor="gray.200"
                          borderRight="none"
                          display="flex"
                          alignItems="center"
                        >
                          <Text fontWeight="600">🇩🇪 +49</Text>
                        </Box>
                        <Input 
                          placeholder="1234 567890"
                          value={formData.telefon}
                          onChange={(e) => handleInputChange('telefon', e.target.value)}
                          borderLeftRadius="0"
                          borderRightRadius="xl"
                          border="2px solid"
                          borderColor="gray.200"
                          borderLeft="none"
                          _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                          bg="gray.50"
                          fontSize="md"
                          h="12"
                        />
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <FormLabel fontWeight="600" color="gray.700">
                        Beste Erreichbarkeit
                      </FormLabel>
                      <Select 
                        placeholder="Wann sind Sie erreichbar?"
                        value={formData.erreichbarkeit}
                        onChange={(e) => handleInputChange('erreichbarkeit', e.target.value)}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                        bg="gray.50"
                        fontSize="md"
                        h="12"
                      >
                        {erreichbarkeitszeiten.map((zeit) => (
                          <option key={zeit} value={zeit}>{zeit}</option>
                        ))}
                      </Select>
                    </FormControl>
                  </SimpleGrid>

                  {/* Nachricht */}
                  <FormControl>
                    <FormLabel fontWeight="600" color="gray.700">
                      Ihre Nachricht (optional)
                    </FormLabel>
                    <Textarea 
                      placeholder={formMode === 'kaufen' 
                        ? "Beschreiben Sie uns Ihre Anforderungen..." 
                        : "Weitere Details zu Ihrem Fahrzeug..."
                      }
                      value={formData.nachricht}
                      onChange={(e) => handleInputChange('nachricht', e.target.value)}
                      borderRadius="xl"
                      border="2px solid"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                      bg="gray.50"
                      fontSize="md"
                      minH="100px"
                      resize="vertical"
                    />
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bg={formMode === 'kaufen' 
                      ? 'linear-gradient(135deg, #3b82f6, #1e40af)' 
                      : 'linear-gradient(135deg, #dc2626, #b91c1c)'
                    }
                    color="white"
                    _hover={{
                      bg: formMode === 'kaufen' 
                        ? 'linear-gradient(135deg, #2563eb, #1e3a8a)' 
                        : 'linear-gradient(135deg, #b91c1c, #991b1b)',
                      transform: 'translateY(-2px)',
                      shadow: '2xl'
                    }}
                    transition="all 0.3s"
                    borderRadius="xl"
                    py={6}
                    fontSize="lg"
                    fontWeight="700"
                    shadow="xl"
                    isLoading={isSubmitting}
                    loadingText="Wird gesendet..."
                    isDisabled={!formData.vorname || !formData.nachname || !formData.email || !formData.telefon || !formData.fahrzeugtyp || !formData.hersteller}
                  >
                    {formMode === 'kaufen' 
                      ? '🚛 Anfrage senden - Fahrzeug finden' 
                      : '💰 Fahrzeug bewerten lassen'
                    }
                  </Button>

                  <Text fontSize="xs" color="gray.500" textAlign="center" lineHeight="tall">
                    Durch das Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                    <Text as="span" color="blue.500" textDecoration="underline" cursor="pointer">
                      Datenschutzerklärung
                    </Text>{' '}
                    zu. Wir melden uns innerhalb von 24h bei Ihnen.
                  </Text>
                </VStack>
              </form>
            </Box>
          </Box>

          {/* Map & Contact Info - Rest bleibt gleich */}
          <VStack spacing={8} align="stretch">
            <Box
              bg="white"
              borderRadius="3xl"
              overflow="hidden"
              shadow="2xl"
              border="1px solid"
              borderColor="gray.100"
              h="400px"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.123456789!2d8.123456!3d52.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBr%C3%B6nninghauser%20Str.%2035B%2C%2033729%20Bielefeld!5e0!3m2!1sde!2sde!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lemoine Nutzfahrzeuge Standort"
              />
            </Box>

            <VStack spacing={6}>
              <Box
                bg="white"
                borderRadius="2xl"
                p={6}
                shadow="xl"
                border="1px solid"
                borderColor="gray.100"
                w="full"
              >
                <VStack spacing={4} align="start">
                  <Heading as="h3" size="lg" color="gray.800">
                    📍 Unser Standort
                  </Heading>
                  <VStack align="start" spacing={2}>
                    <Text fontSize="md" fontWeight="600" color="gray.700">
                      Brönninghauser Str. 35B
                    </Text>
                    <Text fontSize="md" fontWeight="600" color="gray.700">
                      33729 Bielefeld
                    </Text>
                  </VStack>
                </VStack>
              </Box>

              <Box
                bg="white"
                borderRadius="2xl"
                p={6}
                shadow="xl"
                border="1px solid"
                borderColor="gray.100"
                w="full"
              >
                <VStack spacing={4} align="start">
                  <Heading as="h3" size="lg" color="gray.800">
                    📞 Direkter Kontakt
                  </Heading>
                  <VStack align="start" spacing={2}>
                    <Text fontSize="md" color="gray.700">
                      <strong>Telefon:</strong> 0521 / 123 456 78
                    </Text>
                    <Text fontSize="md" color="gray.700">
                      <strong>E-Mail:</strong> info@lemoine-nutzfahrzeuge.de
                    </Text>
                    <Text fontSize="md" color="gray.700">
                      <strong>Öffnungszeiten:</strong>
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Mo-Fr: 8:00-18:00 Uhr<br />
                      Sa: 9:00-14:00 Uhr
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}