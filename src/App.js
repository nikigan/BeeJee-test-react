import React from 'react';
import './App.css';
import CustomNavbar from './components/Navbar';
import AppRouter from './router/AppRouter';

function App() {

  return (
    <div className="App">
      <CustomNavbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
