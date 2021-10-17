import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    // BEM

    <Router>

      <div className="App">
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
