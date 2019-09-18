import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="border-bottom">
      <div className="nav-container">
        <NavLink exact className="menu-item" activeClassName="active" to="/">
          <h3 className="bold mont upper">Kyle Bonar</h3>
        </NavLink>

        <ul>
          <li>
            <NavLink
              className="menu-item"
              activeClassName="active"
              to="/projects"
            >
              <h3 className="bold mont upper">Projects</h3>
            </NavLink>
          </li>
          <li>
            <a
              className="menu-item"
              target="_blank"
              href="/images/Davis_Kyle_2019.pdf"
            >
              <h3 className="bold mont upper">Resume</h3>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
