import React from "react";
import { Box } from "@chakra-ui/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ContactNav from "../components/ContactNav";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import Partners from "../components/Partners";
import Steps from "../components/Steps";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "./../components/Footer";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Landmanager</title>
        <meta name="description" content="Safeguard your Land" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Box>
        <ContactNav />
        <Navbar />
        <Heading />
        <Banner />
        <ServiceCard />
        <Partners />
        <Steps />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </Box>
    </HelmetProvider>
  );
};

export default Home;
