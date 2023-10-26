import * as React from 'react';
import { Box, Text, Center, Button, Stack } from '@chakra-ui/react';
import { Heading1, Approval, Line } from '../assets';

const Heading = () => {
  return (
    <Center
      display="flex"
      flexDirection={{ base: 'column', xl: 'row' }}
      justify="center"
      px={{ base: '20px', md: '70px', lg: '100px' }}
      mx={{ base: '16px', md: '10px', lg: '60px', xl: '130px' }}
    >
      <Stack flex={1} display="flex" flexDirection="column">
        <Text
          fontFamily="poppins"
          fontStyle="normal"
          fontWeight={700}
          fontSize={{ base: '22px', sm: '24px', md: '28px', lg: '30px' }}
          lineHeight={{ base: '160%', lg: '190%' }}
          color="rgba(35, 35, 35, 0.8)"
          opacity={0.8}
          mb={0}
        >
          Do your works without worrying about your property. Sleep peacefully as we are always awake safeguarding your Land
        </Text>

        <Box mt={0} pt={0} display={{ base: 'none', sm: 'flex' }} pl={{ base: '30px', md: '100px' }}>
          <img
            src={Line}
            alt="Line"
            width={{ base: '100px', md: '156px' }}
            height="7.75px"
            left="calc(50% - 156.79px/2 - 433.61px)"
            transform="rotate(-2.08deg)"
            ms="center"
            mt={0}
          />
        </Box>

        <Box>
          <Box display="flex" py="20px">
            <img
              src={Approval}
              alt="Approvalimage"
              width={{ base: '20px', sm: '30px', md: '50px' }}
              height={{ base: '20px', sm: '30px', md: '50px' }}
            />
            <Text
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={500}
              fontSize={{ base: '20px', md: '22px', lg: '24px' }}
              lineHeight={{ base: '160%', lg: '190%' }}
              color="rgba(0, 0, 0, 0.8)"
              opacity={0.5}
              my={0}
              ml={{ base: '5px', md: '8px' }}
            >
              Regular monitoring of your plot
            </Text>
          </Box>

          <Box display="flex" py="20px">
            <img
              src={Approval}
              alt="Approvalimage"
              width={{ base: '20px', sm: '30px', md: '50px' }}
              height={{ base: '20px', sm: '30px', md: '50px' }}
            />
            <Text
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={500}
              fontSize={{ base: '20px', md: '22px', lg: '24px' }}
              lineHeight={{ base: '160%', lg: '190%' }}
              color="rgba(0, 0, 0, 0.8)"
              opacity={0.5}
              my={0}
              ml={{ base: '5px', md: '8px' }}
            >
              Assured time to time updates
            </Text>
          </Box>

          <Box display="flex" py="20px">
            <img
              src={Approval}
              alt="Approvalimage"
              width={{ base: '20px', sm: '30px', md: '50px' }}
              height={{ base: '20px', sm: '30px', md: '50px' }}
            />
            <Text
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight={500}
              fontSize={{ base: '20px', md: '22px', lg: '24px' }}
              lineHeight={{ base: '160%', lg: '190%' }}
              color="rgba(0, 0, 0, 0.8)"
              opacity={0.5}
              my={0}
              ml={{ base: '5px', md: '8px' }}
            >
              Documentation works
            </Text>
          </Box>
        </Box>

        <Button
          size="md"
          height={{ base: '30px', md: '48px' }}
          width={{ base: '200px', md: '327px' }}
          background="#5FC2DA"
          border="2px solid #5FC2DA"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
        >
          <Text
            color="#FFFFFF"
            fontStyle="normal"
            fontFamily="poppins"
            fontWeight={700}
            fontSize={{ base: '18px', md: '20px' }}
            lineHeight="30px"
          >
            DOWNLOAD APP
          </Text>
        </Button>
      </Stack>

      <Stack flex="1" align="center" display="flex" mt="100px">
        <img
          src={Heading1}
          alt="Image"
          align="center"
          display="flex"
          width={{ base: '400px', sm: '400px', md: '600px' }}
          height={{ base: '200px', sm: '436px', md: '430px' }}
        />
      </Stack>
    </Center>
  );
};

export default Heading;
