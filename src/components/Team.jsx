import React from "react";
import blog from "../imges/blog.jpg";
import emplo1img from "../imges/emplo1img.jpg";
import arrowimg from '../imges/arrowimg.jpg';
const Team = () => {
  return (
    <>
      <div className="">
        <div className="container pb-5 my-5">
          <div className="row">
            <div className="col-11 mx-auto my-5">
              <div className="row d-flex justify-content-around align-content-center ">
                <div className="S_heading d-flex justify-content-center align-content-center">
                  <div>
                    <h2 className="fw-bold colr-lightyellow text-center">
                      Technical Team
                    </h2>
                    <span className="small-border"></span>
                  </div>
                </div>
                <div className="row d-flex justify-content-around mx-auto pt-5">
                  <div className="col-md-4 col-lg-3 col-sm-12 border border-1 border-primary">
                    <a href="#" className="nav-link">
                      <div className="emplo1">
                        <div className="img">
                          <img
                            src={emplo1img}
                            alt=""
                            className="emploimg"
                          />
                        </div>
                      </div>
                      <div className="emploName text-center ">
                        <p className="fs-4 colr-lightyellow fw-bold mt-4 mb-1">
                          Avinash Bagul
                        </p>
                        <p className="mb-4">Frontend Devloper</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="emploCenterimg">
                      <img src={arrowimg} alt="" className="arrowimg" />
                      
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-3 col-sm-12 border border-1 border-primary mt-5 m-md-0">
                    <a href="#" className="nav-link emplo-hover">
                      <div className="emplo1">
                        <div className="img">
                          <img src={emplo1img} alt="" className="emploimg" />
                        </div>
                      </div>
                      <div className="emploName text-center">
                        <p className="fs-4 colr-lightyellow fw-bold mt-4 mb-1">
                          Avinash Bagul
                        </p>
                        <p className="mb-4">Backend Devloper</p>
                      </div>
                    </a>
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

export default Team;
