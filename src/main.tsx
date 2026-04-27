import { createRoot } from 'react-dom/client';
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { App } from './app';
import { ForgetPassword } from './pages/forgetPassword';
import "./languages/i18n";
import './css/fonts.css';
import './css/structure.css';
import './css/inputs.css';
import './css/buttons.css';
import './css/redirects.css';
import { ResetPassword } from './pages/resetPassword';

BrowserRouter
createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
