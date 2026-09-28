import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary via-[hsl(var(--glow))] to-accent bg-[length:200%_100%] bg-left text-white shadow-[inset_0_1px_0_hsl(0_0%_100%/0.25),0_10px_30px_-10px_hsl(var(--glow)/0.7)] hover:-translate-y-0.5 hover:bg-right hover:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.3),0_16px_44px_-10px_hsl(var(--accent)/0.8)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/15 bg-white/[0.03] text-foreground hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07]",
        secondary:
          "border border-border bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/70",
        ghost: "text-foreground/80 hover:bg-white/[0.06] hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
