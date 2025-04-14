"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { LuCalendar, LuUsers } from "react-icons/lu";
import { useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { TbArrowsUpRight } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";
import { useSession } from "~/hooks/useSession";
export default function Header() {
  const [location, setLocation] = useState("Cairo, Egypt");
  const [date, setDate] = useState("19 March 2025");
  const [guests, setGuests] = useState("2 Adults, 1 Child");
  const { username } = useSession();
  return (
    <Box
      position="relative"
      height="600px"
      width="100%"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
        zIndex: 1,
      }}
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('/heroBG.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.9)"
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex={2}
        height="100%"
      >
        <Flex
          direction="column"
          justify="center"
          align="start"
          height="100%"
          textAlign="center"
          color="white"
          pt={20}
        >
          {/* Location Icon and Text */}
          <Flex align="center" mb={3}>
            <Icon as={FaLocationArrow} boxSize={4} color="white" mr={2} />
            <Text color="white" fontSize="lg">
              Egypt
            </Text>
          </Flex>

          {/* Main Heading */}
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            fontWeight="bold"
            fontFamily="var(--font-montserrat)"
          >
            {username ? "Hey, " + username + "!" : " Hey!"}
          </Heading>
          <Heading
            as="h2"
            size="xl"
            mb={4}
            fontWeight="medium"
            fontFamily="var(--font-montserrat)"
          >
            Tell us where you want to stay
          </Heading>
          <Text fontSize="2xl" mb={8} color="gray.200">
            Book 450+ Curated Egyptian Hotels
          </Text>

          {/* Search Box */}
          <Box
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(8px)"
            p={6}
            width="100%"
            boxShadow="xl"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="full"
          >
            <HStack spacing={4} justify="space-between" width="100%">
              <InputGroup size="lg" flex={1}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="#D4B36A" />
                </InputLeftElement>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  color="white"
                  border="none"
                  _focus={{ boxShadow: "none" }}
                  _placeholder={{ color: "white" }}
                  sx={{
                    "&::placeholder": { color: "white" },
                    "&::-webkit-input-placeholder": { color: "white" },
                    "&::-moz-placeholder": { color: "white" },
                    "&:-ms-input-placeholder": { color: "white" },
                  }}
                />
              </InputGroup>
              <InputGroup size="lg" flex={1}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={LuCalendar} color="#D4B36A" />
                </InputLeftElement>
                <Input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  color="white"
                  border="none"
                  _focus={{ boxShadow: "none" }}
                  _placeholder={{ color: "white" }}
                  sx={{
                    "&::placeholder": { color: "white" },
                    "&::-webkit-input-placeholder": { color: "white" },
                    "&::-moz-placeholder": { color: "white" },
                    "&:-ms-input-placeholder": { color: "white" },
                  }}
                />
              </InputGroup>
              <InputGroup size="lg" flex={1}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={LuUsers} color="#D4B36A" />
                </InputLeftElement>
                <Input
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  color="white"
                  border="none"
                  _focus={{ boxShadow: "none" }}
                  _placeholder={{ color: "white" }}
                  sx={{
                    "&::placeholder": { color: "white" },
                    "&::-webkit-input-placeholder": { color: "white" },
                    "&::-moz-placeholder": { color: "white" },
                    "&:-ms-input-placeholder": { color: "white" },
                  }}
                />
              </InputGroup>
              <Button variant="greeny" size="lg" px={8}>
                Explore Stays
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
