import React from "react";

const Foter = () => {
  return (
    <>
      <footer className=" bg-black py-5">
        <div className="container pt-lg-3 pt-1 colr-white">
          <div className="F">
            <div className="F-content">
              <div className="head my-4 pt-lg-5 pb-lg-3 pt-3 pb-1">
                <h1 className=" colr-white">icode</h1>
              </div>
              <div className="row my-5">
                <div className="col-lg-3 col-md-4 col-sm-6 pt-3 pt-md-0">
                  <ul
                    type="none"
                    className=" text-start ps-0 wl-s-2 fw-lighter"
                  >
                    <li className=" py-1">Addrs : Amalner</li>
                    <li className=" py-1">Telph : 9370941552</li>
                    <li className=" py-1">Email : Icode@gmail.com</li>
                    <li className=" py-1">Telph : 9087654321</li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 pt-3 pt-md-0">
                  <ul
                    type="none"
                    className=" text-start ps-0 wl-s-2 fw-lighter"
                  >
                    <li className=" py-1">
                      <a href="">Main Home</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Contact</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Portfolio</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Shop</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Landing</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 pt-3 pt-md-0">
                  <ul
                    type="none"
                    className=" text-start ps-0 wl-s-2 fw-lighter"
                  >
                    <li className=" py-1">
                      <a href="">About us</a>
                    </li>
                    <li className=" py-1">
                      <a href="">About me</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Our Process</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Our Team</a>
                    </li>
                    <li className=" py-1">
                      <a href="">Pricing Plans</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5 col-md-12 d-flex pt-5 pt-md-0 flex-column justify-content-center align-content-center">
                  <div className="">
                    <div className="h mb-3">
                      <h3>Our icode</h3>
                    </div>
                    <form action="" method="post" className="my-3">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-100 bg-transparent border-0 border-bottom px-3 py-2 colr-white"
                      />
                    </form>
                    <div className="btn btn-outline-orange my-3 sub-btn">
                      Subcribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Foter;
