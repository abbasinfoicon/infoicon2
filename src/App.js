import React from 'react';
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-tabs/style/react-tabs.css';
import Footer from './components/parts/Footer';
import Header from './components/parts/Header';
import RoutesList from './routes/RoutesList';
import ScrollTop from './components/parts/ScrollTop';

function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <RoutesList />
      <Footer />
    </>
  );
}

export default App;
