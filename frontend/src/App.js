import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter className = "app" >
    
    <Route exact path = "/"></Route>
    </BrowserRouter>
  );
}

export default App;
