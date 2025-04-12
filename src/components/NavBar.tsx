"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Input,
  HStack,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  Collapse,
  LinkProps,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { LuGlobe } from "react-icons/lu";
import Image from "next/image";

interface NavLinkProps extends LinkProps {
  children: string;
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  const [prefix, suffix] = children.split("Egy");
  return (
    <Link
      href="#"
      fontWeight="medium"
      fontSize="lg"
      fontFamily="var(--font-montserrat)"
      _hover={{ textDecoration: "none" }}
      {...props}
    >
      {prefix}
      <Text as="span" color="#D4B36A">
        Egy
      </Text>
      <Text as="span" color="white">
        {suffix}
      </Text>
    </Link>
  );
};

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      {isSearchOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
          zIndex="overlay"
        />
      )}
      <Box
        as="nav"
        position="sticky"
        top="0"
        zIndex="sticky"
        bg="black"
        color="white"
        boxShadow="sm"
        py={2}
        px={4}
        fontFamily="var(--font-montserrat)"
      >
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          {/* Logo and Search */}
          <HStack
            spacing={6}
            flex={1}
            transition="transform 0.3s ease-in-out"
            transform={isSearchOpen ? "translateX(-100px)" : "translateX(0)"}
          >
            <Box flexShrink={0}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                priority
              />
            </Box>

            <Flex align="flex-start" ref={searchContainerRef}>
              <HStack spacing={4} width="full">
                {!isSearchOpen && (
                  <IconButton
                    aria-label="Search"
                    icon={<SearchIcon />}
                    variant="ghost"
                    size="md"
                    onClick={handleSearchClick}
                    color="#D4B36A"
                    bg="#333333"
                    borderRadius="full"
                    w="40px"
                    h="40px"
                    _hover={{
                      bg: "#404040",
                      color: "#E6C88D",
                    }}
                  />
                )}
                <Box
                  style={{
                    width: isSearchOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "width 0.3s ease-in-out",
                  }}
                >
                  <InputGroup size="md">
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="#D4B36A" />
                    </InputLeftElement>
                    <Input
                      ref={searchInputRef}
                      placeholder="Search..."
                      value={searchValue}
                      onChange={handleSearchChange}
                      bg="#333333"
                      border="none"
                      color="#D4B36A"
                      w="300px"
                      _placeholder={{ color: "#D4B36A", opacity: 0.7 }}
                      _focus={{
                        boxShadow: "none",
                        borderColor: "transparent",
                      }}
                      _hover={{
                        borderColor: "transparent",
                      }}
                    />
                  </InputGroup>
                </Box>
              </HStack>
            </Flex>
          </HStack>

          {/* Navigation Links */}
          <HStack
            spacing={12}
            justify="center"
            mr={8}
            opacity={isSearchOpen ? 0.3 : 1}
            transition="all 0.3s ease-in-out"
            transform={isSearchOpen ? "translateX(100px)" : "translateX(0)"}
          >
            <Link
              href="#"
              color="#D4B36A"
              fontWeight="medium"
              fontSize="lg"
              fontFamily="var(--font-montserrat)"
              _hover={{ color: "#E6C88D", textDecoration: "none" }}
            >
              GOE
            </Link>
            <NavLink>EgyBook</NavLink>
            <NavLink>EgyExplore</NavLink>
            <NavLink>EgyTales</NavLink>
            <NavLink>EgyTreasure</NavLink>
          </HStack>

          {/* Right Side Actions */}
          <HStack
            spacing={6}
            flex={1}
            justify="flex-end"
            opacity={isSearchOpen ? 0.3 : 1}
            transition="all 0.3s ease-in-out"
            transform={isSearchOpen ? "translateX(100px)" : "translateX(0)"}
          >
            {/* Language Switcher */}
            <HStack spacing={2}>
              <IconButton
                aria-label="Switch language"
                icon={<LuGlobe size={20} />}
                variant="ghost"
                size="md"
                color="white"
                _hover={{
                  bg: "transparent",
                  color: "#E6C88D",
                }}
              />
              <Text
                fontSize="lg"
                color="white"
                fontFamily="var(--font-montserrat)"
              >
                EN
              </Text>
            </HStack>

            {/* Login/Signup Buttons */}
            <Button variant="sunny" size="lg">
              Login
            </Button>
            <Button variant="sunny" size="lg">
              Sign up
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
