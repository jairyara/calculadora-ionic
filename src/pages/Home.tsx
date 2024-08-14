import React from 'react';
import {useState, useEffect} from 'react';
import {IonIcon} from '@ionic/react';
import {backspaceOutline, moonOutline, sunnyOutline} from 'ionicons/icons';
import './Home.css';
import {useCalculator} from "@hooks/useCalculator";
import {useTheme} from "@hooks/useTheme";

const Home: React.FC = () => {
    const {
        input,
        result,
        handleInput,
        calculateResult,
        handleReset,
        handleDelete,
        handleSqrt,
        handleEqual,
        calculatePercentage
    } = useCalculator();
    const {theme, toggleTheme} = useTheme();

    useEffect(() => {
        calculateResult();
    }, [input])

    return (
        <div className='calculator'>
            <section className='calculator__display'>
                <div className='calculator__display__title'>
                    <h1>Calculator</h1>
                    <div onClick={toggleTheme}>
                        <IonIcon icon={theme !== "dark" ? moonOutline : sunnyOutline}></IonIcon>
                    </div>
                </div>
                <div className='calculator__display__input'> {input}</div>
                <div className='calculator__display__output'> {result} </div>
                <div className='calculator__display--separator'></div>
            </section>
            <section className='calculator__divs'>
                <section className='calculator__divs__keys'>
                    <div>Sn</div>
                    <div>Cs</div>
                    <div>Tn</div>
                    <div onClick={handleSqrt} className='keys__sup'>e<sup>x</sup></div>
                    <div onClick={handleReset} className='keys__reset'>C</div>
                    <div onClick={handleDelete}><IonIcon icon={backspaceOutline}></IonIcon>
                    </div>
                    <div onClick={calculatePercentage}>%</div>
                    <div onClick={() => handleInput("/")}>÷</div>
                    <div onClick={() => handleInput("7")}>7</div>
                    <div onClick={() => handleInput("8")}>8</div>
                    <div onClick={() => handleInput("9")}>9</div>
                    <div onClick={() => handleInput("*")}>x</div>
                    <div onClick={() => handleInput("4")}>4</div>
                    <div onClick={() => handleInput("5")}>5</div>
                    <div onClick={() => handleInput("6")}>6</div>
                    <div onClick={() => handleInput("-")}>-</div>
                    <div onClick={() => handleInput("1")}>1</div>
                    <div onClick={() => handleInput("2")}>2</div>
                    <div onClick={() => handleInput("3")}>3</div>
                    <div onClick={() => handleInput("+")}>+</div>
                    <div onClick={() => handleInput("00")}>00</div>
                    <div onClick={() => handleInput("0")}>0</div>
                    <div onClick={() => handleInput(".")}>.</div>
                    <div onClick={handleEqual} className='keys__accent'>=</div>
                </section>
            </section>
        </div>
    );
};

export default Home;
