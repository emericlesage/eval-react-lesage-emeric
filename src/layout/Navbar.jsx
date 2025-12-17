import { NavLink, Outlet } from 'react-router';
import './Navbar.css';
import { Clapperboard, House } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/"><House />Accueil</NavLink>
            <NavLink to="/movies"><Clapperboard />Films</NavLink>
            <Outlet />
        </div>
    );
}