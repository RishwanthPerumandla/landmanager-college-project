import * as React from 'react';
import { Box, Stack, Center } from '@chakra-ui/react';
import { Alert1 } from '../assets';
import PricingCard from './PricingCard';
import AdditionalServices from './AdditionalServices';
import Click from './Click';

const Pricing = () => {
  return (
    <Stack display="flex" mt={100} id="PRICING">
      <Box mb={100}>
        <img src={Alert1} alt="AlertBanner" width="100%" height="72px" />
      </Box>
      <Stack
        display="flex"
        flexDirection={{ base: 'column', xl: 'row' }}
        alignItems="center"
        alignSelf="center"
        px={{ base: '0px', md: '90px' }}
      >
        <Center>
          <PricingCard />
        </Center>
        <Center>
          <AdditionalServices />
        </Center>
      </Stack>
      <Box mx={{ base: '30px', md: '100px' }}>
        <Click />
      </Box>
    </Stack>
  );
};

export default Pricing;
