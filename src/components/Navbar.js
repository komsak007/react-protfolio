import React from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/image/logo.png";

const Navbar = () => {
  const history = useHistory();

  const current = history.location.pathname;

  return (
    <>
      <header id="header-inner">
        <div className="container">
          <nav id="main-nav">
            <img
              src={logo}
              alt="My Portfolio"
              id="logo-nav"
              width={20}
              height={20}
            />
            <ul>
              <li>
                <Link to={"/"} className={current === "/" ? "current" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={current === "/about" ? "current" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/project"}
                  className={current === "/project" ? "current" : ""}
                >
                  Project
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
