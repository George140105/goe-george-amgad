import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Icon,
} from "@chakra-ui/react";
import { LuUsers } from "react-icons/lu";
import { FiMinus, FiPlus } from "react-icons/fi";

interface TravelersSelectProps {
  onChange?: (adults: number, children: number, rooms: number) => void;
}

export function TravelersSelect({ onChange }: TravelersSelectProps) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleChange = (
    type: "adults" | "children" | "rooms",
    value: number
  ) => {
    switch (type) {
      case "adults":
        if (value >= 1 && value <= 10) setAdults(value);
        break;
      case "children":
        if (value >= 0 && value <= 10) setChildren(value);
        break;
      case "rooms":
        if (value >= 1 && value <= 5) setRooms(value);
        break;
    }
    onChange?.(adults, children, rooms);
  };

  const formatText = () => {
    const parts = [];
    if (adults) parts.push(`${adults} Adult${adults !== 1 ? "s" : ""}`);
    if (children) parts.push(`${children} Child${children !== 1 ? "ren" : ""}`);
    if (rooms) parts.push(`${rooms} Room${rooms !== 1 ? "s" : ""}`);
    return parts.join(", ");
  };

  const CounterButton = ({
    label,
    subLabel,
    value,
    onIncrement,
    onDecrement,
  }: {
    label: string;
    subLabel?: string;
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }) => (
    <HStack justify="space-between" width="100%" py={2}>
      <VStack align="start" spacing={0}>
        <Text color="white" fontSize="lg" fontWeight="medium">
          {label}
        </Text>
        {subLabel && (
          <Text color="gray.400" fontSize="sm">
            {subLabel}
          </Text>
        )}
      </VStack>
      <HStack spacing={4}>
        <IconButton
          aria-label={`Decrease ${label}`}
          icon={<FiMinus />}
          onClick={onDecrement}
          variant="ghost"
          color="#D4B36A"
          borderRadius="full"
          size="sm"
          border="2px solid"
          borderColor="gray.600"
          _hover={{ bg: "whiteAlpha.100" }}
        />
        <Text
          color="white"
          fontSize="lg"
          fontWeight="medium"
          minW="8"
          textAlign="center"
        >
          {value}
        </Text>
        <IconButton
          aria-label={`Increase ${label}`}
          icon={<FiPlus />}
          onClick={onIncrement}
          variant="ghost"
          color="#D4B36A"
          borderRadius="full"
          size="sm"
          border="2px solid"
          borderColor="gray.600"
          _hover={{ bg: "whiteAlpha.100" }}
        />
      </HStack>
    </HStack>
  );

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          _hover={{
            bg: "transparent",
            textDecoration: "underline",
            textDecorationColor: "white",
          }}
          leftIcon={<Icon as={LuUsers} color="#D4B36A" />}
          width="100%"
          justifyContent="flex-start"
          border="none"
          bg="transparent"
          _focus={{ boxShadow: "none" }}
        >
          {formatText()}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width="350px"
        bg="#333333"
        border="none"
        borderRadius="2xl"
        boxShadow="xl"
      >
        <PopoverBody p={6}>
          <VStack spacing={4} align="stretch">
            <CounterButton
              label="Adults"
              subLabel="Age 18 or above"
              value={adults}
              onIncrement={() => handleChange("adults", adults + 1)}
              onDecrement={() => handleChange("adults", adults - 1)}
            />
            <CounterButton
              label="Children"
              subLabel="Under 18"
              value={children}
              onIncrement={() => handleChange("children", children + 1)}
              onDecrement={() => handleChange("children", children - 1)}
            />
            <CounterButton
              label="Rooms"
              value={rooms}
              onIncrement={() => handleChange("rooms", rooms + 1)}
              onDecrement={() => handleChange("rooms", rooms - 1)}
            />
            <Text color="gray.400" fontSize="sm" mt={2}>
              You can search for up to 16 travelers
            </Text>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
