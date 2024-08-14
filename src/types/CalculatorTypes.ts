export type UseCalculator = {
    input: string;
    result: string;
    handleInput: (value: string) => void;
    calculateResult: () => void;
    handleReset: () => void;
    handleDelete: () => void;
    handleSqrt: () => void;
    calculatePercentage: () => void;
    handleEqual: () => void;
}