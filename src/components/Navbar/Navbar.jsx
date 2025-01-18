import React from "react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div class="nav-container">
      <nav class="navbar">
        <div class="name">
          <h2>Vismita</h2>
        </div>
        <div class="menu-title">
          <img
            src={menu ? "./assets/close.png" : "./assets/menu.png"}
            class="menuBtn"
            alt="menu-btn"
            onClick={() => setMenu(!menu)}
          />
          <ul
            className={`nav-links ${menu ? "menu" : ""}`}
            onClick={() => setMenu(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Projects</a>
            </li>
            <li>
              <a href="#project">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}

export default Navbar;
