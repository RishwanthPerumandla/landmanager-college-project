import * as React from 'react';
import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import Data from '../Data/Faqd';

const FAQ = () => {
  return (
    <Center pt="100px" px={{ base: '20px', md: '150px' }} mx={{ base: '80px', md: '180px', lg: '120px' }}>
      <Accordion allowMultiple>
        {Data.map((item) => (
          <AccordionItem key={item.id}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    border="0px"
                    width={{ base: '370px', sm: '500px', md: '600px', lg: '800px', xl: '1100px' }}
                    height={{ base: '60px', sm: '70px', md: '80px', lg: '96px' }}
                    background="#FFFFFF"
                    px={{ base: '25px', md: '60px' }}
                    borderBottom="1px solid rgba(0, 0, 0, 0.33)"
                    py={{ base: '7', md: '8' }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontFamily="Inter"
                      fontStyle="normal"
                      fontWeight="400"
                      fontSize={{ base: '18px', sm: '20px', md: '24px' }}
                      lineHeight={{ base: '130%', md: '140%' }}
                      color="rgba(0, 0, 0, 0.8)"
                      opacity="0.8"
                    >
                      {item.name}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize={{ base: '10px', md: '16px' }} color="#5FC2DA" />
                    ) : (
                      <AddIcon fontSize={{ base: '10px', md: '16px' }} color="#5FC2DA" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '24px' }}
                  lineHeight={{ base: '170%', md: '190%' }}
                  color="rgba(0, 0, 0, 0.5)"
                  opacity="0.8"
                  width={{ base: '370px', sm: '500px', md: '600px', lg: '800px', xl: '1100px' }}
                  height={{ base: '60px', sm: '70px', md: '80px', lg: '96px' }}
                  pb="10"
                >
                  {item.description}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Center>
  );
};

export default FAQ;
