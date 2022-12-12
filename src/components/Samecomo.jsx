import React from "react";
import { NavLink } from "react-router-dom";
// import H_bg_img from '../imges/H_bg_img2.jpg';
import hacker from "../imges/hacker.png";
// import heroimg1 from '../imges/heroimg1.png';
// import employeeimg from "../imges/employeeimg.png";
import bgimg2 from '../imges/bgimg2.png'



const Samecomo = (props) => {
  return (
    <>
      <div className="" >
        <div className="container mb-5 pb-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row h-w-100vh d-flex justify-content-center align-content-center ms-0">
                <div className="col-md-6 d-flex flex-column justify-content-center align-content-center mt-5 mx-auto">
                  <div className="d-flex justify-content-center align-content-center flex-column ps-sm-5 ps-lg-0 text-c ps-md-0">
                    <div className="H pb-1">
                      <h1 className=" fw-bold colr-lightyellow wl-s-2">
                        {props.title} <span className="colr-blue">{props.h}</span> 
                      </h1>
                    </div>
                    <div className="H-para pb-3">
                      <p className="para-fs">{props.para}</p>
                    </div>
                    <div className="">
                      <button className=" btn btn-outline-orange fs-5">
                        <NavLink to={props.go} className="nav-link">
                          {props.btn}
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-content-end">
                  <div className="himg">
                    <img src={props.img} alt="" className="img-fluid H-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Samecom1 = (props) => {
  return (
    <>
      <div className="bgimg" style={{background: `url(${props.bg})`, backgroundRepeat: `no-repeat` , backgroundSize: `cover`}}>
        <div className="container mb-5 pb-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row h-w-100vh d-flex justify-content-between align-content-center m-0">
                <div className="col-md-5 d-flex justify-content-start align-content-center">
                  <div className="himg">
                    <img src={props.img} alt="" className="img-fluid H-img" />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-content-end my-3">
                  <div className="d-flex justify-content-center align-content-end flex-column">
                    <div className="H pb-1">
                      <h1 className={`fw-bold text-c text-${props.tcol}`}>
                        {props.title} <span className="colr-blue">{props.h}</span> 
                      </h1>
                    </div>
                    <div className="H-para pb-3 w-100">
                      <p className="para-fs">{props.para}</p>
                    </div>
                    <div className="text-c">
                      <button className={`btn btn-outline-${props.tcol} fs-5`}>
                      <NavLink to={props.go} className="nav-link">
                          {props.btn}
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Samecomo;
export { Samecom1 };
