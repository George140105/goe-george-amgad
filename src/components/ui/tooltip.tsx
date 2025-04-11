import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface TooltipProps extends Omit<ChakraTooltipProps, "children"> {
  children: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const { children, ...rest } = props;

    return (
      <ChakraTooltip ref={ref} {...rest}>
        {children}
      </ChakraTooltip>
    );
  }
);
