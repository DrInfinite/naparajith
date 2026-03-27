/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

export default function DisplayGeneratedNumber({
    randomNumber,
    count,
}: {
    randomNumber: number | null;
    count: number;
}) {
    return (
        <div className="flex flex-col gap-4">
            <span>Generated Number: {randomNumber}</span>
            <span>Generation Count: {count}</span>
        </div>
    );
}
