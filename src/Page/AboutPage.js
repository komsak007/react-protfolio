import React from "react";

import Navbar from "../components/Navbar";

import profile from "../assets/image/profile/STP_0709.jpg";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section id="about-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            Let me tell you a little about myself and what I do...
          </p>
          <div className="about-info">
            <img
              src={profile}
              alt=""
              className="bio-image"
              width={100}
              height={440}
            />
            <div className="bio bg-light">
              <h3>Personal Information</h3>
              <div class="row">
                <div class="col-lg-6" style={{ marginTop: "5px" }}>
                  <div className="row">
                    <div className="col-lg-8">
                      <div style={{ marginTop: "5px" }}>
                        <p>
                          <b>Name:</b> Komsak Panphun
                        </p>
                        <p>
                          <b>Date of Birth:</b> 3 January 1997
                        </p>
                        <p>
                          <b>Age:</b> 24
                        </p>
                        <p>
                          <b>Height:</b> 178 cm.
                        </p>
                        <p>
                          <b>Weight:</b> 80 kg.
                        </p>
                        <p>
                          <b>Sex:</b> Male
                        </p>
                        <p>
                          <b>Marital Status:</b> Single
                        </p>
                        <p>
                          <b>Nationality:</b> Thai
                        </p>
                        <p>
                          <b>Religion:</b> Buddha
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4" style={{ textAlign: "start" }}>
                      <p>
                        <b>Phone:</b>
                        <div>089 646 0713</div>
                      </p>
                      <p>
                        <b>Email:</b>
                        <div style={{ marginBottom: 0 }}>
                          lert_zodiac@hotmail.com
                        </div>
                        <div style={{ marginTop: "0px" }}>
                          lert.zodiac@gmail.com
                        </div>
                      </p>
                      <p>
                        <b>Languges:</b>
                        <div style={{ marginBottom: 0 }}>Thai</div>
                        <div style={{ marginTop: "0px" }}>English (little)</div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-1" style={{ width: "1px" }}>
                  <div
                    style={{
                      border: "0.5px solid #ffc266",
                      height: "100%",
                      width: "1px",
                      margin: "auto",
                    }}
                  ></div>
                </div>
                <div class="col-lg-5">
                  <div className="row" style={{ textAlign: "start" }}>
                    <div className="col-lg-8" style={{ marginLeft: 0 }}>
                      <h5>Education</h5>
                      <hr />
                      <p>
                        {" "}
                        King Mongkut's University of Technology North Bangkok
                        Thailand 2016 – 2019{" "}
                        <div>
                          • Bachelor of Engineering, Electrical Engineering
                        </div>
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <h5>Skills</h5>
                      <hr />
                      <div>
                        <div>
                          <span>C</span>
                        </div>
                        <div>
                          <span>Python</span>
                        </div>
                        <div>
                          <span>Express</span>
                        </div>
                        <div>
                          <span>React</span>
                        </div>
                        <div>
                          <span>Vue</span>
                        </div>
                        <div>
                          <span>React native</span>
                        </div>
                        <div>
                          <span>Flutter</span>
                        </div>
                        <div>
                          <span>MongoDB</span>
                        </div>
                        <div>
                          <span>Image Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home-a" className="text-center py-2">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="bottom-line"></div>

          <div className="specials">
            <div>
              <i className="fas fa-ruler-combined fa-2x"></i>
              <h4>2D Laser Scanner</h4>
              <p>
                2D Laser Scanner is a laser used to measure the size of a room
                and then display the results for the user to see. then can be
                exported to cut the measured designs
              </p>
            </div>
            <div>
              <i className="fas fa-chair fa-2x"></i>
              <h4>Furniture Web Application</h4>
              <p>
                It is a web application used to design a table where the sink
                will be installed. to be a sample before ordering as a sample
              </p>
            </div>
            <div>
              <i className="fas fa-desktop fa-2x"></i>
              <h4>Application with Electron</h4>
              <p>
                It is a desktop program used to get values from various sensors
                to store in a database. Or will adjust the value in the sensor
                to be stable
              </p>
            </div>
            <div>
              <i className="fas fa-shopping-cart fa-2x"></i>
              <h3>Ecommerce with React</h3>
              <p>
                product trading web It is a practice learning in web writing
                with front-end and back-end to understand and be able to use in
                real work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="home-a" className="text-center py-2">
        <div className="container">
          <h2 className="section-title">Volunteer</h2>
          <div className="bottom-line"></div>

          <div className="specials">
            <div>
              <i className="fas fa-robot fa-2x"></i>
              <h4>Robot competition judges</h4>
              <p>
                Serves as a judge for judging robot competitions for middle
                school and high school students. It is a competition that many
                schools across the country compete in.
              </p>
            </div>
            <div>
              <i className="fas fa-chalkboard-teacher fa-2x"></i>
              <h3>Staff E-Camp</h3>
              <p>
                E-Camp is an event organized to ignite the dreams of electrical
                engineering among junior high school students. so that students
                can plan their studies well
              </p>
            </div>
            <div>
              <i className="fas fa-house-damage fa-2x"></i>
              <h3>10th sansara</h3>
              <p>
                Volunteer to help repair and improve schools that are far away.
                The part that will be repairing the electrical system or laying
                the electrical system for the school, for the 10th time, was
                held in Mae Hong Son.
              </p>
            </div>
            <div>
              <i className="fas fa-igloo fa-2x"></i>
              <h3>11st sansara</h3>
              <p>
                It is the 11th Volunteer Camp held in Phetchabun Province. This
                is to help repair electrical systems and install internet
                systems for students to be able to access widely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-b" className="bg-dark py-3">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="bottom-line"></div>
          <h4>Express.js:</h4>
          <div className="progress">
            <div style={{ width: "80%" }}></div>
          </div>
          <h4>React:</h4>
          <div className="progress">
            <div style={{ width: "80%" }}></div>
          </div>
          <h4>Vue.js:</h4>
          <div className="progress">
            <div style={{ width: "75%" }}></div>
          </div>
          <h4>HTML & CSS:</h4>
          <div className="progress">
            <div style={{ width: "60%" }}></div>
          </div>
          <h4>Python:</h4>
          <div className="progress">
            <div style={{ width: "75%" }}></div>
          </div>
          <h4>Flutter:</h4>
          <div className="progress">
            <div style={{ width: "55%" }}></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
