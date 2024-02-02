import { Spotlight } from "@/components/spotlight";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Loading...",
};

export default function Loading() {
    return (
        <div className="bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="orange"
            />
            <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
                <h1 className="bg-primary bg-opacity-50 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                    Loading...
                </h1>
            </div>
        </div>
    );
}
