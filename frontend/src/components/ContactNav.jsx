import * as React from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';

const ContactNav = () => {
  return (
    <Center width="100%" background="#5FC2DA" top="0" mb="10px">
      <Center display="flex" listStyleType="none" position="relative" textAlign="center">
        <Flex>
          <Center color="white" fontWeight={{ base: 300, md: 500 }} fontSize={{ base: '13px', md: '19px' }} textDecoration="none" pr={{ base: '40px', md: '80px' }}>
            012 (345) 678 99
          </Center>
          <Center color="white" fontWeight={{ base: 300, md: 500 }} fontSize={{ base: '13px', md: '19px' }} textDecoration="none">
            info@landmanager.com
          </Center>
        </Flex>
      </Center>
    </Center>
  );
};

export default ContactNav;
