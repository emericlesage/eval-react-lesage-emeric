import { useState } from 'react';
import './MailInput.css';

export default function MailInput({ email, setEmail, setError }) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function checkEmail(email) {
        if (!emailRegex.test(email)) {
            setError(true)
        }
    }

    return (
        <div className="">
            <input onKeyUp={(e) => setEmail(e.target.value)} />
            <button onClick={checkEmail}>Envoyer</button>
        </div>
    );
}