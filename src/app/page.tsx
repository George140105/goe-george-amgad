"use client";

import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NavBar from "~/components/NavBar";
import Header from "~/components/Header";
import { FeaturedHotels } from "~/components/FeaturedHotels";
import { PopularDestinations } from "~/components/PopularDestinations";
import { Features } from "~/components/Features";
import { BookingCTA } from "~/components/BookingCTA";
import { PopularCities } from "~/components/PopularCities";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <FeaturedHotels />

      <PopularDestinations />
      <Features />
      <PopularCities />
      <BookingCTA />
    </div>
  );
}
