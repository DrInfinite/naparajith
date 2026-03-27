/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import type { ChangeEvent } from "react";

export default function RangeInput({
    min,
    max,
    setMin,
    setMax,
}: {
    min: number;
    max: number;
    setMin: React.Dispatch<React.SetStateAction<number>>;
    setMax: React.Dispatch<React.SetStateAction<number>>;
}) {
    function handleMinChange(e: ChangeEvent<HTMLInputElement>) {
        setMin(Number(e.target.value));
    }

    function handleMaxChange(e: ChangeEvent<HTMLInputElement>) {
        setMax(Number(e.target.value));
    }

    return (
        <div className="space-y-4">
            <label className="flex flex-col justify-evenly">
                Lower Limit
                <input type="number" value={min} onChange={handleMinChange} />
            </label>
            <label className="flex flex-col justify-evenly">
                Upper Limit
                <input type="number" value={max} onChange={handleMaxChange} />
            </label>
        </div>
    );
}
