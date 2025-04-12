"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "~/theme";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} resetCSS={false}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
