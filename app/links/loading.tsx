import { SlashIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Loading...',
};

export default function Loading() {
    return (
        <div className="bg-grid-white/[0.02] relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
            <div className="relative z-10 mx-auto grid w-full max-w-7xl place-items-center  p-4 pt-20 md:pt-0">
                <SlashIcon
                    height={128}
                    width={128}
                    className="animate-spin text-primary"
                />
            </div>
        </div>
    );
}
