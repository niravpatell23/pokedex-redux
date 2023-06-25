import React from "react";
import logo from "./img/down.png";
import "./App.css";
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import Home from "./components/Home";
import Error from "./components/404";
import Alltrainers from "./components/Alltrainers";
import Trainer from "./components/Trainer";
// import IndexPage from './components/IndexPage';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Pokemon API</h1>
          <Link className="showlink" to="/">
            Home
          </Link>

          <br />

          <br />

          <Link className="showlink" to="/pokemon/page/0">
            Pokemon
          </Link>
          <Link className="showlink" to="/trainers">
            Trainers
          </Link>
        </header>

        <br />
        <br />
        <div className="App-body">
          <Routes>
            {/* <Route path="/"  exact component={IndexPage}  /> */}
            <Route exact path="/" element={<Home />} />
            <Route
              path="/pokemon/page/:pagenum"
              exact
              element={<PokemonList />}
            />
            <Route path="/pokemon/:id" exact element={<Pokemon />} />
            <Route path="/trainers" exact element={<Alltrainers />} />

            <Route path="*" element={<Error />} status={404} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
