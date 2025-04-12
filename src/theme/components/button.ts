import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  variants: {
    sunny: {
      bg: "#D4B36A",
      color: "white",
      paddingX: 6,
      paddingY: 4,
      fontWeight: "medium",
      fontSize: "lg",
      fontFamily: "var(--font-montserrat)",
      _hover: {
        bg: "#E6C88D",
      },
    },
  },
});

export default Button;
