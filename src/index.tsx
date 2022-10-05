import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Introduction from './introduction';
import Career from "./career";
import StrongWeak from './strongweak';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/strongweak" element={<StrongWeak/>}/>
      </Routes>
    </main>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
