import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { LuCalendar } from "react-icons/lu";
import { Calendar } from "./Calendar";

interface DateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (startDate: Date, endDate: Date) => void;
}

export function DateRangePicker({
  startDate = new Date(),
  endDate = new Date(),
  onChange,
}: DateRangePickerProps) {
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);
  const [activeButton, setActiveButton] = useState<"start" | "end" | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Update internal state when props change
  useEffect(() => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  }, [startDate, endDate]);

  const handleDateSelect = (date: Date) => {
    if (activeButton === "start") {
      if (date > selectedEndDate) {
        setSelectedStartDate(date);
        setSelectedEndDate(date);
      } else {
        setSelectedStartDate(date);
      }
    } else if (activeButton === "end") {
      if (date < selectedStartDate) {
        setSelectedEndDate(date);
        setSelectedStartDate(date);
      } else {
        setSelectedEndDate(date);
      }
    }
    onChange?.(selectedStartDate, selectedEndDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleButtonClick = (button: "start" | "end") => {
    setActiveButton(button);
    onOpen();
  };

  return (
    <HStack spacing={2} width="100%">
      <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
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
            onClick={() => handleButtonClick("start")}
            leftIcon={<Icon as={LuCalendar} color="#D4B36A" />}
            width="100%"
            justifyContent="flex-start"
            border="none"
            bg="transparent"
            _focus={{ boxShadow: "none" }}
          >
            {formatDate(selectedStartDate)}
          </Button>
        </PopoverTrigger>
        <PopoverContent width="auto" bg="#333333" border="none" zIndex={20}>
          <PopoverBody p={4}>
            <Calendar
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              onChange={handleDateSelect}
              minDate={activeButton === "end" ? selectedStartDate : undefined}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Text color="white" mx={2}>
        -
      </Text>

      <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
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
            onClick={() => handleButtonClick("end")}
            leftIcon={<Icon as={LuCalendar} color="#D4B36A" />}
            width="100%"
            justifyContent="flex-start"
            border="none"
            bg="transparent"
            _focus={{ boxShadow: "none" }}
          >
            {formatDate(selectedEndDate)}
          </Button>
        </PopoverTrigger>
      </Popover>
    </HStack>
  );
}
