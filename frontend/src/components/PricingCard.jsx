import React from 'react';
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Box,
  Center,
} from '@chakra-ui/react';
import { Approval } from '../assets';
import Data from '../Data/Pricing';

const PricingCard = () => {
  return (
    <Box>
      <Card
        maxWidth={{ base: '400px', sm: '628px', md: '500px' }}
        maxHeight={{ base: '1000px', sm: '1200px' }}
        background="#FFFFFF"
        borderRadius="12px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      >
        <CardHeader
          backgroundColor="#5FC2DA"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
          borderRadius="12px 12px 0px 0px"
        >
          <Heading
            fontFamily="poppins"
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: '24px', md: '32px' }}
            lineHeight="32%"
            textAlign="center"
            color="#FFFFFF"
          >
            Default Plan
          </Heading>
        </CardHeader>
        <Center display="flex" mt="36px">
          <Text
            fontFamily="poppins"
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: '36px', md: '48px' }}
            lineHeight="32%"
            textAlign="center"
            color="#5FC2DA"
          >
            ₹500
          </Text>
          <Text
            fontFamily="poppins"
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: '26px', md: '32px' }}
            lineHeight="32%"
            textAlign="center"
            color="#5FC2DA"
            m={0}
          >
            /mo
          </Text>
        </Center>

        <Center display="flex">
          <Text
            fontFamily="poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="24px"
            lineHeight="24px"
            textAlign="center"
            color=" #FF8E92"
            textDecorationLine="line-through"
            m={0}
            my={10}
          >
            ₹1000/mo
          </Text>
        </Center>
        {Data.map((item) => (
          <CardBody display="flex" key={item.id}>
            <Box
              width={{ base: '33px', md: '40px' }}
              height={{ base: '33px', md: '40px' }}
            >
              <img
                src={Approval}
                alt="Approval image"
                width={{ base: '20px', md: '40px' }}
                height={{ base: '20px', md: '40px' }}
              />
            </Box>
            <Text
              fontFamily="poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize={{ base: '20px', md: '24px' }}
              lineHeight={{ base: '162%', md: '192%' }}
              color="rgba(0, 0, 0, 0.8)"
              opacity={0.5}
              ml={{ base: '6px', md: '8px' }}
            >
              {item.name}
            </Text>
          </CardBody>
        ))}

        <Center pb="40px">
          <Button
            background="#5FC2DA"
            border=" 2px solid #5FC2DA"
            borderRadius="7px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
            width={{ base: '250px', md: '401px' }}
            height={{ base: '36px', md: '48px' }}
            cursor="pointer"
            alignItems="center"
          >
            <Text
              fontFamily="poppins"
              fontSize={{ base: '16px', md: '20px' }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="30px"
              color="#FFFFFF"
              textAlign="center"
            >
              DOWNLOAD APP
            </Text>
          </Button>
        </Center>
      </Card>
    </Box>
  );
};

export default PricingCard;
