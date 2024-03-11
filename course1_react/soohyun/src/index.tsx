import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import Header from './layouts/Header';
import { CatsProvider } from './context/CatsContext';
import GeneralStyles from './styles/GeneralStyles';
import Images from './pages/cat/Images';
import SearchWeb from './pages/search/SearchWeb';
import WebResult from './pages/results/WebResult';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CatsProvider>
          <BrowserRouter>
            <GeneralStyles />
            <Header />
            <Routes>
              <Route path="/" element={<App />} /> 
              <Route path="/cat" element={<Images />} /> 
              <Route path="/search" element={<WebResult />} />
            </Routes>
            <ReactQueryDevtools initialIsOpen={true} />
          </BrowserRouter>
      </CatsProvider>
    </QueryClientProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
