import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero Variant - Premium look ke liye colors ko clean rakha hai
        hero: "bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]",
        heroOutline: "border-2 border-slate-700 bg-transparent text-foreground font-bold hover:border-primary hover:text-primary hover:bg-primary/5",
        nav: "bg-primary text-primary-foreground font-medium hover:bg-primary/90 rounded-full px-6",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm font-medium rounded-md",
        sm: "h-9 px-3 text-xs rounded-sm",
        // UPDATED LG SIZE: Balance aur readability ke liye text thoda bada aur tracking adjust ki hai
        lg: "h-16 px-10 text-lg font-bold min-w-[220px] rounded-xl uppercase tracking-[0.15em] leading-none",
        icon: "h-10 w-10 rounded-md",
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