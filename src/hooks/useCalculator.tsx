import {useState} from 'react';

export const useCalculator = ():{
    result: string;
    handleReset: () => void;
    input: string;
    handleEqual: () => void;
    trigFunctions: (value: string) => void;
    handleInput: (value: string) => void;
    calculateResult: () => void;
    handleDelete: () => void;
    exponent: (value: string) => void
}  => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');
    const [lastResult, setLastResult] = useState('');

    const handleInput = (value: string) => {
        const lastInput = input.slice(-1);
        const operators = ['+', '-', '*', '/', '.', '^', '(', ')'];

        const openParenthesesCount = (input.match(/\(/g) || []).length;
        const closeParenthesesCount = (input.match(/\)/g) || []).length;

        if (input === '' && (value === '0' || value === '00')) {
            return;
        }

        if (input === '0' && value !== '.') {
            setInput(value);
        }

        if (value === '()') {
            if (operators.includes(lastInput) || input === '' || lastInput === '(') {
                setInput(input + '(');
            } else if (openParenthesesCount > closeParenthesesCount && !operators.includes(lastInput)) {
                setInput(input + ')');
            }
            return;
        }

        if (operators.includes(lastInput) && operators.includes(value)) {
            return;
        }

        if (lastResult !== "") {
            setInput(lastResult + value);
            setLastResult("");
            return;
        }
        setInput(input + value);
    }

    const calculateResult = () => {
        try {

            let expression = input;

            if (input.includes('^')) {
                expression = input.replace('^', '**');
            } else if (input.includes('sin')) {
                expression = input.replace('sin', 'Math.sin');
            } else if (input.includes('cos')) {
                expression = input.replace('cos', 'Math.cos');
            } else if (input.includes('tan')) {
                expression = input.replace('tan', 'Math.tan');
            }

            const calculatedResult = eval(expression);
            const roundedResult = parseFloat(calculatedResult.toFixed(5))


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

    const handleEqual = () => {
        calculateResult();
        setLastResult(result);
        setInput("");
    }

    const trigFunctions = (value: string) => {

        if (value === 'sin') {
            setInput(input + 'sin(');
        } else if (value === 'cos') {
            setInput(input + 'cos(');
        } else if (value === 'tan') {
            setInput(input + 'tan(');
        }
    }

    const exponent = (value: string) => {
        setInput(input + value);
        calculateResult();
    }

    return {
        input,
        result,
        handleInput,
        calculateResult,
        handleReset,
        handleDelete,
        handleEqual,
        trigFunctions,
        exponent
    };

}


