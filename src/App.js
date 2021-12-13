import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import { Provider } from 'react-redux'
import store from './Redux/store'
import Clothes from "./Categories/Clothes"
import Tech from "./Categories/Tech"
import "./App.css"
// TODO(FP): change css
import "./Components/StoreContent/StoreContent.css"
import BigCart from "./Components/BigCart/BigCart"

function App() {

  return (
    <Provider store={store}>
      <Router>

        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/clothes/:id?">
              <Clothes keyIndex={"clothes"} />
            </Route>
            <Route path="/tech/:id?">
              <Tech keyIndex={"tech"} />
            </Route>
            <Route path="/cart">
              <BigCart keyIndex={"cart"} />
            </Route>
            <Route path="/">
              <Clothes keyIndex={"clothes"} />
            </Route>
          </Switch>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
