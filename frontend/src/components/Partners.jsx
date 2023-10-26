import * as React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { Project } from '../assets';

const Partners = () => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      px={{ base: '20px', md: '80px', lg: '100px' }}
      pt="40px"
      id="PARTNER"
      mx={{ base: '20px', md: '40px', lg: '120px' }}
    >
      <Text
        fontFamily="poppins"
        fontStyle="normal"
        fontSize={{ base: '28px', sm: '30px', md: '34px', lg: '40px' }}
        fontWeight="500"
        lineHeight={{ base: '160%', md: '180%', lg: '190%' }}
        color="rgba(0, 0, 0, 0.8)"
        opacity={0.8}
        textAlign="center"
      >
        We partner with the best of the best
      </Text>

      <Text
        fontFamily="poppins"
        fontStyle="normal"
        fontSize={{ base: '25px', sm: '26px', md: '28px', lg: '32px' }}
        fontWeight="500"
        lineHeight={{ base: '160%', md: '180%', lg: '190%' }}
        color="rgba(0, 0, 0, 0.5)"
        opacity={0.5}
        textAlign="center"
      >
        Cuz we value your time and money
      </Text>

      <img src={Project} alt="Project Image" width="1100.84px" height="881px" />

      <Text
        fontFamily="poppins"
        fontStyle="normal"
        fontSize={{ base: '22px', sm: '24px', md: '28px', lg: '30px', xl: '32px' }}
        fontWeight="400"
        lineHeight={{ base: '160%', md: '180%', lg: '190%' }}
        color="rgba(0, 0, 0, 0.5)"
        opacity={0.8}
        textAlign="center"
      >
        You're Only as Good as Your Team! Thus we make sure that we
        partner with the best Engineers, Architects, Soil experts, Advocates,
        Chartered Financial Analysts, Development and Construction professionals
        in the industry to serve you. Cuz Your needs are our purpose.
      </Text>
    </Stack>
  );
};

export default Partners;
