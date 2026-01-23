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
          title: 'Nachricht gesendet!',
          description: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        
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
        title: 'Fehler beim Senden',
        description: 'Bitte versuchen Sie es erneut oder rufen Sie uns an: 0521 / 123 456 78',
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
      <Container maxW="6xl">
        {/* Header */}
        <VStack spacing={{ base: 6, md: 8 }} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="700"
            color="gray.900"
          >
            Jetzt Kontakt aufnehmen
          </Heading>
          
          <Heading
            as="h3" 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600" 
            maxW="600px"
            fontWeight="400"
            lineHeight="1.6"
          >
            Lassen Sie uns gemeinsam die perfekte Lösung für Ihr Nutzfahrzeug finden. 
            Kostenlose Beratung und schnelle Antwort garantiert.
          </Heading>
        </VStack>

        {/* Main Content Grid */}
        <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={{ base: 8, xl: 12 }}>
          {/* Contact Form */}
          <Box>
            {/* Mode Toggle */}
            <Flex justify="center" mb={8}>
              <HStack 
                bg="white"
                borderRadius="full"
                p={1}
                spacing={0}
                border="1px solid"
                borderColor="gray.200"
              >
                <Button
                  onClick={() => setFormMode('kaufen')}
                  bg={formMode === 'kaufen' ? '#1E3689' : 'transparent'}
                  color={formMode === 'kaufen' ? 'white' : 'gray.600'}
                  _hover={{ 
                    bg: formMode === 'kaufen' ? '#1E3689' : 'gray.100'
                  }}
                  borderRadius="full"
                  px={6}
                  py={3}
                  fontWeight="600"
                  fontSize="md"
                >
                  LKW kaufen
                </Button>
                <Button
                  onClick={() => setFormMode('verkaufen')}
                  bg={formMode === 'verkaufen' ? '#1E3689' : 'transparent'}
                  color={formMode === 'verkaufen' ? 'white' : 'gray.600'}
                  _hover={{ 
                    bg: formMode === 'verkaufen' ? '#1E3689' : 'gray.100'
                  }}
                  borderRadius="full"
                  px={6}
                  py={3}
                  fontWeight="600"
                  fontSize="md"
                >
                  LKW verkaufen
                </Button>
              </HStack>
            </Flex>

            {/* Form */}
            <Box
              bg="white"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading 
                as="h4" 
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="700"
                color="gray.900"
                mb={6}
                textAlign="center"
              >
                {formMode === 'kaufen' 
                  ? 'Ihr Wunschfahrzeug finden' 
                  : 'Fahrzeug kostenlos bewerten lassen'
                }
              </Heading>

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
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.300"
                      _focus={{ borderColor: 'blue.500' }}
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
                      />
                    </FormControl>
                  )}

                  {/* File Upload (nur bei Verkauf) */}
                  {formMode === 'verkaufen' && (
                    <Box
                      w="full"
                      h="80px"
                      border="1px dashed"
                      borderColor="gray.400"
                      borderRadius="lg"
                      bg="gray.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'gray.100' }}
                    >
                      <VStack spacing={1}>
                        <Text fontSize="md" fontWeight="600" color="gray.600">
                          📸 Bilder hochladen
                        </Text>
                        <Text fontSize="sm" color="gray.500">
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
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
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
                      />
                    </FormControl>
                  </SimpleGrid>

                  {/* Telefon & Erreichbarkeit */}
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontWeight="600" color="gray.700">
                        Telefon
                      </FormLabel>
                      <Input 
                        placeholder="0123 456789"
                        value={formData.telefon}
                        onChange={(e) => handleInputChange('telefon', e.target.value)}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel fontWeight="600" color="gray.700">
                        Beste Erreichbarkeit
                      </FormLabel>
                      <Select 
                        placeholder="Wann sind Sie erreichbar?"
                        value={formData.erreichbarkeit}
                        onChange={(e) => handleInputChange('erreichbarkeit', e.target.value)}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.300"
                        _focus={{ borderColor: 'blue.500' }}
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
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.300"
                      _focus={{ borderColor: 'blue.500' }}
                      minH="100px"
                    />
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bg="blue.600"
                    color="white"
                    _hover={{ bg: 'blue.700' }}
                    borderRadius="lg"
                    h="56px"
                    fontSize="lg"
                    fontWeight="600"
                    isLoading={isSubmitting}
                    loadingText="Wird gesendet..."
                    isDisabled={!formData.vorname || !formData.nachname || !formData.email || !formData.telefon || !formData.fahrzeugtyp || !formData.hersteller}
                  >
                    {formMode === 'kaufen' 
                      ? 'Anfrage senden' 
                      : 'Fahrzeug bewerten lassen'
                    }
                  </Button>

                  <Text fontSize="xs" color="gray.500" textAlign="center">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </Text>
                </VStack>
              </form>
            </Box>
          </Box>

          {/* Contact Info & Map */}
          <VStack spacing={8} align="stretch" >
            <Box
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
              h="350px"
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

            <VStack spacing={4}>
              <Box
                bg="white"
                borderRadius="2xl"
                p={6}
                border="1px solid"
                borderColor="gray.200"
                w="full"
              >
                <VStack spacing={4} align="start">
                  <Heading as="h5" size="lg" color="gray.800">
                    Unser Standort
                  </Heading>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="md" color="gray.700">
                      Brönninghauser Str. 35B
                    </Text>
                    <Text fontSize="md" color="gray.700">
                      33729 Bielefeld
                    </Text>
                  </VStack>
                </VStack>
              </Box>

              <Box
                bg="white"
                borderRadius="2xl"
                p={6}
                border="1px solid"
                borderColor="gray.200"
                w="full"
              >
                <VStack spacing={4} align="start">
                  <Heading as="h5" size="lg" color="gray.800">
                    Direkter Kontakt
                  </Heading>
                  <VStack align="start" spacing={2}>
                    <Text fontSize="md" color="gray.700">
                      <Text as="span" fontWeight="600">Telefon:</Text> 0521 3906222
                    </Text>
                    <Text fontSize="md" color="gray.700">
                      <Text as="span" fontWeight="600">E-Mail:</Text> info@lemoine-nutzfahrzeuge.de
                    </Text>
                    <Heading as="h6" fontSize="md" color="gray.700" fontWeight="600">
                      Öffnungszeiten:
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      Mo-Fr: 8:30-18:00 Uhr<br />
                      Sa: 9:00-13:00 Uhr
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