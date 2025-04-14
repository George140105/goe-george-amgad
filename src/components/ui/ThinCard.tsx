import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface ThinCardProps {
  image: string;
  title: string;
  aspectRatio?: number;
}

export function ThinCard({ image, title, aspectRatio = 0.75 }: ThinCardProps) {
  return (
    <Box
      position="relative"
      width="200px"
      height="300px"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "xl",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        style={{
          objectFit: "cover",
        }}
      />

      {/* Title Overlay */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        background="linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
        padding={4}
        paddingTop={8}
      >
        <Text
          color="white"
          fontSize="2xl"
          fontWeight="normal"
          textShadow="0 2px 4px rgba(0,0,0,0.3)"
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
}
