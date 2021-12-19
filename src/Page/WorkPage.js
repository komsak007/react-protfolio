import React from "react";

import Navbar from "../components/Navbar";

import item1 from "../assets/image/items/item1.png";
import item2 from "../assets/image/items/item2.png";
import item3 from "../assets/image/items/item3.png";
import item4 from "../assets/image/items/item4.png";
import item5 from "../assets/image/items/item5.png";
import item6 from "../assets/image/items/item6.png";
import item7 from "../assets/image/items/item7.png";
import item8 from "../assets/image/items/item8.png";
import item9 from "../assets/image/items/item9.png";
import Footer from "../components/Footer";

const WorkPage = () => {
  return (
    <>
      <Navbar />

      <section id="work-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="bottom-line"></div>
          <p className="lead">Check out some of my projects</p>
          <div className="items">
            <div className="item">
              <div className="item-image">
                <img src={item1} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Web Applications</p>
                  <h2 className="item-text-title">2D Laser Scanner</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item2} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Web Applications</p>
                  <h2 className="item-text-title">Design Furniture</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item3} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Desktop Applications</p>
                  <h2 className="item-text-title">Sensor Management</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item4} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Web Applications</p>
                  <h2 className="item-text-title">Clone Netflix</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item5} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Web Applications</p>
                  <h2 className="item-text-title">E-Commerce</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item6} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Web Applications</p>
                  <h2 className="item-text-title">Add Employee List</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item7} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Mobile Applications</p>
                  <h2 className="item-text-title">Blogs Application</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item8} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Mobil Applications</p>
                  <h2 className="item-text-title">News App</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item9} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Desktop Applications</p>
                  <h2 className="item-text-title">Mapping with UAV</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WorkPage;
