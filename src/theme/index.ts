import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-montserrat)",
    body: "var(--font-montserrat)",
    mono: "var(--font-montserrat)",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  components: {
    Button,
  },
});

export default theme;
