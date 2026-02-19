import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Teams from "./components/Teams";
import Users from "./components/Users";
import Workouts from "./components/Workouts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container App">
      <header className="App-header d-flex align-items-center mb-4">
        <img src="/favicon.ico" alt="OctoFit Logo" className="App-logo" />
        <h1 className="mt-3">OctoFit Tracker</h1>
      </header>

      <nav className="navbar navbar-expand-lg mb-4">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/activities">Activities</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teams">Teams</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/workouts">Workouts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
