import { useState } from 'react';
import css from '../components/App.module.css'

function RegisterPage() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
    const reset = () => {
      setName('');
        setEmail('');
        setPassword('');
    };
    
    const handleChange = ({ target: {name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        reset();
    }
    return (
        <div className={css.formContainer}>
        <h1 className={css.title}>Create new Account</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Name
            <input type="name" name="name" value={name} onChange={handleChange} />
            </label>
            <label>
            Email
            <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <label>
            Password
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            </label>
            <button className={css.btn} type="submit">
            Register
            </button>
        </form>
      </div>
    );    
}

export default RegisterPage;