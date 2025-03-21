
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        moss: "bg-moss text-white hover:bg-moss-dark shadow-sm",
        sage: "bg-sage text-moss-dark hover:bg-sage-dark shadow-sm",
        soil: "bg-soil text-white hover:bg-soil-dark shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

// Add these CSS variables to be used in the global stylesheet
// This is done as a string to be imported, not as a JSX style element
const buttonCustomCssVars = `
  :root {
    --primary-color: #4ade80;
    --primary-foreground-color: #064e3b;
    --primary-hover-color: rgba(74, 222, 128, 0.9);
    
    --moss-color: #2d3b36;
    --moss-dark-color: #1a2421;
    --moss-light-color: #3a4d44;
    
    --sage-color: #94a3a1;
    --sage-dark-color: #7a8a88;
    
    --soil-color: #8b5a2b;
    --soil-dark-color: #704618;
  }
`;

export { buttonVariants, buttonCustomCssVars };
