import * as React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';
import { Bannerimg } from '../assets';

const Banner = () => {
  return (
    <Box w="100%" px={{ base: '80px', md: '160px', lg: '150px' }}>
      <Box w="100%" mt="80px" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center">
          <img
            src={Bannerimg}
            alt="BannerImage"
            width="854.16px"
            height="623.19px"
          />
        </Box>

        <Box textAlign="center">
          <Text
            fontFamily="poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize={{ base: '24px', sm: '30px', md: '34px', lg: '38px' }}
            lineHeight="192%"
            color="rgba(0, 0, 0, 0.8"
            opacity="0.8"
          >
            Land Management is such a hassle!
          </Text>
        </Box>

        <Box textAlign="center">
          <Text
            fontFamily="poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize={{ base: '24px', sm: '28px', md: '30px', lg: '32px' }}
            lineHeight="192%"
            color="rgba(0, 0, 0, 0.5)"
            opacity="0.5"
          >
            Don't worry, We heard you!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
