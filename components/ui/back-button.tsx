'use client';

import { cn } from '@naparajith/tailwind-helpers';
import { Slot } from '@radix-ui/react-slot';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { ButtonProps, buttonVariants } from './button';

const BackButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const router = useRouter();
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                onClick={() => router.back()}
                {...props}
            />
        );
    }
);
BackButton.displayName = 'BackButton';

export { BackButton };
