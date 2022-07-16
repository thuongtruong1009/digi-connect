import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '~/styles/main.scss';
import { SignUpInfoProvider } from './helpers/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignUpInfoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SignUpInfoProvider>
  </React.StrictMode>
);
