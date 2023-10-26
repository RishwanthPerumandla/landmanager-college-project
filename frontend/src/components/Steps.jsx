import * as React from 'react';
import { Box, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import { Step1, Step2, Step3 } from '../assets';

const Steps = () => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: '20px', md: '120px', lg: '140px' }}
      pt="40px"
      id="HOW_IT_WORK"
      mx={{ base: '30px', md: '120px', lg: '120px' }}
    >
      <Text
        fontFamily="poppins"
        fontStyle="normal"
        fontSize={{ base: '28px', sm: '30px', md: '32px', lg: '36px' }}
        fontWeight="500"
        lineHeight={{ base: '160%', md: '170%', lg: '190%' }}
        color="rgba(0, 0, 0, 0.8}"
        opacity={0.8}
        textAlign="center"
      >
        You are just steps away!
      </Text>

      <Text
        fontFamily="poppins"
        fontStyle="normal"
        fontSize={{ base: '27px', sm: '28px', md: '28px', lg: '32px' }}
        fontWeight="500"
        lineHeight={{ base: '160%', md: '170%', lg: '190%' }}
        color="rgba(0, 0, 0, 0.5}"
        opacity={0.5}
        textAlign="center"
        pb="40px"
      >
        Follow the 3-stage process to join us!
      </Text>

      <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }}>
        <Box
          width={{ base: '220px', sm: '432px', lg: '250px', xl: '350px' }}
          height={{ base: '200px', sm: '334px', lg: '250px', xl: '334px' }}
        >
          <img
            src={Step1}
            alt="Step1img"
            width={{ base: '432px', md: '200px' }}
            height={{ base: '334px', md: '200px' }}
          />
        </Box>

        <Box
          width={{ base: '220px', sm: '432px', lg: '250px', xl: '350px' }}
          height={{ base: '200px', sm: '334px', lg: '250px', xl: '334px' }}
        >
          <img
            src={Step2}
            alt="Step2img"
            width="422px"
            height="324px"
          />
        </Box>

        <Box
          width={{ base: '220px', sm: '432px', lg: '250px', xl: '350px' }}
          height={{ base: '200px', sm: '334px', lg: '250px', xl: '334px' }}
        >
          <img
            src={Step3}
            alt="Step3img"
            width="432px"
            height="334px"
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Steps;
