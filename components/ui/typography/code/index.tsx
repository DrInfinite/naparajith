import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

const codeVariants = cva(
    "font-mono border mb-3 text-primary bg-primary-foreground p-1 rounded font-semibold",
    {
        variants: {
            variant: {
                default: "text-primary bg-primary/20 border-primary",
                secondary: "text-secondary bg-secondary/20 border-secondary",
                accent: "text-accent bg-accent-foreground",
                destructive: "text-destructive bg-destructive-foreground",
            },
            size: { small: "text-sm", default: "text-md", large: "text-xl" },
        },
        defaultVariants: { variant: "default", size: "default" },
    },
);

export interface CodeProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
        VariantProps<typeof codeVariants> {}

const Code = React.forwardRef<HTMLElement, CodeProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <code
                className={cn(codeVariants({ className }))}
                ref={ref}
                {...props}
            >
                {children}
            </code>
        );
    },
);
Code.displayName = "Code";

export { Code, codeVariants };
