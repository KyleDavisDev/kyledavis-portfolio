import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="border-bottom">
      <div className="nav-container">
        <NavLink
          exact
          className="menu-item bold mont upper"
          activeClassName="active"
          to="/"
        >
          <h3>Kyle Bonar</h3>
        </NavLink>

        <ul>
          <li>
            <NavLink
              className="menu-item mont upper"
              activeClassName="active"
              to="/projects"
            >
              <h3>Projects</h3>
            </NavLink>
          </li>
          <li>
            <a className="menu-item mont upper" target="_blank" href="/resume">
              <h3>Resume</h3>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

module.exports = Nav;
