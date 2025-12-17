import './MailInput.css';

export default function MailInput({ email, setEmail, setError }) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function checkEmail() {
        const isValidEmail = emailRegex.test(email);
        setError(!isValidEmail);
    }

    return (
        <div className="">
            <input onKeyUp={(e) => setEmail(e.target.value)} />
            <button onClick={checkEmail}>Envoyer</button>
        </div>
    );
}