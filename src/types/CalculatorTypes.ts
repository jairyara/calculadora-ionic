export type UseCalculator = {
    input: string;
    result: string;
    handleInput: (value: string) => void;
    calculateResult: () => void;
    handleReset: () => void;
    handleDelete: () => void;
    handleEqual: () => void;
    handleTrigFunction: (fn: string) => void;
}