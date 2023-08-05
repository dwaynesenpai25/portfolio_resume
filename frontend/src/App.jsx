import React from 'react'
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login"
import Footer from "./components/Footer"

function App() {


  return (
    <>
     <div className="max-w-7xl mx-auto">
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Login/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
