import { Box } from "@chakra-ui/react";
import { Carousel } from "./ui/Carousel";

const popularCities = [
  {
    image: "/cairo.png",
    title: "Cairo",
    description: "Unveil secrets of ancient wonders.",
  },
  {
    image: "/hurghada.png",
    title: "Hurghada",
    description: "Sunshine, beaches, and vibrant reefs.",
  },
  {
    image: "/sharm.png",
    title: "Sharm El Sheikh",
    description: "Dive into crystal clear waters.",
  },
  {
    image: "/luxor.png",
    title: "Luxor",
    description: "Ancient wonders and timeless beauty.",
  },
];

export function PopularCities() {
  return (
    <Box px={{ base: 4, md: 8 }} py={8}>
      <Carousel
        title="Trending Destinations"
        items={popularCities}
        variant="medium"
      />
    </Box>
  );
}
