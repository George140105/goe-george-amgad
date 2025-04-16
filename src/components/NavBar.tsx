"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  HStack,
  Text,
  Link,
  LinkProps,
  VStack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  LuGlobe,
  LuHeart,
  LuShoppingCart,
  LuUser,
  LuSettings,
  LuUsers,
  LuPackage,
  LuMenu,
} from "react-icons/lu";
import Image from "next/image";
import { useSession } from "~/hooks/useSession";
import { SearchBox } from "./ui/SearchBox";

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
  const { isAuthenticated, logout, setUsername } = useSession();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    setUsername("George");
  };

  const handleLogout = () => {
    logout();
  };

  const profileMenu = [
    { label: "My profile", icon: LuUser },
    { label: "Saved bundles", icon: LuPackage },
    { label: "Invite friends", icon: LuUsers },
    { label: "Settings", icon: LuSettings },
    { label: "Log out", icon: LuUser, color: "#FF5A5A" },
  ];

  const navigationLinks = [
    { label: "GOE", href: "#", color: "#D4B36A" },
    { label: "EgyBook", href: "#" },
    { label: "EgyExplore", href: "#" },
    { label: "EgyTales", href: "#" },
    { label: "EgyTreasure", href: "#" },
  ];

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
          zIndex={9998}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsSearchOpen(false);
            }
          }}
        />
      )}
      <Box
        as="nav"
        position="sticky"
        top="0"
        zIndex={9999}
        bg="black"
        color="white"
        boxShadow="sm"
        py={2}
        px={{ base: 4, md: 8, lg: 16 }}
        fontFamily="var(--font-montserrat)"
        width="100%"
      >
        <Flex
          justify="space-between"
          align="center"
          maxW="1400px"
          mx="auto"
          width="100%"
        >
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

            <SearchBox
              icon="search"
              isSearchOpen={isSearchOpen}
              onSearchOpen={setIsSearchOpen}
            />
          </HStack>

          {/* Navigation Links - Desktop */}
          <HStack
            spacing={12}
            justify="center"
            mr={8}
            opacity={isSearchOpen ? 0.3 : 1}
            transition="all 0.3s ease-in-out"
            transform={isSearchOpen ? "translateX(100px)" : "translateX(0)"}
            display={{ base: "none", md: "flex" }}
          >
            {navigationLinks.map((link) => {
              const [prefix, suffix] = link.label.split("Egy");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  color={link.color || "white"}
                  fontWeight="medium"
                  fontSize="lg"
                  fontFamily="var(--font-montserrat)"
                  _hover={{
                    color: link.color || "#E6C88D",
                    textDecoration: "none",
                  }}
                >
                  {prefix}
                  {suffix && (
                    <>
                      <Text as="span" color="#D4B36A">
                        Egy
                      </Text>
                      <Text as="span" color="white">
                        {suffix}
                      </Text>
                    </>
                  )}
                </Link>
              );
            })}
          </HStack>

          {/* Right Side Actions */}
          <HStack
            spacing={{ base: 2, md: 4, lg: 6 }}
            flex={{ base: "none", md: 1 }}
            justify="flex-end"
            opacity={isSearchOpen ? 0.3 : 1}
            transition="all 0.3s ease-in-out"
            transform={isSearchOpen ? "translateX(100px)" : "translateX(0)"}
          >
            {/* Language Switcher */}
            <HStack spacing={2} display={{ base: "none", md: "flex" }}>
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
              <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                EN
              </Text>
            </HStack>

            {isAuthenticated ? (
              <>
                <Box
                  height="24px"
                  width="1px"
                  bg="gray.600"
                  mx={2}
                  display={{ base: "none", md: "block" }}
                />
                <HStack spacing={4}>
                  <IconButton
                    aria-label="Favorites"
                    icon={<LuHeart size={24} />}
                    variant="ghost"
                    size="md"
                    color="white"
                    _hover={{
                      bg: "transparent",
                      color: "#E6C88D",
                    }}
                  />
                  <IconButton
                    aria-label="Shopping Cart"
                    icon={<LuShoppingCart size={24} />}
                    variant="ghost"
                    size="md"
                    color="white"
                    _hover={{
                      bg: "transparent",
                      color: "#E6C88D",
                    }}
                  />
                  <Popover
                    placement="bottom-end"
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                  >
                    <PopoverTrigger>
                      <Box
                        bg="white"
                        p={2.5}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        onClick={() => setIsProfileOpen((prev) => !prev)}
                      >
                        <Icon as={LuUser} color="#D4B36A" boxSize={6} />
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent
                      bg="white"
                      borderRadius="xl"
                      border="none"
                      boxShadow="lg"
                      width="200px"
                      mt={2}
                    >
                      <PopoverBody p={0}>
                        <VStack align="stretch" spacing={0}>
                          {profileMenu.map((item) => (
                            <Flex
                              key={item.label}
                              px={4}
                              py={3}
                              align="center"
                              cursor="pointer"
                              color={item.color || "black"}
                              _hover={{
                                color: item.color ?? "#D4B36A",
                              }}
                              transition="background 0.2s"
                              onClick={() => {
                                if (item.label === "Log out") {
                                  handleLogout();
                                }
                              }}
                            >
                              <Icon as={item.icon} boxSize={5} mr={3} />
                              <Text fontSize="md">{item.label}</Text>
                            </Flex>
                          ))}
                        </VStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </>
            ) : (
              <>
                <Button
                  variant="sunny"
                  size={{ base: "md", lg: "lg" }}
                  display={{ base: "none", md: "inline-flex" }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  variant="sunny"
                  size={{ base: "md", lg: "lg" }}
                  display={{ base: "none", md: "inline-flex" }}
                >
                  Sign up
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open menu"
              icon={<LuMenu size={24} />}
              variant="ghost"
              size="md"
              color="white"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              _hover={{
                bg: "transparent",
                color: "#E6C88D",
              }}
            />
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={4}>
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color={link.color || "white"}
                  fontWeight="medium"
                  fontSize="lg"
                  fontFamily="var(--font-montserrat)"
                  _hover={{
                    color: link.color || "#E6C88D",
                    textDecoration: "none",
                  }}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}

              {!isAuthenticated && (
                <VStack spacing={4} mt={4}>
                  <Button variant="sunny" width="100%" onClick={handleLogin}>
                    Login
                  </Button>
                  <Button variant="sunny" width="100%">
                    Sign up
                  </Button>
                </VStack>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
