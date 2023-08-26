import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NotFound from 'pages/NotFoundPage';
import { Navigation } from './Navigation/Navigation';


function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Navigation/>} >
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
