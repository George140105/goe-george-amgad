import { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { LargeCard } from "./LargeCard";
import { ThinCard } from "./ThinCard";
import MediumCard from "./MediumCard";

type CardVariant = "large" | "thin" | "medium";

interface BaseCarouselItem {
  image: string;
  title: string;
}

interface LargeCarouselItem extends BaseCarouselItem {
  location: string;
  rating: number;
  ratingAmount: number;
  price: number;
}

interface ThinCarouselItem extends BaseCarouselItem {
  aspectRatio?: number;
}

interface MediumCarouselItem extends BaseCarouselItem {
  description: string;
  href: string;
}

interface CarouselProps {
  title: string;
  variant?: CardVariant;
  itemsPerPage?: number;
  items: LargeCarouselItem[] | ThinCarouselItem[] | MediumCarouselItem[];
}

export function Carousel({
  title,
  variant = "large",
  itemsPerPage = variant === "large" ? 4 : variant === "medium" ? 3 : 6,
  items,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Adjust items per page based on screen size
  const responsiveItemsPerPage =
    variant === "large"
      ? { base: 2, md: 4 }
      : variant === "medium"
      ? { base: 2, md: 3 }
      : { base: 3, md: 6 };

  // Get the current items per page based on screen size
  const currentItemsPerPage =
    useBreakpointValue(responsiveItemsPerPage) || itemsPerPage;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (currentIndex >= items.length - currentItemsPerPage) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (currentIndex <= 0) {
      setCurrentIndex(items.length - currentItemsPerPage);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const cardWidth =
    variant === "large" ? "300px" : variant === "medium" ? "400px" : "200px";

  return (
    <Box>
      <Text fontSize="3xl" color="white" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Box position="relative" overflow="hidden">
        <IconButton
          aria-label="Previous slide"
          icon={<LuChevronLeft size={24} />}
          onClick={prevSlide}
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          bg="white"
          color="black"
          _hover={{ bg: "gray.100" }}
          borderRadius="full"
          size="lg"
          boxShadow="md"
          isDisabled={isAnimating}
        />
        <Flex
          ref={containerRef}
          gap={4}
          position="relative"
          transition="transform 0.5s ease-in-out"
          transform={`translateX(${
            -currentIndex * (100 / currentItemsPerPage)
          }%)`}
          style={{
            willChange: "transform",
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              flex={`0 0 ${cardWidth}`}
              minW={cardWidth}
              maxW={cardWidth}
              style={{
                opacity: isAnimating ? 0.8 : 1,
              }}
            >
              {variant === "large" ? (
                <LargeCard {...(item as LargeCarouselItem)} />
              ) : variant === "medium" ? (
                <MediumCard {...(item as MediumCarouselItem)} />
              ) : (
                <ThinCard {...(item as ThinCarouselItem)} />
              )}
            </Box>
          ))}
        </Flex>
        <IconButton
          aria-label="Next slide"
          icon={<LuChevronRight size={24} />}
          onClick={nextSlide}
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          bg="white"
          color="black"
          _hover={{ bg: "gray.100" }}
          borderRadius="full"
          size="lg"
          boxShadow="md"
          isDisabled={isAnimating}
        />
      </Box>
    </Box>
  );
}
