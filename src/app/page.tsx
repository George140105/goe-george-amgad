"use client";

import { Button, Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      display="grid"
      gridTemplateRows="20px 1fr 20px"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      p={{ base: 8, sm: 20 }}
      pb={20}
      gap={16}
      fontFamily="var(--font-geist-sans)"
    >
      <Flex
        as="main"
        direction="column"
        gap={8}
        gridRow="2"
        alignItems={{ base: "center", sm: "flex-start" }}
      >
        <Button variant="sunny">login</Button>
      </Flex>
      <Flex
        as="footer"
        gridRow="3"
        gap={6}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: "underline", textUnderlineOffset: 4 }}
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <Text>Learn Next.js</Text>
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </Flex>
    </Box>
  );
}
