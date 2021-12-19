import React from "react";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Copyright &copy; 2019. All Rights Reserved</p>
        <div className="social">
          <a href="https://github.com/komsak007" style={{ color: "white" }}>
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/lert.komsak/"
            style={{ color: "white" }}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/lertzkomsak/"
            style={{ color: "white" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
