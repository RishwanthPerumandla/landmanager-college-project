import * as React from 'react';
import { Center, Stack, Text } from '@chakra-ui/react';
import ContactFormWithSocialButtons from './ContactForm';

const Contact = () => {
  return (
    <Stack px={{ base: '20px', md: '100px' }} mt={10} id="CONTACT" mx={{ base: '30px', md: '80px' }}>
      <Center display="flex" flexDirection="column">
        <Text
          fontFamily="poppins"
          fontStyle="normal"
          fontWeight={{ base: 400, md: 500 }}
          fontSize={{ base: '26px', sm: '30px', md: '40px' }}
          lineHeight={{ base: '160%', md: '180%' }}
          color="rgba(0, 0, 0, 0.8}"
          opacity="0.8"
          mb="0"
        >
          For more information, let’s get in touch!
        </Text>
        <Text
          fontFamily="poppins"
          fontStyle="normal"
          fontWeight={{ base: 400, md: 500 }}
          fontSize={{ base: '23px', sm: '27px', md: '32px' }}
          lineHeight="192%"
          color="rgba(0, 0, 0, 0.5}"
          opacity="0.5"
        >
          Still have any doubts? Let’s get in touch!
        </Text>
      </Center>

      <ContactFormWithSocialButtons />
    </Stack>
  );
};

export default Contact;
