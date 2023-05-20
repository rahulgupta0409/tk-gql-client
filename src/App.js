import React, { Component }  from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Patient from './components/PatientEntry/Patient'
import Login from './components/Login/Login';


function App() {
  return (
    <>
    <Navigation title="Tilak Pathology" />
    <Login />
    <Footer />    
    </>
  );
}

export default App;
