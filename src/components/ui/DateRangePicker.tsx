import { useState } from "react";
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
  const [isSelectingStart, setIsSelectingStart] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDateSelect = (date: Date) => {
    if (isSelectingStart) {
      setSelectedStartDate(date);
      setIsSelectingStart(false);
    } else {
      if (date < selectedStartDate) {
        setSelectedStartDate(date);
        setSelectedEndDate(selectedStartDate);
      } else {
        setSelectedEndDate(date);
        onChange?.(selectedStartDate, date);
        onClose();
      }
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
      <PopoverTrigger>
        <Button
          variant="outline"
          colorScheme="whiteAlpha"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          onClick={onOpen}
          leftIcon={<Icon as={LuCalendar} color="#D4B36A" />}
          width="100%"
          justifyContent="flex-start"
          border="none"
          bg="transparent"
          _focus={{ boxShadow: "none" }}
        >
          {formatDate(selectedStartDate)} - {formatDate(selectedEndDate)}
        </Button>
      </PopoverTrigger>
      <PopoverContent width="auto" bg="#333333" border="none">
        <PopoverBody p={4}>
          <VStack spacing={4}>
            <Text color="#D4B36A" fontSize="sm">
              {isSelectingStart
                ? "Select check-in date"
                : "Select check-out date"}
            </Text>
            <Calendar
              value={isSelectingStart ? selectedStartDate : selectedEndDate}
              onChange={handleDateSelect}
              minDate={isSelectingStart ? new Date() : selectedStartDate}
            />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
