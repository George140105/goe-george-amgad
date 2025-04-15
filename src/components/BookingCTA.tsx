import { Box } from "@chakra-ui/react";
import XLCard from "./ui/XLCard";

export function BookingCTA() {
  return (
    <Box px={{ base: 4, md: 8 }} py={16}>
      <XLCard
        title="Ready to Book Your Next Adventure?"
        description="Get exclusive deals and immersive previews with our smart booking platform."
        image="/p0ckmfkw.png"
      />
    </Box>
  );
}
