import "../css/main.css";
import logoIcon from "../css/img/logoIcon.png";
import "../js/main.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";
import Login from "./Login.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top navbar-whole"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>
              <span className="c-letter">C</span>hit
              <span className="c-letter">C</span>h
              <img className="logo-icon" src={logoIcon} alt="" />
              <span className="t-letter">t</span>
            </h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Services</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <button
                  className="get-a-quote"
                  onClick={(e) => {
                    toggleVisibility();
                  }}
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">
                Feeling rejected? Lets meet some new people.
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                This app makes it simple to establish new acquaintances by
                utilising realtime Google Maps. Find friends nearby who share
                your interests and hang out with them.
              </p>
            </div>

            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/hero-img.svg"
                className="img-fluid mb-3 mb-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* <!-- ======= Featured Services Section ======= --> */}
        <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 service-item d-flex"
                data-aos="fade-up"
              >
                <div className="icon flex-shrink-0">
                  <span className="Ilocation-dot">
                    <FontAwesomeIcon icon={solid("location-dot")} />
                  </span>
                </div>
                <div>
                  <h4 className="title">Live Location</h4>
                  <p className="description">
                    we will show you the nearest people to you who are also
                    using the app.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 service-item d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <span className="Iplane">
                    <FontAwesomeIcon icon={solid("plane")} />
                  </span>
                </div>
                <div>
                  <h4 className="title">Meet New Friends</h4>
                  <p className="description">
                    Meet your new pals immediately away and tell them about your
                    experiences.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 service-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <span className="Icomment">
                    <FontAwesomeIcon icon={solid("comment")} />
                  </span>
                </div>
                <div>
                  <h4 className="title">Live Chatting</h4>
                  <p className="description">
                    There is no need to wait; start chatting with your new pals
                    right immediately.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Featured Services Section --> */}

        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about" className="about pt-0">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox play-btn"
                >
                  a
                </a>
              </div>
              <div className="col-lg-6 content order-last order-lg-first">
                <h3>About Us</h3>
                <p>
                  Welcome to our website! We understand that it can be
                  intimidating to put yourself out there and meet new people,
                  especially if you are feeling insecure or timid. Thats why we
                  created this platform to help you connect with others in your
                  area and build meaningful friendships.
                  <br />
                  <br />
                  We believe that everyone deserves to have supportive, caring
                  relationships in their life, and we hope that our platform can
                  help you find those connections. So dont be shy - take the
                  first step and start making new friends today!
                </p>
                <ul>
                  <ul data-aos="fade-up" data-aos-delay="200">
                    <div>
                      <div className="about-fixing">
                        <span className="Ishield-halved">
                          <FontAwesomeIcon icon={solid("shield-halved")} />
                        </span>
                        <div>
                          <h5>Data Privacy</h5>
                          <p>
                            We take data security seriously and have implemented
                            appropriate measures to protect personal information
                            from unauthorized access, misuse, and alteration.
                          </p>
                        </div>
                      </div>
                      <li data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-broadcast"></i>
                        <div>
                          <h5>Google Maps Integration</h5>
                          <p>
                            The website uses Google Maps to display a list of
                            nearby potential friends for meeting up or chatting.
                          </p>
                        </div>
                      </li>
                    </div>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3>Sign-up Now</h3>
                <p>
                  Sign in to access all of the features of our chatting platform
                  and connect with other users. With a login, you can create and
                  join chat rooms, participate in group conversations, and
                  message other users directly. Dont miss out on the fun -
                  create an account now!
                </p>
                <Link to="/signup" className="cta-btn">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container">
            <div
              className="row gy-4 align-items-center features-item"
              data-aos="fade-up"
            >
              <div className="col-md-5">
                <img
                  src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h3>
                  We cherish your time and want you to have a good experience.
                </h3>
                <p className="fst-italic">
                  We understand that your time is valuable, and we appreciate
                  your choosing to spend it with us. We will do everything we
                  can to make sure you have a great experience with us
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i> Easy to use and navigate.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> User friendly interface.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Fast and responsive.
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div
              className="row gy-4 align-items-center features-item"
              data-aos="fade-up"
            >
              <div className="col-md-5 order-1 order-md-2">
                <img
                  src="assets/img/custom mobile picture.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 order-2 order-md-1">
                <h3>Also available on mobile</h3>
                <p className="fst-italic">
                  With the increasing popularity of smartphones and tablets, its
                  important for websites to be accessible on a variety of
                  devices. Thats why we have made sure that our website is fully
                  responsive, allowing you to use it on your mobile device with
                  ease.
                </p>
                <p>
                  No matter where you are, you wll be able to access all of our
                  features and content without any issues. So go ahead and try
                  it out - were confident that you will love the convenience of
                  being able to use our website on your mobile device.
                </p>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div
              className="row gy-4 align-items-center features-item"
              data-aos="fade-up"
            >
              <div className="col-md-5">
                <img src="assets/img/247.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-7">
                <h3>
                  27 / 7 available to help you with any questions you may have.
                </h3>
                <p>
                  We are always available to help you with any questions you may
                  have. We have a dedicated team of support staff that are ready
                  to help you with any issues you may be having. Whether you
                  need help with the website, have questions about our services,
                  or just want to say hi, we would love to hear from you. So do
                  not be shy - get in touch today!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}
      </main>
      {/* <!-- End #main --> */}
      {/* ++++++++++++++++++++++++++++++++++++++++== LOGIN */}
      <Login isVisible={isVisible} />
    </>
  );
}

export default Home;
