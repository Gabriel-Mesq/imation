import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductFree from './components/ProductFree';
import ProductEnterprise from './components/ProductEnterprise';
import Download from './components/Download';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductFree />
        <ProductEnterprise />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
