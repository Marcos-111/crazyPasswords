import React from "react";
import Generator from "../generator/generator";
import Login from "../login/login.js";
import Register from "../register/register";
import FAQ from "../faq/faq";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "../logo.png"
import "./header.css"

function Header() {
  return (
    <Router>
      <body className="bg-gray-100 antialiased font-sans">
        <header className="lg:px-16 px-8 bg-white flex flex-wrap items-center py-4 shadow-md">
          <img className="w-20" src={logo} alt="logo" />
          <span className="font-semibold text-xl tracking-tight text-black">Crazy Passwords</span>
          <div className="flex-1 flex justify-between items-center">
          </div>
          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <Link
                  to="/login"
                  className="md:p-4 py-3 px-0 block"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="md:p-4 py-3 px-0 block"
                >
                  Sign Up
                </Link>
                <Link to="/" className="md:p-4 py-3 px-0 block">
                  Password Generator
                </Link>
                <Link to="/faq" className="md:p-4 py-3 px-0 block md:mb-0 mb-2">
                  FAQ
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </body>
      <Route >
        <Switch>
          <Route path="/" component={Generator} exact />
          <Route path="/faq" component={FAQ} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route component={Error} />
        </Switch>
      </Route>
    </Router>
  );
}

export default Header