import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react';
import { Phone } from '../assets';

export default function ContactFormWithSocialButtons() {
  return (
    <>
      <Flex align="center" justify="center" id="contact" mt={20} mb="0" pb={80}>
        <Box
          borderRadius="12px"
          maxWidth={{ base: '360px', sm: '450px', md: '628px' }}
          maxHeight={{ base: '700px', md: '780px' }}
          backgroundColor="#FFFFFF"
          p={10}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25}"
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <Box borderRadius="lg" p={8}>
                  <VStack spacing={5}>
                    <form>
                      <FormControl isRequired py={{ base: '20px', md: '30px' }}>
                        <FormLabel
                          fontFamily="poppins"
                          fontStyle="normal"
                          fontWeight={400}
                          fontSize={{ base: '14px', sm: '16px', md: '20px' }}
                          lineHeight="18%"
                          color="rgba(0, 0, 0, 0.8)"
                          opacity={0.8}
                        >
                          Name
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="text"
                            name="user_name"
                            placeholder="LandHero"
                            color="rgba(0, 0, 0, 0.5)"
                            fontSize={{ base: '12px', sm: '14px', md: '18px' }}
                            boxSizing="border-box"
                            border="2px solid rgba(0, 0, 0, 0.5)"
                            borderRadius="6px"
                            opacity={0.5}
                            width={{ base: '300px', sm: '400px', md: '482px' }}
                            height="48px"
                            mt="20px"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired py={{ base: '20px', md: '30px' }}>
                        <FormLabel
                          fontFamily="poppins"
                          fontStyle="normal"
                          fontWeight={400}
                          fontSize={{ base: '14px', sm: '16px', md: '20px' }}
                          lineHeight="18%"
                          color="rgba(0, 0, 0, 0.8)"
                          opacity={0.8}
                        >
                          Email
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="email"
                            name="user_email"
                            placeholder="LandMan.@gmail.com"
                            color="rgba(0, 0, 0, 0.5)"
                            fontSize={{ base: '12px', sm: '14px', md: '18px' }}
                            boxSizing="border-box"
                            border="2px solid rgba(0, 0, 0, 0.5)"
                            borderRadius="6px"
                            opacity={0.5}
                            width={{ base: '300px', sm: '400px', md: '482px' }}
                            height="48px"
                            mt="20px"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired py={{ base: '20px', md: '30px' }}>
                        <FormLabel
                          fontFamily="poppins"
                          fontStyle="normal"
                          fontWeight={400}
                          fontSize={{ base: '14px', sm: '16px', md: '20px' }}
                          lineHeight="18%"
                          color="rgba(0, 0, 0, 0.8)"
                          opacity={0.8}
                        >
                          Mobile
                        </FormLabel>

                        <InputGroup>
                          <Input
                            type="number"
                            name="user_mobile"
                            placeholder="123456789"
                            color="rgba(0, 0, 0, 0.5)"
                            fontSize={{ base: '12px', sm: '14px', md: '18px' }}
                            boxSizing="border-box"
                            border="2px solid rgba(0, 0, 0, 0.5)"
                            borderRadius="6px"
                            opacity={0.5}
                            width={{ base: '300px', sm: '400px', md: '482px' }}
                            height="48px"
                            mt="20px"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired py={{ base: '20px', md: '30px' }}>
                        <FormLabel
                          fontFamily="poppins"
                          fontStyle="normal"
                          fontWeight={400}
                          fontSize={{ base: '14px', sm: '16px', md: '20px' }}
                          lineHeight="18%"
                          color="rgba(0, 0, 0, 0.8)"
                          opacity={0.8}
                        >
                          Query
                        </FormLabel>

                        <Textarea
                          name="message"
                          placeholder="How can I become a super LandOwner"
                          fontFamily="poppins"
                          rows={6}
                          resize="none"
                          color="rgba(0, 0, 0, 0.5)"
                          fontSize={{ base: '12px', sm: '14px', md: '18px' }}
                          boxSizing="border-box"
                          border="2px solid rgba(0, 0, 0, 0.5)"
                          borderRadius="6px"
                          opacity={0.5}
                          width={{ base: '300px', sm: '400px', md: '482px' }}
                          height="48px"
                          mt="20px"
                        />
                      </FormControl>

                      <Center>
                        <Button
                          background="#5FC2DA"
                          border="2px solid #5FC2DA"
                          borderRadius="7px"
                          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
                          width={{ base: '300px', sm: '350px', md: '401px' }}
                          height="48px"
                          cursor="pointer"
                        >
                          <Text
                            fontFamily="poppins"
                            fontSize={{ base: '16px', md: '20px' }}
                            fontStyle="normal"
                            fontWeight={700}
                            lineHeight="30px"
                            color="#FFFFFF"
                            textAlign="center"
                          >
                            SEND MESSAGE
                          </Text>
                        </Button>
                      </Center>

                      <Text
                        fontFamily="poppins"
                        fontSize={{ base: '14px', md: '18px' }}
                        fontStyle="normal"
                        fontWeight={400}
                        lineHeight="18%"
                        textAlign="center"
                        color="rgba(0, 0, 0, 0.5)"
                        opacity={0.8}
                        py={10}
                      >
                        We’ll get back to you ASAP!
                      </Text>
                    </form>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      {/* <Box  position="relative" top="-500" left={{ base: "0px", lg: "10", xl: "40" }} zIndex={-1} display={{ base: "none", md: 'flex' }}>
        <img src={Phone} alt="backgroundimage" />
      </Box> */}
    </>
  );
}
