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
import { LuUsers } from "react-icons/lu";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useSession } from "~/hooks/useSession";
import { SearchBox } from "./ui/SearchBox";
import { DateRangePicker } from "./ui/DateRangePicker";
import { TravelersSelect } from "./ui/TravelersSelect";

export default function Header() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(true);
  const { username } = useSession();

  const handleDateChange = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
    setIsDatePickerOpen(false);
  };

  const handleTravelersChange = (
    adults: number,
    children: number,
    rooms: number
  ) => {
    // Handle travelers change if needed
  };

  return (
    <Box
      position="relative"
      height="600px"
      width="100%"
      overflow="visible"
      borderBottom="1px solid red"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
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
      <Container maxW="container.xl" position="relative" height="100%">
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
            boxShadow="xl"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="full"
            position="relative"
            zIndex={10}
          >
            <HStack spacing={4} justify="space-between" width="100%">
              <Box flex={1}>
                <SearchBox
                  icon="location"
                  isSearchOpen={isSearchOpen}
                  onSearchOpen={setIsSearchOpen}
                  placeholder={location || "Where do you want to go?"}
                  value={location}
                  onChange={(value) => {
                    setLocation(value);
                    setIsSearchOpen(false);
                  }}
                />
              </Box>
              <Box flex={1}>
                <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  onChange={handleDateChange}
                />
              </Box>
              <Box flex={1}>
                <TravelersSelect onChange={handleTravelersChange} />
              </Box>
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
