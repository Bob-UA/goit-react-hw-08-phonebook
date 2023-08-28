import { useEffect, useState } from 'react';
import css from '../components/App.module.css';
import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/operations';


function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  useEffect(() => {
    if (password === rePassword) {
      setPasswordCheck(true)
    }
    else
    return setPasswordCheck(false);
  }, [password, rePassword]);

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRePassword('');
    setPasswordCheck(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'rePassword':
        return setRePassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    passwordCheck && dispatch(authOperations.register({ name, email, password }));
    passwordCheck && reset();
  };
  return (
    <div className={css.pageContainer}>
      <h1 className={css.title}>Create new Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="name"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>
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
        <label
          style={
            passwordCheck && rePassword
              ? { color: '#4D5AE5' }
              : { color: '#FF7276' }
          }
        >
          Retype Password
          <input
            type="password"
            name="rePassword"
            value={rePassword}
            required
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
