import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  variants: {
    sunny: {
      bg: "orange.400",
      color: "white",
      borderRadius: "xl",
      _hover: {
        bg: "orange.500",
      },
    },
  },
});

export default Button;
