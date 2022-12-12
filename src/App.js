import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Foter from './components/Foter';
import Services from './components/Services';
import Contact from './components/Contact';
import Hiring from './components/Hiring';
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/services' component={Services} />
        <Route exact path='/hiring' component={Hiring} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Foter />
    </>
  )
}

export default App;
