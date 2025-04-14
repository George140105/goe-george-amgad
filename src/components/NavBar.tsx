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
  VStack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  LuGlobe,
  LuMapPin,
  LuHeart,
  LuShoppingCart,
  LuUser,
  LuSettings,
  LuUsers,
  LuPackage,
} from "react-icons/lu";
import Image from "next/image";
import { useSession } from "~/hooks/useSession";
interface NavLinkProps extends LinkProps {
  children: string;
}

const CITIES = [
  { name: "Cairo", description: "City in Egypt" },
  { name: "Alexandria", description: "City in Egypt" },
  { name: "Hurghada", description: "City in Egypt" },
  { name: "Luxor", description: "City in Egypt" },
];

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
  const [searchValue, setSearchValue] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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

  const filteredCities = CITIES.filter(
    (city) =>
      searchValue === "" ||
      city.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

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
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsSearchOpen(false);
              setSearchValue("");
            }
          }}
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

            <Flex align="center" ref={searchContainerRef} position="relative">
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
                  {isSearchOpen && (
                    <Box
                      position="absolute"
                      top="100%"
                      left="0"
                      width="300px"
                      bg="#333333"
                      borderRadius="md"
                      mt={2}
                      py={2}
                      boxShadow="lg"
                      zIndex={2}
                    >
                      <Text px={4} py={2} color="#D4B36A" fontSize="sm">
                        {searchValue === "" ? "Most popular" : "Locations"}
                      </Text>
                      <VStack align="stretch" spacing={1}>
                        {filteredCities.map((city) => (
                          <Box
                            key={city.name}
                            px={4}
                            py={2}
                            _hover={{ bg: "#404040" }}
                            cursor="pointer"
                          >
                            <HStack spacing={3}>
                              <Box
                                bg="white"
                                p={2}
                                borderRadius="md"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Icon
                                  as={LuMapPin}
                                  color="#D4B36A"
                                  boxSize={5}
                                />
                              </Box>
                              <Box>
                                <Text color="white" fontSize="md">
                                  {city.name}
                                </Text>
                                <Text color="gray.400" fontSize="xs">
                                  {city.description}
                                </Text>
                              </Box>
                            </HStack>
                          </Box>
                        ))}
                      </VStack>
                      <Box
                        px={4}
                        py={2}
                        borderTop="1px solid"
                        borderColor="gray.600"
                        mt={2}
                      >
                        <Link
                          color="#D4B36A"
                          fontSize="sm"
                          display="flex"
                          alignItems="center"
                          _hover={{ color: "#E6C88D" }}
                        >
                          See all results for "{searchValue}"
                          <Box as="span" ml="auto">
                            →
                          </Box>
                        </Link>
                      </Box>
                    </Box>
                  )}
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
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
