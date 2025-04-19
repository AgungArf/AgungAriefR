import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import List from './list';
import Image from './image';
import Top from './Top';

const App = () => {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Header list="10 daftar makanan" />
      <Top />
      <Image />
      <List />
      <Footer />
    </div>
  );
}

export default App;