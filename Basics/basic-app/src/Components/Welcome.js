import {useState} from 'react';
export default function Welcome(props) {
    const [counter, setCounter] = useState(0);
    const {message, name}  = props;
    return (
    <div>
        <h1>Hola, {name}</h1>
        <h2>Contador de React con Hooks</h2>
        <p>El numero del contador es: {counter}</p>
        <button type='submit' onClick={() => setCounter(counter + 1)}>Sumar contador</button>
    </div>
    )
}