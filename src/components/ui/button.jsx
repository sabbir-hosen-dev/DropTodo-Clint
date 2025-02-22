import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer  justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary  text-primary-foreground shadow-sm hover:bg-primary/90", // GitHub's primary button
        destructive:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-border border-input bg-transparent shadow-sm hover:bg-red-300 hover:text-red-600",// GitHub's destructive button
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground", // GitHub's outline button
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", // GitHub's secondary button
        ghost: "hover:bg-accent hover:text-accent-foreground", // GitHub's ghost button
        link: "text-primary underline-offset-4 hover:underline", // GitHub's link button
      },
      size: {
        default: "h-9 px-4 py-2", // Default size
        sm: "h-8 rounded-md px-3 text-xs", // Small size
        lg: "h-10 rounded-md px-8", // Large size
        icon: "h-9 w-9", // Icon button
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };