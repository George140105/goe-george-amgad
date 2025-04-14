import { Box, Text, HStack, VStack, Badge, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { LuStar, LuHeart, LuMapPin } from "react-icons/lu";
import { useState } from "react";

interface LargeCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  ratingAmount: number;
  price: number;
}

export function LargeCard({
  image,
  title,
  location,
  rating,
  ratingAmount,
  price,
}: LargeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Box
      borderRadius="3xl"
      overflow="hidden"
      bg="white"
      pb={6}
      w="100%"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-4px)", boxShadow: "md" }}
    >
      <Box position="relative" height="200px" overflow="hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            borderRadius: "24px",
          }}
        />

        {/* Location Badge */}
        <Badge
          position="absolute"
          top={3}
          left={3}
          bg="#FFFFFF"
          color="#346D52"
          px={2}
          py={1}
          borderRadius="xl"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Text fontSize="xs">{location}</Text>
        </Badge>

        {/* Favorite Button */}
        <IconButton
          aria-label="Add to favorites"
          icon={
            <LuHeart
              size={20}
              fill={isFavorite ? "#FF5A5A" : "none"}
              color={isFavorite ? "black" : "black"}
            />
          }
          position="absolute"
          top={3}
          right={3}
          borderColor="#D2AC71"
          bg="#F6EEE5"
          color="white"
          borderRadius="full"
          size="sm"
          onClick={() => setIsFavorite(!isFavorite)}
          _hover={{ bg: "#FF5A5A" }}
        />
      </Box>
      <HStack justify="space-between" align="start" p={4}>
        <VStack align="start" justify="start" maxW="65%" spacing={0}>
          <Text fontSize="md" fontWeight="bold" noOfLines={1}>
            {title}
          </Text>
          <Text fontSize="sm" fontWeight="medium" noOfLines={1}>
            From ${price} per person
          </Text>
        </VStack>
        <HStack spacing={1}>
          <LuStar size={16} fill="#FFB800" color="#FFB800" />
          <Text fontSize="sm" fontWeight="medium">
            {rating} ({ratingAmount})
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}
