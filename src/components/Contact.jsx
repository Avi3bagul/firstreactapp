import React from "react";
// import { useState } from "react";
import { useFormik } from "formik";
import signUpSchema from "../schemas";

const Contact = () => {
  const initialValues = {
    userName: "",
    email: "",
    massage: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
  });
  // console.log(errors);

  return (
    <>
      <div className="">
        <div className="container-fluid my-5">
          <div className="row m-0 ">
            <div className=" d-flex flex-column justify-content-center align-content-center mx-auto">
              <div className="C-head d-flex justify-content-center align-content-center pt-4">
                <div>
                  <h2 className="fw-bold colr-lightyellow text-center">
                    Contact Us
                  </h2>
                  <span className="small-border"></span>
                </div>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29789.293576024276!2d75.04492219567372!3d21.046218188514132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd92dd5424bc0e5%3A0x277a74549702f415!2sAmalner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1670296731883!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <form action="https://formspree.io/f/mrgdnjgd" method="POST" className="row py-5">
                <div className="col-md-5 col-lg-4 col-sm-12 mx-auto">
                  <div className="form-gorup py-2">
                    <label htmlFor="userName" className="pb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                      name="userName"
                      id="userName"
                      value={values.userName}
                      // onBlur={handleBlur}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <p className="text-danger m-1">{errors.userName}</p>
                  </div>
                  <div className="form-gorup py-2">
                    <label htmlFor="email" className="pb-1 ">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <p className="text-danger m-1">{errors.email}</p>
                  </div>

                  <div className="form-gorup py-2">
                    <label htmlFor="massage" className="pb-1">
                      Massage
                    </label>
                    <textarea
                      className="form-control"
                      id="massage"
                      rows="4"
                      name="massage"
                      value={values.massage}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    ></textarea>
                    <p className="text-danger m-1">{errors.massage}</p>
                  </div>
                  <div className="sub-btn">
                    <button
                      value="Submite"
                      type="submite"
                      className="btn btn-orange"
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
    </>
  );
};

export default Contact;
