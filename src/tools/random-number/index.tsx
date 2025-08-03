import { useState, useEffect } from "react";
import RangeInput from "@/tools/random-number/range-input.tsx";
import DisplayGeneratedNumber from "@/tools/random-number/display-generated-number.tsx";

export default function RandomNumber() {
	const [min, setMin] = useState<number>(0);
	const [max, setMax] = useState<number>(100);
	const [randomNumber, setRandomNumber] = useState<number | null>(null);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		const localMin = localStorage.getItem("min");
		const localMax = localStorage.getItem("max");
		const localRandomNumber = localStorage.getItem("randomNumber");
		const localCount = localStorage.getItem("count");

		if (localMin !== null) setMin(Number(localMin));
		if (localMax !== null) setMax(Number(localMax));
		if (localRandomNumber !== null) setRandomNumber(Number(localRandomNumber));
		if (localCount !== null) setCount(Number(localCount));
	}, []);

	useEffect(() => {
		localStorage.setItem("min", min.toString());
		localStorage.setItem("max", max.toString());
		localStorage.setItem("count", count.toString());

		if (randomNumber !== null) {
			localStorage.setItem("randomNumber", randomNumber.toString());
		} else {
			localStorage.removeItem("randomNumber");
		}
	}, [min, max, randomNumber, count]);

	function generateRandomNumber({ min, max }: { min: number; max: number }) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function generate() {
		if (min >= max) {
			alert("Min value should be less than Max value");
			return;
		}

		const number = generateRandomNumber({ min, max });
		setRandomNumber(number);
		setCount((prev) => prev + 1);
	}

	return (
		<div className="space-y-4">
			<RangeInput min={min} max={max} setMin={setMin} setMax={setMax} />
			<button type="button" onClick={generate} title="Generate Random Number">
				Generate
			</button>
			<DisplayGeneratedNumber randomNumber={randomNumber} count={count} />
		</div>
	);
}
