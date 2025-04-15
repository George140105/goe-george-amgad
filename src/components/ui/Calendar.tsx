import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Text,
  VStack,
  HStack,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function Calendar({
  value = new Date(),
  onChange,
  minDate,
  maxDate,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateClick = (date: Date) => {
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;
    onChange?.(date);
    onClose();
  };

  const isDateSelected = (date: Date) => {
    return (
      date.getDate() === value.getDate() &&
      date.getMonth() === value.getMonth() &&
      date.getFullYear() === value.getFullYear()
    );
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
      <PopoverTrigger>
        <Button
          variant="outline"
          colorScheme="whiteAlpha"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          onClick={onOpen}
        >
          {value.toLocaleDateString()}
        </Button>
      </PopoverTrigger>
      <PopoverContent width="300px" bg="#333333" border="none">
        <PopoverBody p={4}>
          <VStack spacing={4}>
            <HStack justify="space-between" width="100%">
              <IconButton
                aria-label="Previous month"
                icon={<LuChevronLeft />}
                variant="ghost"
                color="#D4B36A"
                onClick={handlePrevMonth}
              />
              <Text color="#D4B36A" fontWeight="bold">
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
              </Text>
              <IconButton
                aria-label="Next month"
                icon={<LuChevronRight />}
                variant="ghost"
                color="#D4B36A"
                onClick={handleNextMonth}
              />
            </HStack>
            <Grid templateColumns="repeat(7, 1fr)" gap={1} width="100%">
              {DAYS.map((day) => (
                <Text
                  key={day}
                  textAlign="center"
                  color="#D4B36A"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {day}
                </Text>
              ))}
              {days.map((date, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  p={2}
                  cursor={date ? "pointer" : "default"}
                  opacity={date ? 1 : 0}
                  bg={date && isDateSelected(date) ? "#D4B36A" : "transparent"}
                  color={
                    date && isDateSelected(date)
                      ? "black"
                      : date && isDateDisabled(date)
                      ? "gray.500"
                      : "white"
                  }
                  borderRadius="md"
                  _hover={
                    date && !isDateDisabled(date)
                      ? {
                          bg: isDateSelected(date)
                            ? "#D4B36A"
                            : "whiteAlpha.200",
                        }
                      : {}
                  }
                  onClick={() => date && handleDateClick(date)}
                >
                  {date?.getDate()}
                </Box>
              ))}
            </Grid>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
