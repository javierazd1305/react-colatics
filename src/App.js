import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Company from "./components/Company";
import Feature from "./components/Feature";
import Characteristic from "./components/Characteristic";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Company />
      <Feature />
      <Characteristic />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
