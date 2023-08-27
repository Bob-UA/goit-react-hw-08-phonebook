import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NotFound from 'pages/NotFoundPage';
import { Navigation } from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'Redux/auth/auth-operations';
import MainPage from 'pages/MainPage';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <section>
      <Routes>
        <Route path="/" element={<Navigation/>} >
          <Route index element={<MainPage />} />
          <Route path='login' element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
