import React from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/image/logo.png";
// import "../assets/css/main.css";

const HomePage = () => {
  const history = useHistory();

  const current = history.location.pathname;

  return (
    <>
      <header id="header-home">
        <div className="container">
          <nav id="main-nav">
            <img src={logo} alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <Link to={"/"} className={current === "/" ? "current" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/project"}>Project</Link>
              </li>
            </ul>
          </nav>
          <div className="header-content">
            <h1>
              I Am Komsak Panphun
              <span
                className="txt-type"
                data-wait="3000"
                data-words='["Photographer", "Designer", "UI/UX Dev"]'
              ></span>
            </h1>
            <p className="lead">
              I specialize in programming web applications with React and
              express.
            </p>
            <Link to={"/project"} className="btn-light">
              View My Work
            </Link>
          </div>
        </div>
      </header>

      <section id="home-b" className="text-center py-2">
        <div className="stats">
          <div>
            <ul>
              <li>
                <i className="fas fa-star fa-3x"></i>
              </li>
              <li className="stats-title">Certifications</li>
              <li className="stats-number">2</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i class="fas fa-trophy fa-3x"></i>
              </li>
              <li className="stats-title">Academic Competition</li>
              <li className="stats-number">2</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i class="fas fa-hands-helping fa-3x"></i>
              </li>
              <li className="stats-title">Volunteer Work</li>
              <li className="stats-number">3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i class="fab fa-github fa-3x"></i>
              </li>
              <li className="stats-title">Github Repositories</li>
              <li className="stats-number">39</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="main-footer">
        <div className="footer-content container">
          <p>Copyright &copy; 2019. All Rights Reserved</p>
          <div className="social">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
