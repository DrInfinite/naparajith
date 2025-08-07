import { useEffect, useState, type ChangeEvent } from "react";

const baseOptions = [
    { label: "Binary (Base 2)", value: 2 },
    { label: "Ternary (Base 3)", value: 3 },
    { label: "Quaternary (Base 4)", value: 4 },
    { label: "Quinary (Base 5)", value: 5 },
    { label: "Senary (Base 6)", value: 6 },
    { label: "Septenary (Base 7)", value: 7 },
    { label: "Octal (Base 8)", value: 8 },
    { label: "Nonary (Base 9)", value: 9 },
    { label: "Decimal (Base 10)", value: 10 },
    { label: "Undecimal (Base 11)", value: 11 },
    { label: "Duodecimal (Base 12)", value: 12 },
    { label: "Tridecimal (Base 13)", value: 13 },
    { label: "Tetradecimal (Base 14)", value: 14 },
    { label: "Pentadecimal (Base 15)", value: 15 },
    { label: "Hexadecimal (Base 16)", value: 16 },
];

export default function NumberConverter() {
    const [input, setInput] = useState("");
    const [base, setBase] = useState(10);
    const [target, setTarget] = useState(2);

    useEffect(() => {
        localStorage.setItem("input", input);
        localStorage.setItem("base", base.toString());
        localStorage.setItem("target", target.toString());
    }, [input, base, target]);

    useEffect(() => {
        const localInput = localStorage.getItem("input");
        const localBase = localStorage.getItem("base");
        const localTarget = localStorage.getItem("target");

        if (localInput) setInput(localInput);
        if (localBase) setBase(Number(localBase));
        if (localTarget) setTarget(Number(localTarget));
    }, []);

    const getLabelForBase = (base: number) =>
        baseOptions.find((opt) => opt.value === base)?.label || "";

    const handleInputBaseChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newBase = parseInt(e.target.value, 10); // always parse select values as base 10
        setBase(newBase);
    };

    const handleTargetBaseChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newTarget = parseInt(e.target.value, 10);
        setTarget(newTarget);
    };

    const handleSwapBases = () => {
        setBase(target);
        setTarget(base);
        setInput((prev) => {
            const parsed = parseInt(prev, base);
            if (isNaN(parsed)) return "";
            return parsed.toString(target).toUpperCase();
        });
    };

    // Safely convert input from `base` to `target`
    let converted = "";

    const baseConverter = (input: string, base: number, target: number) => {
        try {
            if (input.trim() !== "") {
                const num = parseInt(input.trim(), base);
                if (!isNaN(num)) {
                    return num.toString(target).toUpperCase();
                }
            }
        } catch {
            // return "";
        }
        return "";
    };

    converted = baseConverter(input, base, target)!;

    return (
        <main>
            <form className="space-y-4">
                {/* Input Field + Input Base Dropdown */}
                <div>
                    <label className="flex flex-col justify-evenly">
                        {getLabelForBase(base)
                            .replace(/\s*\(.*?\)\s*/g, "")
                            .trim() + " Number"}
                        <span className="flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={`Enter a ${getLabelForBase(base)} number`}
                                className="w-full flex-1 rounded-none border border-border bg-background px-3 py-2 text-foreground placeholder-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                            <select
                                value={base}
                                onChange={handleInputBaseChange}
                                className="ml-2 cursor-pointer rounded-none border border-border bg-background px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                {baseOptions.map((opt) => (
                                    <option
                                        key={opt.value}
                                        value={opt.value}
                                        disabled={opt.value === target}
                                    >
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </label>
                </div>

                <button
                    type="button"
                    onClick={handleSwapBases}
                    title="Swap bases"
                >
                    Swap
                </button>

                {/* Target Base Dropdown */}
                <div>
                    <label className="flex flex-col justify-evenly">
                        {"Converted " +
                            getLabelForBase(target)
                                .replace(/\s*\(.*?\)\s*/g, "")
                                .trim() +
                            " Number"}
                        <span className="flex items-center">
                            <input
                                type="text"
                                value={converted}
                                placeholder={`Converted ${getLabelForBase(target)} number`}
                                className="w-full flex-1 rounded-none border border-border bg-background px-3 py-2 text-foreground placeholder-muted shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                disabled
                            />
                            <select
                                value={target}
                                onChange={handleTargetBaseChange}
                                className="ml-2 cursor-pointer rounded-none border border-border bg-background px-3 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                {baseOptions.map((opt) => (
                                    <option
                                        key={opt.value}
                                        value={opt.value}
                                        disabled={opt.value === base}
                                    >
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </label>
                </div>
            </form>
        </main>
    );
}
