import { useState } from 'react';

export default function TimerCounter() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
  
    function mostrarTiempo() {
      const minutes = Math.floor(seconds / 60);
      const segundos = seconds % 60;
      return `${minutes}:${segundos < 10 ? '0' : ''}${segundos}`;
    }
  
    function start() {
      if (!isRunning) {
        const id = setInterval(function() {
          setSeconds(prev => prev + 1);
        }, 1000);
        setIntervalId(id);
        setIsRunning(true);
      }
    }
  
    function pausar() {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  
    function reset() {
      clearInterval(intervalId);
      setSeconds(0);
      setIsRunning(false);
    }
  
    return (
      <div>
        <h1>{mostrarTiempo()}</h1>
        <button onClick={start}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
    );
  }