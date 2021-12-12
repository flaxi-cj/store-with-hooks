import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./Navbar"
import { Provider } from 'react-redux'
import store from './Redux/store'
import Clothes from "./Categories/Clothes"
import Tech from "./Categories/Tech"
import Kids from "./Categories/Kids"
import "./App.css"
import "./StoreContent.css"

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
        <Route path="/kids">
          <Kids keyIndex={"KIDS"} />
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
