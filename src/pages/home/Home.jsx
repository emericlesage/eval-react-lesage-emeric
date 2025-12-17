import { Outlet } from 'react-router';
import './Home.css';
import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className="">
            <h1>Bienvenue sur notre site de Streaming</h1>
            <p>Vous pouvez cliquer ici !</p>
            <button onClick={increment}>{count}</button>
            <Outlet />

        </div>
    );
}