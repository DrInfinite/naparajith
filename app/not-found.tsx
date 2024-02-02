import { BackButton } from "@/components/ui/back-button";
import { Boxes } from "../components/background-boxes";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "Page not found" },
    description: "The page that you are looking for is not found.",
};

export default function NotFound() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-background [mask-image:radial-gradient(transparent,white)]" />

            <Boxes />
            <h1
                className={cn(
                    "relative z-20 text-4xl text-foreground md:text-9xl",
                )}
            >
                404
            </h1>
            <p className="relative z-20 mt-2 text-center text-foreground">
                The page that you are looking for is not here.
            </p>
            <BackButton
                className="relative z-20 mt-2"
                // onClick={() => router.back()}
            >
                Go Back
            </BackButton>
        </div>
    );
}
