import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

const paragraphVariants = cva("mb-3 text-foreground", {
  variants: {
    align: {
      left: "text-left rtl:text-right",
      right: "text-right rtl:text-left",
      center: "text-center",
    },
  },
  defaultVariants: { align: "left" },
});

export interface ParagraphProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    VariantProps<typeof paragraphVariants> {}

const P = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, align, ...props }, ref) => {
    return (
      <p
        className={cn(paragraphVariants({ align, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <code></code>
      </p>
    );
  },
);
P.displayName = "P";

export { P, paragraphVariants };
