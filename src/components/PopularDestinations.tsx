import { Box } from "@chakra-ui/react";
import { Carousel } from "./ui/Carousel";

const popularDestinations = [
  {
    image: "/kempinski.png",
    title: "Soma Bay",
    aspectRatio: 1.5,
  },
  {
    image: "/giza.png",
    title: "Giza",
    aspectRatio: 1.5,
  },
  {
    image: "/nabq-bay.png",
    title: "Nabq Bay",
    aspectRatio: 1.5,
  },
  {
    image: "/nile.png",
    title: "Nile",
    aspectRatio: 1.5,
  },
  {
    image: "/red-sea.png",
    title: "Red Sea",
    aspectRatio: 1.5,
  },
  {
    image: "/other.png",
    title: "Other",
    aspectRatio: 1.5,
  },
];

export function PopularDestinations() {
  return (
    <Box px={{ base: 4, md: 8 }} py={8}>
      <Carousel
        title="Discover New Places"
        items={popularDestinations}
        variant="thin"
      />
    </Box>
  );
}
