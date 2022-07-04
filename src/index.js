import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Folder from './pages/Folder';
import Gallery from './pages/Gallery';
import { ModalContextProvider } from './context/ModalContext';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <BrowserRouter basename="/fotollama">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Folder />}>
            <Route path=":folderName" element={<Gallery />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
