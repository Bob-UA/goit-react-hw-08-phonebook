import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'Redux/auth/operations';
import { Navigation } from './Navigation/Navigation';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import authSelectors from 'Redux/auth/auth-selectors';

function App() {
  const dispatch = useDispatch();
  const fetchCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !fetchCurrentUser && (
      <section>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<MainPage />} />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<MainPage/>} />
          </Route>
        </Routes>
      </section>
    )
  );
}

export default App;
