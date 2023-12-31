import styled from '@emotion/styled';
import { Outlet, NavLink } from 'react-router-dom';
import css from '../App.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';

const StyledLink = styled(NavLink)`
  color: #4d5ae5;
  margin-right: 10px;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #f4f4fd;
  border: 1px solid #f4f4fd;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

  &.active {
    color: #ffffff;
    background-color: #404bbf;
    border: 1px solid #404bbf;
  }
`;

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
      <div className={css.container}>
        <header className={css.header}>
          <nav className={css.nav}>
            {<StyledLink to="/">Main</StyledLink>}
            {!isLoggedIn && <StyledLink to="/login">Login</StyledLink>}
            {!isLoggedIn && <StyledLink to="/register">Register</StyledLink>}
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
          </nav>
          {isLoggedIn && <UserMenu />}
        </header>
        <Outlet />
      </div>
    );
}