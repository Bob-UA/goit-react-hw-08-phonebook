import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import authSelectors from 'Redux/auth/auth-selectors';
import authOperations from 'Redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onHandleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={css.container}>
      <span className={css.userName}>
        <p>{name}</p>
      </span>
      <button type="button" onClick={onHandleClick} className={css.button}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
