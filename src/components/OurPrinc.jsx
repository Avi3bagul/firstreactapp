import React from "react";
import blog from '../imges/blog.jpg'

const Pdata = [
    {
      icon: "clipboard-outline",
      tit: "Simplicity",
      para: "User friendly intractive websites"
    },
    {
        icon: "infinite-outline",
        tit: "Reusability",
        para: "Reuseable devlopment for Future use"
      },
      {
        icon: "build-outline",
        tit: "Functionality",
        para: "Functional Website devlopment"
      }
  ]
const OurPrinc = () => {
  return (
    <>
      <div className="">
        <div className="container mb-3 mt-5 py-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="d-flex flex-column justify-content-center align-content-center ms-0">
                <div className="OurPrinc">
                  <div className="S_H">
                    <h2 className="fw-bold colr-lightyellow text-center">
                      Our Principles
                    </h2>
                    <span className="small-border"></span>
                  </div>
                </div>
                <div className="row my-5">
                {Pdata.map((elem, ind) => {
                      return (
                        <>
                          <div
                            className="card col-xl-3 col-lg-4 col-md-4 mx-md-5 mb-5 d-flex flex-column justify-content-center align-content-center shadow"
                            key={ind}
                          >
                            <div className="Pimg w-100 d-flex align-content-center justify-content-center pt-5">
                                {/* <img src={elem.img} alt="" className="pimg shadow"/> */}
                                <ion-icon name={elem.icon} className="pimg shadow"></ion-icon>
                            </div>
                            <div className="card-body text-center py-5">
                              <h5 className="card-title colr-lightyellow fs-4 fw-bold">
                                {elem.tit}
                              </h5>
                              <p className="card-text">{elem.para}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPrinc;
