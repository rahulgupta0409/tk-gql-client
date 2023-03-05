import React, { Component }  from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Patient from './components/PatientEntry/Patient'

function App() {
  return (
    <>
    <Navigation title="Tilak Pathology" />
    
    <Footer />    
    </>
  );
}

export default App;
