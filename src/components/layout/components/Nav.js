import React from "react";
import { navElements } from "../../../data/data";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="w-full header m-auto px-16">
      <nav className="flex flex-col sm:flex-row justify-between items-center relative">
        <img src="images/logo-alt.png" alt="logo" className="nav-logo" />
        <ul className="flex !list-none m-auto sm:m-0 main-nav">
          {navElements.map((item, index) => (
            <li key={index} className="ml-3">
              <Link to={item.href}>{item.navElement}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
