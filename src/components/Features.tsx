import React from "react";
import Image from "next/image";
import {
  Text,
  Box,
  VStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Features = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <Text
          fontSize={{ base: "4xl", md: "3xl" }}
          color="white"
          fontWeight="bold"
          mb={8}
          textAlign="center"
        >
          Why choose <span className="text-[#D2AC71]">Egy</span>Book
        </Text>
        <VStack spacing={12} align="center">
          <Box
            className="flex flex-col items-center text-center"
            maxW={{ base: "100%", md: "auto" }}
          >
            <Box className="text-[#346D52] mb-4 h-[50px] w-[50px] relative">
              <Image
                src="/mouse-click-icon 1.png"
                alt="Mouse click icon"
                fill
                className="object-contain"
              />
            </Box>
            <Heading as="h3" size="md" mb={3} textAlign="center">
              <span className="text-[#D2AC71]">Seamless</span>
              <span className="text-white "> & </span>
              <span className="text-[#346D52]">Smart</span>
              <span className="text-white "> Booking </span>
            </Heading>
            <Text className="text-gray-300 text-base md:text-sm max-w-[300px] md:max-w-[250px] text-center">
              Quick, user-friendly platform that simplifies the reservation
              process
            </Text>
          </Box>
          <Box
            className="flex flex-col items-center text-center"
            maxW={{ base: "100%", md: "auto" }}
          >
            <Box className="text-[#346D52] mb-4 h-[50px] w-[50px] relative">
              <Image
                src="/vr.png"
                alt="VR headset icon"
                fill
                className="object-contain"
              />
            </Box>
            <Heading as="h3" size="md" mb={3} textAlign="center">
              <span className="text-[#346D52] italic">Immersive</span>
              <span className="text-white font-medium "> VR Previews</span>
            </Heading>
            <Text className="text-gray-300 text-base md:text-sm max-w-[300px] md:max-w-[250px] text-center">
              Explore hotels and rooms in 360° before you book—giving you total
              confidence.
            </Text>
          </Box>
          <Box
            className="flex flex-col items-center text-center"
            maxW={{ base: "100%", md: "auto" }}
          >
            <Box className="text-[#346D52] mb-4 h-[50px] w-[50px] relative">
              <Image
                src="/piggybank.png"
                alt="Piggy bank icon"
                fill
                className="object-contain"
              />
            </Box>
            <Heading as="h3" size="md" mb={3} textAlign="center">
              <span className="text-[#346D52] font-medium">Exclusive</span>
              <span className="text-white font-medium "> Best-Price Deals</span>
            </Heading>
            <Text className="text-gray-300 text-base md:text-sm max-w-[300px] md:max-w-[250px] text-center">
              Save more with special offers and real-time price comparisons.
            </Text>
          </Box>
        </VStack>
      </div>
    </section>
  );
};
