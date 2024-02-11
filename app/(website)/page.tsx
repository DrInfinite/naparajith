'use client';

import { GoogleGeminiEffect } from '@/components/google-gemini-effect';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0.15, 1.2]
    );
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0.05, 1.2]
    );
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <>
            <div
                className="relative h-[400vh] w-full overflow-clip rounded-md pt-40 dark:border"
                ref={ref}
            >
                <GoogleGeminiEffect
                    title="Hello, I'm Naps"
                    description="I am a designer, software engineer and a CSE Undergrad from India"
                    pathLengths={[
                        pathLengthFirst,
                        pathLengthSecond,
                        pathLengthThird,
                        pathLengthFourth,
                        pathLengthFifth,
                    ]}
                />
            </div>
        </>
    );
}
