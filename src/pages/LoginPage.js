import { useState } from 'react';
import css from '../components/App.module.css';
import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/operations';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <div className={css.pageContainer}>
      <h1 className={css.title}>Log Into My Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
