import { Mail, TextInitial } from 'lucide-react';
import './Opinion.css';
import { useState } from 'react';
import MailInput from '../../components/mail/MailInput';

export default function Opinion({ }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="opinion-container">
            <label htmlFor="email"><Mail /></label>
            <MailInput email={email} setEmail={setEmail} setError={setError} />

            <label htmlFor="texte"><TextInitial /></label>
            <input type="text" />

            {!error && <p>`${email} n'est pas valide. Veuillez réessayer.`</p>}

        </div>
    );
}