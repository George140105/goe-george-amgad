import { Box } from "@chakra-ui/react";
import { Carousel } from "./ui/Carousel";

const featuredHotels = [
  {
    image: "/kempinski.png",
    title: "Kempinski Hotel Soma Bay",
    location: "Soma Bay",
    rating: 1,
    price: 250,
    ratingAmount: 1233,
  },
  {
    image: "/jw.png",
    title: "JW Marriott Hotel Cairo",
    location: "Cairo",
    rating: 2,
    price: 280,
    ratingAmount: 1233,
  },
  {
    image: "/kempinski.png",
    title: "Kempinski Hotel Soma Bay",
    location: "Soma Bay",
    rating: 3,
    ratingAmount: 1233,
    price: 250,
  },
  {
    image: "/jw.png",
    title: "JW Marriott Hotel Cairo",
    location: "Cairo",
    rating: 4,
    price: 280,
    ratingAmount: 1233,
  },
  {
    image: "/kempinski.png",
    title: "Kempinski Hotel Soma Bay",
    location: "Soma Bay",
    rating: 5,
    ratingAmount: 1233,
    price: 250,
  },
  {
    image: "/jw.png",
    title: "JW Marriott Hotel Cairo",
    location: "Cairo",
    rating: 6,
    price: 280,
    ratingAmount: 1233,
  },
];

export function FeaturedHotels() {
  return (
    <Box px={{ base: 4, md: 8 }} py={8} position="relative" zIndex={1}>
      <Carousel title="The Most Relevant" items={featuredHotels} />
    </Box>
  );
}
