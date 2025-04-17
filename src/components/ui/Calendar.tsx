import { useState } from "react";
import {
  Box,
  Grid,
  Text,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

interface CalendarProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  onClose?: () => void;
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
  startDate = new Date(),
  endDate = new Date(),
  onChange,
  minDate,
  maxDate,
  onClose,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(startDate);
  const showTwoMonths = useBreakpointValue({ base: false, md: true });

  // Get today's date at the start of the day for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
  };

  const isDateInRange = (date: Date) => {
    return date > startDate && date < endDate;
  };

  const isStartDate = (date: Date) => {
    return (
      date.getDate() === startDate.getDate() &&
      date.getMonth() === startDate.getMonth() &&
      date.getFullYear() === startDate.getFullYear()
    );
  };

  const isEndDate = (date: Date) => {
    return (
      date.getDate() === endDate.getDate() &&
      date.getMonth() === endDate.getMonth() &&
      date.getFullYear() === endDate.getFullYear()
    );
  };

  const isDateDisabled = (date: Date) => {
    if (date < today) return true; // Disable dates before today
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  );
  const currentMonthDays = getDaysInMonth(currentDate);
  const nextMonthDays = getDaysInMonth(nextMonth);

  const renderMonth = (date: Date, days: (Date | null)[]) => (
    <VStack spacing={4} width="100%">
      <Text color="white" fontWeight="bold" textAlign="center">
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </Text>
      <Grid templateColumns="repeat(7, 1fr)" gap={1} width="100%">
        {DAYS.map((day) => (
          <Text
            key={day}
            textAlign="center"
            color="white"
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
            cursor={date && !isDateDisabled(date) ? "pointer" : "not-allowed"}
            opacity={date ? 1 : 0}
            position="relative"
            bg={
              date && (isStartDate(date) || isEndDate(date))
                ? "#EBDDBD"
                : date && isDateInRange(date)
                ? "#EBDDBD"
                : "transparent"
            }
            color={
              date && (isStartDate(date) || isEndDate(date))
                ? "white"
                : date && isDateInRange(date)
                ? "#D4B36A"
                : date && isDateDisabled(date)
                ? "gray.500"
                : "white"
            }
            textDecoration={
              date && isDateDisabled(date) ? "line-through" : "none"
            }
            borderRadius="md"
            overflow="hidden"
            _hover={
              date && !isDateDisabled(date)
                ? {
                    bg:
                      isDateInRange(date) ||
                      isStartDate(date) ||
                      isEndDate(date)
                        ? "#EBDDBD"
                        : "whiteAlpha.200",
                  }
                : {}
            }
            onClick={() =>
              date && !isDateDisabled(date) && handleDateClick(date)
            }
          >
            {date && (isStartDate(date) || isEndDate(date)) && (
              <Box
                position="absolute"
                inset="0"
                bg="#D4B36A"
                clipPath={
                  isStartDate(date)
                    ? "polygon(0 0, 100% 50%, 0 100%)"
                    : "polygon(0 50%, 100% 0, 100% 100%)"
                }
                zIndex={0}
              />
            )}
            <Box position="relative" zIndex={1}>
              {date?.getDate()}
            </Box>
          </Box>
        ))}
      </Grid>
    </VStack>
  );

  const handleCalendarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <VStack
      spacing={4}
      width="100%"
      p={4}
      borderRadius="md"
      onClick={handleCalendarClick}
      position="relative"
    >
      {onClose && (
        <IconButton
          aria-label="Close calendar"
          icon={<LuX />}
          variant="ghost"
          color="#D4B36A"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          size="sm"
          position="absolute"
          top={2}
          right={2}
          zIndex={1}
        />
      )}
      <HStack justify="space-between" width="100%">
        <IconButton
          aria-label="Previous month"
          icon={<LuChevronLeft />}
          variant="ghost"
          color="#D4B36A"
          onClick={(e) => {
            e.stopPropagation();
            handlePrevMonth();
          }}
        />
        <HStack spacing={8} width="100%">
          {renderMonth(currentDate, currentMonthDays)}
          {showTwoMonths && renderMonth(nextMonth, nextMonthDays)}
        </HStack>
        <IconButton
          aria-label="Next month"
          icon={<LuChevronRight />}
          variant="ghost"
          color="#D4B36A"
          onClick={(e) => {
            e.stopPropagation();
            handleNextMonth();
          }}
        />
      </HStack>
    </VStack>
  );
}
