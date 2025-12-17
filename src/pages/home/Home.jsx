import { Outlet } from 'react-router';
import './Home.css';

export default function Home() {

    return (
        <div className="">
            <h1>Bienvenue sur notre site de Streaming</h1>
            <Outlet />

        </div>
    );
}