import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from '@material-ui/icons/Search'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

ReactDOM.render(
  <>
  <Header />
  <Banner />
  <Footer />
  </>,
  document.getElementById("root")
);