import { cn, variants, type VariantProps } from "@naparajith/tailwind-helpers";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

const paragraphVariants = variants("mb-3 text-foreground", {
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
