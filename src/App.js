import React from "react";
import "./App.css";
import Generator from "./generator/generator";
import FAQ from "./faq/faq";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png"

function App() {
  return (
    <Router>
      <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <img class="w-20"src={logo}/>
          <span class="font-semibold text-xl tracking-tight text-black">
            Crazy Passwords
          </span>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link
              to="/register"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Sign In
            </Link>

            <Link to="/generator" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
              Password Generator
            </Link>
            <Link to="/faq" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
              FAQ
            </Link>
          </div>
        </div>
      </nav>

      <Route path="/generator">
        {" "}
        <Generator />
      </Route>
      <Route path="/register">
        <FAQ />
      </Route>
      <Route path="/faq">
        <FAQ />
      </Route>
    </Router>
  );
}

export default App;
