import React from "react";
import {
  CardHeader,
  Card,
  CardFooter,
  CardBody,
  Heading,
  Text,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import Data from "../Data/Additional";
import { Search, Land } from "../assets";

const AdditionalServices = () => {
  return (
    <Box pt={{ base: "60px", xl: "0px" }} pl={{ base: "0px", xl: "60px" }}>
      <Card
        maxWidth={{ base: "360px", sm: "500px", md: "600px", lg: "550px" }}
        maxHeight={{ base: "1000px", sm: "1000px", md: "1000px" }}
        background="#FFFFFF"
        borderRadius="12px"
      >
        <CardHeader
          background="#FFFFFF"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
          borderRadius={"12px 12px 0px 0px"}
          display="flex"
          px={{ base: "25px", sm: "100px" }}
          textAlign={"center"}
          alignSelf="center"
        >
          <Heading
            fontFamily={"poppins"}
            fontStyle={"normal"}
            fontWeight={"600"}
            fontSize={{ base: "26px", md: "28px", lg: "30px" }}
            lineHeight={"32%"}
            color=" #4ACFF0"
            textAlign={"center"}
            width={{ base: "250px", md: "313px" }}
            height={{ base: "8px", md: "10px" }}
          >
            Additional Services
          </Heading>
          <Text
            fontFamily={"poppins"}
            fontStyle={"normal"}
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "24px" }}
            lineHeight={"24%"}
            color="rgba(0, 0, 0, 0.5)"
            textAlign={"center"}
            opacity="0.5"
            width={{ base: "30px", md: "37px" }}
            height={{ base: "4px", md: "6px" }}
            ml={{ base: "0px", md: "6px" }}
          >
            (8)
          </Text>
        </CardHeader>
        <CardBody>
          <Center display={"flex"} flexDirection="column" my={10}>
            <Text
              fontFamily={"poppins"}
              fontStyle={"normal"}
              fontWeight={"600"}
              fontSize={{ base: "26px", md: "28px", lg: "30px" }}
              lineHeight={"32%"}
              textAlign={"center"}
              color="#5FC2DA"
              m={0}
              mb="40px"
            >
              Variable costs
            </Text>
            <Text
              fontFamily={"poppins"}
              fontStyle={"normal"}
              fontWeight={"400"}
              fontSize={{ base: "20px", md: "22px", lg: "24px" }}
              lineHeight={"24%"}
              textAlign={"center"}
              color="rgba(0, 0, 0, 0.5)"
              opacity={"0.8"}
              m={0}
            >
              Negotiable
            </Text>
          </Center>
          {Data.map((item) => (
            <Box display={"flex"} py="10px" key={item.id}>
              <img
                src={item.image}
                alt="Seacrh image"
                width={{ base: "25px", sm: "30px", md: "40px", lg: "50px" }}
                height={{ base: "25px", sm: "30px", md: "40px", lg: "50px" }}
              />
              <Text
                fontFamily={"poppins"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={{ base: "20px", md: "22px", lg: "24px" }}
                lineHeight={"192%"}
                color="rgba(0, 0, 0, 0.5}"
                opacity={"0.5"}
                m={0}
                ml={6}
              >
                {item.name}
              </Text>
            </Box>
          ))}
        </CardBody>
      </Card>
    </Box>
  );
};

export default AdditionalServices;
