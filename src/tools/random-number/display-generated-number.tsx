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
