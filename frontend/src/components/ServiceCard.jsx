import * as React from 'react';
import {
  SimpleGrid,
  CardHeader,
  Card,
  CardFooter,
  CardBody,
  Heading,
  Text,
  Button,
  Center,
  Box,
} from '@chakra-ui/react';
import Data from '../Data/Services';
import { FavouritesShield, Recangle, Group } from '../assets';

const Servicecard = () => {
  return (
    <Box
      px={{ base: '20px', md: '100px' }}
      id="SERVICE"
      mx={{ base: '30px', md: '50px', lg: '70px', xl: '120px' }}
    >
      <SimpleGrid
        spacing={20}
        templateColumns={{
          base: 'repeat(auto-fill, minmax(300px, 1fr))',
          lg: 'repeat(auto-fill, minmax(400px, 1fr))',
        }}
      >
        {Data.map((item) => (
          <Center key={item.id}>
            <Card
              width={{ base: '290px', sm: '430px', md: '472px' }}
              height={{ base: '450px', sm: '360px', md: '380px', lg: '400px', xl: '390px' }}
              background="#FFFFFF"
              borderRadius="24px"
              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.08)"
              px={15}
            >
              <CardHeader>
                <Box
                  display="flex"
                  width={{ base: '60px', md: '90px' }}
                  height={{ base: '60px', md: '90px' }}
                >
                  <img
                    src={item.image}
                    alt="Shield"
                    width={{ base: '70px', md: '90px' }}
                    height={{ base: '70px', md: '90px' }}
                  />
                </Box>
                <Heading
                  fontFamily="poppins"
                  fontStyle="normal"
                  fontWeight={{ base: 500, md: 600 }}
                  fontSize="20px"
                  lineHeight="24%"
                  color="rgba(0, 0, 0, 0.8)"
                  opacity={0.8}
                  pt="20px"
                >
                  {item.name}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text
                  fontFamily="poppins"
                  fontStyle="normal"
                  fontWeight={{ base: 500, md: 600 }}
                  fontSize={{ base: '16px', md: '17px' }}
                  lineHeight="192%"
                  color="rgba(0, 0, 0, 0.5)"
                  opacity={0.6}
                >
                  {item.description}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  border="2px solid #5FC2DA"
                  borderRadius="7px"
                  width="164px"
                  height="40px"
                  cursor="pointer"
                >
                  <Text
                    fontFamily="poppins"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight={700}
                    lineHeight="24px"
                    color="#5FC2DA"
                  >
                    Use Service
                  </Text>
                </Button>
              </CardFooter>
            </Card>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Servicecard;
