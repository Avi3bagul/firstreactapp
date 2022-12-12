import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import hacker from '../imges/hacker.png';
import logo from '../imges/logo.png';

const Navbar = () => {
  const [expand, setExpand] = useState('false');
  window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset);
    const navbar = document.getElementById("fixed-nav");

    if (window.pageYOffset >= 300) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  const toglenav = () =>{
    const updwn = document.getElementById('updown');
    const show = document.getElementById('navbarSupportedContent');
    updwn.classList.toggle('collapsed');
    setExpand('true');
    show.classList.toggle('show');
    const nbtn = document.getElementById('n-btn');
    // console.log(nbtn);
    nbtn.classList.remove('active');

  }

  return (
    <>
      <div className="bg-orange shadow" id="fixed-nav">
        <div className="container">
          <div className="row ">
            <div className="col-11 mx-auto">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <NavLink to="" className="navbar-brand me-0">
                    <div className="d-flex">
                      <img
                        src={logo}
                        alt=""
                        width="40"
                        height="35"
                        className="me-2 nav-images bg-light"
                      />
                      <span className="fs-4 colr-blue fw-bold">icode</span>
                    </div>
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={expand}
                    aria-label="Toggle navigation"
                    id="updown"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item px-1">
                        <NavLink to="/" className="nav-link text-c fs-5 colr-white active"  onClick={toglenav} id='n-btn'>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item px-1">
                        <NavLink to="/services" className="nav-link text-c fs-5 colr-white" onClick={toglenav} id='n-btn'>
                          Services
                        </NavLink>
                      </li>
                      <li className="nav-item px-1">
                        <NavLink to="/hiring" className="nav-link text-c fs-5 colr-white" onClick={toglenav} id='n-btn'>
                          Hiring
                        </NavLink>
                      </li>
                      <li className="nav-item px-1">
                        <NavLink to="/contact" className="nav-link text-c fs-5 colr-white " onClick={toglenav} id='n-btn'>
                          Contact
                        </NavLink>
                      </li>
                      <li className="nav-item px-3">
                        <span className="nav-link d-flex justify-content-center align-content-center">
                          <img
                            src={hacker}
                            alt=""
                            width="40"
                            height="35"
                            className="nav-images"
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
