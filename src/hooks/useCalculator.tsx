import {useState} from 'react';
import {UseCalculator} from "@/types/CalculatorTypes";

export const useCalculator = (): UseCalculator => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');
    const [lastResult, setLastResult] = useState('');

    const handleInput = (value: string) => {
        if (lastResult !== "") {
            setInput(lastResult + value);
            setLastResult("");
            return;
        }
        setInput(input + value);
    }

    const calculateResult = () => {
        try {
            const calculatedResult = eval(input);
            const roundedResult = parseFloat(calculatedResult.toFixed(10));
            if (roundedResult === Infinity || roundedResult === -Infinity) {
                setResult("Error");
                setInput("");
                return;
            }
            setResult(roundedResult.toString());
        } catch (error) {
            setResult(result);
        }
    }

    const handleReset = () => {
        setInput('');
        setResult("0");
        setLastResult("");
    }

    const handleDelete = () => {
        setInput(input.slice(0, -1));
        if (input.length === 1) {
            setInput("");
            setResult("0");
            setLastResult("");
        }
    }

    const handleSqrt = () => {
        try {
            setInput(input + "√");
            const inputAfterSqrt = input.slice(-1);
            if (!isNaN(parseInt(inputAfterSqrt))) {
                const sqrtResult = Math.sqrt(parseFloat(input));
                setResult(sqrtResult.toString());
                return;
            }
        } catch (error) {
            setResult(result);
        }
    }

    const calculatePercentage = () => {
        try {
            setInput(input + "%");
            const inputAfterPercentage = input.slice(-1);
            if (!isNaN(parseInt(inputAfterPercentage))) {
                const percentageResult = parseFloat(input) / 100;
                setResult(percentageResult.toString());
                return;
            }
        } catch (error) {
            setResult(result);
        }
    };

    const handleEqual = () => {
        calculateResult();
        setLastResult(result);
        setInput("");
    }

    return {
        input,
        result,
        handleInput,
        calculateResult,
        handleReset,
        handleDelete,
        handleSqrt,
        calculatePercentage,
        handleEqual
    };

}


