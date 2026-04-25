import { createRoot } from 'react-dom/client';
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { App } from './app';
import "./languages/i18n";
import './css/fonts.css';
import './css/structure.css';
import './css/inputs.css';
import './css/buttons.css';
import './css/redirects.css';

BrowserRouter
createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
