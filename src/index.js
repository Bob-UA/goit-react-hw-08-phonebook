import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
          <Toaster />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
