import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import { Provider } from 'react-redux'
import store from './Redux/store'
import StoreContent from "./Components/StoreContent/StoreContent"
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
              <StoreContent categoryType={"clothes"} categoryTitle={"Clothes category"} />
            </Route>
            <Route path="/tech/:id?">
              <StoreContent categoryType={"tech"} categoryTitle={"Tech Category"} />
            </Route>
            <Route path="/cart">
              <BigCart keyIndex={"cart"} />
            </Route>
            <Route path="/">
              <StoreContent keyIndex={"clothes"} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
