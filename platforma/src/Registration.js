import './index.css';

function Registration() {
    const title = 'Istoric';

    return (
        <div className="registration">
            <form action="" className="registration__form">
                <h1>Înregistrare</h1>
                <input type="text" name="" placeholder="Nume de familie" />
                <input type="text" name="" placeholder="Prenume" />
                <input type="text" name="" placeholder="Email" />
                <input type="password" name="" placeholder="Parolă" />
                <input type="password" name="" placeholder="Confirmă parola" />
                <button type="submit" name="">Înregistrare cont</button>
            </form>
        </div>
    );
}

export default Registration;