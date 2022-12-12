import React from "react";
import Opbgimg from "../imges/Opbgimg.png";
import { useFormik } from "formik";
import {signUpSchema1} from "../schemas";

const Scontact = () => {
  const initialValues = {
    username: "",
    email: "",
    mob: "",
    msg: "",
  };
  const { values, errors, handleBlur, handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema1,
  });

  return (
    <>
      <div className="bgimg" style={{ backgroundImage: `url(${Opbgimg})` }}>
        <div className="container py-5 mt-5 ">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row  d-flex justify-content-center align-content-center ms-0">
                <div className="col-md-5 d-flex flex-column justify-content-between align-content-center mt-5 pt-md-5 pt-sm-0">
                  <div className="d-flex justify-content-center align-content-center flex-column ps-sm-5 ps-lg-0 text-c ps-md-0 mt-5 ">
                    <div className="H-para">
                      <p className="para-fs">
                        ARE YOU READY TO CLIMBE THE LADDER OF SUCCESS WITH US
                      </p>
                    </div>
                    <div className="H pb-1">
                      <h1 className=" fw-bold text-light wl-s-2">
                        Connect With Our Experts Now
                        <span className="colr-blue"></span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center align-content-center row position-relative m-lg-0 mt-md-0 mt-5">
                  <div className="col-sm-12 col-lg-7 row Scon pe-0 ps-0">
                    <form
                      action="https://formspree.io/f/mrgdnjgd"
                      method="POST"
                      className="bg-dark col-11 w-100"
                    >
                      <div className="h text-center py-4">
                        <h3 className="text-light fw-bold">Join us</h3>
                      </div>
                      <div className="form-gorup p-2 col-12 ">
                        <div className="my-3">
                          <label
                            htmlFor="username"
                            className="pb-1 colr-lightyellow"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="form-control bg-transparent text-light"
                            placeholder="Enter your Name"
                            name="username"
                            id="username"
                            autoComplete="off"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                           
                          />
                          <p className="text-light m-1">{errors.username}</p>
                        </div>
                        <div className="my-3">
                          <label
                            htmlFor="email"
                            className="pb-1 colr-lightyellow"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control bg-transparent text-light"
                            placeholder="Enter Email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            value={values.email}
                            onChange={handleChange}
                            
                          />
                          <p className="text-light m-1">{errors.email} </p>
                        </div>
                        <div className="my-3">
                          <label
                            htmlFor="mob"
                            className="pb-1 colr-lightyellow"
                          >
                            Mobile no.
                          </label>
                          <input
                            type="number"
                            className="form-control bg-transparent text-light"
                            placeholder="Enter Mobile no."
                            name="mob"
                            id="mob"
                            autoComplete="off"
                            value={values.mob}
                            onChange={handleChange}
                            
                          />
                          <p className="text-light m-1">{errors.mob}</p>
                        </div>
                        <div className="my-3">
                          <label
                            htmlFor="msg"
                            className="pb-1 colr-lightyellow"
                          >
                            Massage
                          </label>
                          <textarea
                            className="form-control bg-transparent text-light"
                            placeholder="massage"
                            id="msg"
                            rows="4"
                            name="msg"
                            value={values.msg}
                            onChange={handleChange}
                          ></textarea>
                          <p className="text-light m-1">{errors.msg}</p>
                        </div>
                        <div className="sub-btn mb-3">
                          <button
                            value="Submite"
                            type="submite"
                            className="btn btn-outline-light jhasdf adsf"
                          >
                            Submite
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Scontact;
