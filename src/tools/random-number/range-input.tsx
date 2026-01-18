/**
 * This website is only meant to showcase the work and and skills of the author,
 * on a professional level. It also has a blog, containing the author's observations
 * and opinions on various topics. The views expressed are the author's own.
 * Copyright (C) 2026  T L Naparajith
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License Version 3 as published
 * by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/agpl-3.0.txt>.
 *
 * Contact me through electronic mail: <naparajith@duck.com>
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
                <input
                    type="number"
                    value={min}
                    onChange={handleMinChange}
                    className="w-full flex-1 rounded-none border border-border bg-background px-3 py-2 text-foreground placeholder-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
            </label>
            <label className="flex flex-col justify-evenly">
                Upper Limit
                <input
                    type="number"
                    value={max}
                    onChange={handleMaxChange}
                    className="w-full flex-1 rounded-none border border-border bg-background px-3 py-2 text-foreground placeholder-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
            </label>
        </div>
    );
}
