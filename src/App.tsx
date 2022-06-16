import React from 'react';
import Header from "./Component/Header/header";
import Footer from "./Component/Footer/footer";
import HomePage from "./Pages/HomePage/homePage";
import './App.css';

function App() {
  return (
      <div>
        <Header/>
        <HomePage/>
        <Footer/>
      </div>
  );
}

export default App;
