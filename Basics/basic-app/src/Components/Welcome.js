import {useEffect, useState} from 'react';
export default function Welcome(props) {
    const [counter, setCounter] = useState(0);
    const [traffictLight, setTrafficLight] = useState(false);
    const { name}  = props;

    useEffect(() => {
        console.log("Status", traffictLight);
    }, [traffictLight]);

    const count = () => {
        setCounter(counter + 1);
        setTrafficLight(!traffictLight);
    };
    return (
    <div>
        <h1>Hola, {name}</h1>
        <h2>Contador de React con Hooks</h2>
        <p>El numero del contador es: {counter}</p>
        <p>El semaforo se encuentra: {traffictLight  ? 'Green' : 'Red'}</p>
        <button type='submit' onClick={count}>Sumar contador</button>
    </div>
    )
}