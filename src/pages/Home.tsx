import React from 'react';
import { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { backspaceOutline, idCard, moonOutline, sunnyOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [input, setInput] = useState('');
  const [result, setResult] = useState("0");
  const [output, setOutput] = useState(0)
  const [equal, setEqual] = useState(false);

  const toggleColorScheme = () => {
    const newScheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newScheme);

    const calculator = document.querySelector('.calculator') as HTMLElement;

    if (newScheme === 'light') {
      calculator.classList.add('light');
    } else {
      calculator.classList.remove('light');
    }
  };

  const handleInput = (value:string) => {
    setInput(input + value);
  }

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult(result);
    }
  }

  const handleReset = () => {
    setInput('');
    setResult("0");
  }

  const handleDelete = () => {
    setInput(input.slice(0, -1));
    if (input.length === 1)  {
      setInput("")
      setResult("0");
    }
  }

  useEffect(() => {
    calculateResult();
  }, [input])


  return (
    <div className='calculator'>
      <section className='calculator__display'>
        <div className='calculator__display__title'>
          <h1>Calculator</h1>
          <div onClick={toggleColorScheme}>
            <IonIcon icon={theme !== "dark" ? moonOutline : sunnyOutline}></IonIcon>
          </div>
        </div>
        <div className='calculator__display__input'> { equal ? "" : input }</div>
        <div className='calculator__display__output'> { result } </div>
      </section>
      <section className='calculator__divs'>
        <section className='calculator__divs__keys'>
          <div onClick={handleReset} className='keys__reset'>AC</div>
          <div onClick={handleDelete} className='keys__reset'><IonIcon icon={backspaceOutline}></IonIcon></div>
          <div onClick={()=> handleInput("%")} className='keys__operators'>%</div>
          <div onClick={() => handleInput("÷")} className='keys__operators'>÷</div>
          <div onClick={() => handleInput("7")}>7</div>
          <div onClick={() => handleInput("8")}>8</div>
          <div onClick={() => handleInput("9")}>9</div>
          <div onClick={() => handleInput("x")} className='keys__operators'>x</div>
          <div onClick={() => handleInput("4")}>4</div>
          <div onClick={() => handleInput("5")}>5</div>
          <div onClick={() => handleInput("6")}>6</div>
          <div onClick={() => handleInput("-")} className='keys__operators'>-</div>
          <div onClick={() => handleInput("1")}>1</div>
          <div onClick={() => handleInput("2")}>2</div>
          <div onClick={() => handleInput("3")}>3</div>
          <div onClick={() => handleInput("+")} className='keys__operators'>+</div>
          <div onClick={() => handleInput("00")}>00</div>
          <div onClick={() => handleInput("0")}>0</div>
          <div onClick={() => handleInput(".")}>.</div>
          <div onClick={calculateResult} className='keys__operators'>=</div>
        </section>
      </section>
    </div>
  );
};

export default Home;
