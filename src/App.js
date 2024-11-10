import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import UserList from './pages/UserList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;