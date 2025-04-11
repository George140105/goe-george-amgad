"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-geist-sans)",
    body: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  components: {
    Button: {
      variants: {
        sunny: {
          bg: "yellow.400",
          color: "black",
          _hover: {
            bg: "yellow.500",
          },
          _active: {
            bg: "yellow.600",
          },
        },
      },
    },
  },
});

export function Provider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} resetCSS={false}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
