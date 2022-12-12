import React from "react";
import { NavLink } from "react-router-dom";
import whyimg from '../imges/whyimg.jpg';

const Why = () => {
  return (
    <>
      <div className="" style={{backgroundImage: `url(${whyimg})`, backgroundRepeat:`no-repeat`, backgroundSize: `cover`, backgroundAttachment: `fixed`}}>
      <div className="">
        <div className="container pb-5 ">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row h-w-100vh d-flex justify-content-center align-content-center ms-0">
                <div className="content text-center colr-white fw-bold">
                    <div className="Why-c">
                        <div className="para py-3">
                            <p className="W-para fs-4">
                                Drop us a line! We are here to answer your questions 24/7
                            </p>
                        </div>
                        <div className="h ">
                            <h2 className="fw-bold text-uppercase">need a constultation?</h2>
                        </div>
                        <div className=" py-5">
                            <NavLink to="/contact">
                                <button className="btn btn-orange fs-5 navlink">Contact Now</button>
                            </NavLink>
                        </div>
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

export default Why;
