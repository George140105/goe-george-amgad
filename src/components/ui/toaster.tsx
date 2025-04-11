"use client";

import {
  Portal,
  Spinner,
  Stack,
  Toast,
  useToast,
  createStandaloneToast,
} from "@chakra-ui/react";

export const { ToastContainer, toast } = createStandaloneToast();

export const Toaster = () => {
  return (
    <Portal>
      <ToastContainer />
    </Portal>
  );
};
