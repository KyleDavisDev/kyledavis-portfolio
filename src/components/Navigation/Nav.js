import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="border-bottom">
      <div className="nav-container">
        <NavLink exact className="menu-item" activeClassName="active" to="/">
<<<<<<< HEAD
          <h3 className="bold mont upper">Kyle Bonar</h3>
=======
          <h3 className="bold mont upper">Kyle Davis</h3>
>>>>>>> 4c20c65a1018867ff0e6d7288668cea09fad480e
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
