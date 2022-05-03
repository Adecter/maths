import './style.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useTranslation, Trans } from 'react-i18next';
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Teachers from './pages/Teachers';
import Contacts from './pages/Contacts';
import NoPage from './pages/NoPage';



function App() {

  // const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
{/*         
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
       */}
    </div>
  );
}

export default App;
