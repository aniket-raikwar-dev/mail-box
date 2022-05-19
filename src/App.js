import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MailBox from './components/MailBox/MailBox';
import OpenMail from './components/MailBox/OpenMail';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/mail/:id" element={<OpenMail />} />
            <Route exact path="/inbox" element={<MailBox />} />
            <Route exact path="/draft" element={<MailBox />} />
            <Route exact path="/spam" element={<MailBox />} />
            <Route exact path="/trash" element={<MailBox />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
