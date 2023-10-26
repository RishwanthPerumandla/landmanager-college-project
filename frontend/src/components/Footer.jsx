import * as React from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  IconButton,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Flogo, Footer1 } from '../assets';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
    //   _hover={
    //     "bg": {useColorModeValue('blackAlpha.200', 'whiteAlpha.200')},
    //   }
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={500} fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg="#5FC2DA" color="white" my={{ base: '40px', md: '0px' }} mb="0px">
      <Container as={Stack} maxW="10xl" py={10} px={{ base: '40px', md: '80px', xl: '160px' }}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={4} pb="20px" alignSelf="center">
            <Center
              width={{ base: '80px', md: '120px' }}
              height={{ base: '80px', md: '100px' }}
              alignItems="center"
              alignSelf="center"
            >
              <img src={Flogo} alt="footerlogo" />
            </Center>
            <Text
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={{ base: 400, md: 500 }}
              fontSize={{ base: '14px', sm: '17px', md: '20px', lg: '24px' }}
              lineHeight={{ base: '142%', md: '172%' }}
              textAlign="center"
            >
              Efficient Property Management Solutions at Ease
            </Text>
            <Text
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={{ base: 400, md: 500 }}
              fontSize={{ base: '14px', sm: '17px', md: '20px', lg: '24px' }}
              lineHeight={{ base: '142%', md: '172%' }}
              textAlign="center"
            >
              +012 (345) 678 99
            </Text>
          </Stack>
          <Stack align="flex-start">
            <ListHeader
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={{ base: 400, md: 600 }}
              fontSize={{ base: '14px', sm: '17px', md: '20px', lg: '24px' }}
              lineHeight={{ base: '142%', md: '172%' }}
              textAlign="center"
            >
              Company
            </ListHeader>
            <Link href="#">
              About
            </Link>
            <Link href="#">
              Support
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={{ base: 400, md: 600 }}
              fontSize={{ base: '14px', sm: '17px', md: '20px', lg: '24px' }}
              lineHeight={{ base: '142%', md: '172%' }}
              textAlign="center"
            >
              Quick links
            </ListHeader>
            <Link href="#">
              Our Services
            </Link>
            <Link href="#">
              Download App
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={{ base: 400, md: 600 }}
              fontSize={{ base: '14px', sm: '17px', md: '20px', lg: '24px' }}
              lineHeight={{ base: '142%', md: '172%' }}
              textAlign="center"
            >
              Follow
            </ListHeader>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </Stack>
            <Text>© 2022 LandManager</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
