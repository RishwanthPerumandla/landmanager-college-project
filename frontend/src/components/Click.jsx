import { Box, Button, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { Vector } from "../assets";
import React from "react";

const Click = () => {
  return (
    <>
      <Center
        px={{ base: "20px", md: "100px", xl: "140px" }}
        pt="100px"
        zIndex={-4}
        mx={{ base: "30px", md: "50px", xl: "140px" }}
      >
        <Center
          display={"flex"}
          width={{ base: "920px", sm: "1100px", md: "1620px", lg: "1900px" }}
          height={{ base: "160px", sm: "200px", md: "220px" }}
          background={"linear-gradient(181.04deg, #6FDAF7 10.06%, #6FDAF7 40.66%, rgba(0, 255, 209, 0.75) 147.48%, rgba(142, 0, 254, 0.5) 363.55%)"}
          borderRadius="23px"
        >
          <Box
            fontFamily={"sans-serif"}
            fontStyle="normal"
            fontWeight={{ base: "500", md: "600", lg: "650" }}
            fontSize={{ base: "23px", sm: "25px", md: "35px", lg: "40px" }}
            lineHeight={{ base: "142%", md: "172%" }}
            textAlign="center"
            color="white"
          >
            Just a click away
          </Box>
          <Box
            transform="rotate(-3.06deg)"
            opacity={"0.7"}
            width={{ base: "120px", sm: "180px", md: "350px" }}
            maxHeight={{ base: "50px", md: "70px" }}
            px={{ base: "10px", md: "60px" }}
          >
            <img src={Vector} alt="vector image" />
          </Box>
          <Button
            fontFamily={"sans-serif"}
            fontStyle="normal"
            fontWeight={{ base: "370", md: "550", lg: "600" }}
            fontSize={{ base: "19px", sm: "19px", md: "28px", lg: "32px" }}
            lineHeight={{ base: "142%", md: "172%" }}
            textAlign="center"
            textDecoration={"underline"}
            color="white"
            bg={"linear-gradient(181.04deg, #6FDAF7 10.06%, #6FDAF7 40.66%, rgba(0, 255, 209, 0.75) 147.48%, rgba(142, 0, 254, 0.5) 363.55%)"}
            _hover={{
              bg: "linear-gradient(181.04deg, #6FDAF7 10.06%, #6FDAF7 40.66%, rgba(0, 255, 209, 0.75) 147.48%, rgba(142, 0, 254, 0.5) 363.55%)"
            }}
          >
            Download Now
          </Button>
        </Center>
      </Center>
    </>
  );
};

export default Click;
