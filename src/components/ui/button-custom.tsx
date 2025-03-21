
import React from "react";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary" | "success";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  withRipple?: boolean;
  children: React.ReactNode;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading = false, withRipple = true, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!withRipple || isLoading || props.disabled) return;
      
      const button = event.currentTarget;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = "absolute rounded-full bg-white/20 pointer-events-none animate-ripple";
      
      // Clean up old ripples
      const ripples = button.getElementsByClassName("animate-ripple");
      if (ripples.length >= 3) {
        button.removeChild(ripples[0]);
      }
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        if (button.contains(ripple)) {
          button.removeChild(ripple);
        }
      }, 800);
    };

    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      success: "bg-sage-dark text-white hover:bg-sage-dark/90 shadow-sm"
    };

    return (
      <ShadcnButton
        ref={ref || buttonRef}
        className={cn(
          "relative overflow-hidden transition-all transform",
          variant === "primary" && variantClasses.primary,
          variant === "success" && variantClasses.success,
          isLoading && "opacity-80 cursor-wait",
          className
        )}
        variant={variant === "primary" || variant === "success" ? "default" : variant}
        size={size}
        disabled={isLoading || props.disabled}
        onClick={(e) => {
          createRipple(e);
          props.onClick?.(e);
        }}
        {...props}
      >
        <span className={cn("flex items-center justify-center gap-2", isLoading && "opacity-0")}>
          {children}
        </span>
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        {withRipple && !isLoading && !props.disabled && (
          <style jsx>{`
            @keyframes ripple {
              to {
                transform: scale(4);
                opacity: 0;
              }
            }
            .animate-ripple {
              animation: ripple 0.8s ease-out forwards;
            }
          `}</style>
        )}
      </ShadcnButton>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
