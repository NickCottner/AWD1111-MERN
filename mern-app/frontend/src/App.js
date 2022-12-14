import { Container } from 'react-bootstrap'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen  from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen'
import './App.css';


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component = {HomeScreen} />
          <Route path='/movie/:id' component = {MovieScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
