import { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { LuMapPin } from "react-icons/lu";

const CITIES = [
  { name: "Cairo", description: "City in Egypt" },
  { name: "Alexandria", description: "City in Egypt" },
  { name: "Hurghada", description: "City in Egypt" },
  { name: "Luxor", description: "City in Egypt" },
];

interface SearchBoxProps {
  isSearchOpen: boolean;
  onSearchOpen: (isOpen: boolean) => void;
  placeholder?: string;
  value?: string;
  icon?: string;
  onChange?: (value: string) => void;
}

export function SearchBox({
  isSearchOpen,
  onSearchOpen,
  placeholder = "",
  value = "",
  icon,
  onChange,
}: SearchBoxProps) {
  const [searchValue, setSearchValue] = useState(value);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);
  console.log(icon);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        onSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, onSearchOpen]);

  const filteredCities = CITIES.filter(
    (city) =>
      searchValue === "" ||
      city.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  const handleSearchClick = () => {
    onSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onChange?.(newValue);
  };

  const handleCitySelect = (cityName: string) => {
    setSearchValue(cityName);
    if (onChange) {
      onChange(cityName);
    }
    onSearchOpen(false);
  };

  return (
    <Flex align="center" ref={searchContainerRef} position="relative">
      <HStack spacing={4} width="full">
        {!isSearchOpen && (
          <IconButton
            aria-label="Search"
            icon={icon === "location" ? <LuMapPin /> : <SearchIcon />}
            variant="ghost"
            size="md"
            onClick={handleSearchClick}
            color="#D4B36A"
            bg={icon === "search" ? "#333333" : undefined}
            borderRadius="full"
            _hover={{
              bg: "#404040",
              color: "#E6C88D",
            }}
            w="40px"
            h="40px"
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
              {icon === "location" ? (
                <LuMapPin color="#D4B36A" />
              ) : (
                <SearchIcon color="#D4B36A" />
              )}
            </InputLeftElement>
            <Input
              ref={searchInputRef}
              placeholder={placeholder}
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
              zIndex={50}
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
                    onClick={() => handleCitySelect(city.name)}
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
                        <Icon as={LuMapPin} color="#D4B36A" boxSize={5} />
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
        {!isSearchOpen && (
          <Text
            color="#D4B36A"
            fontSize="md"
            ml={2}
            cursor="pointer"
            onClick={handleSearchClick}
          >
            {placeholder}
          </Text>
        )}
      </HStack>
    </Flex>
  );
}
