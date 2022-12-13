import React from "react";
// import ServCard from "./ServCard";
import { Samecom1 } from "./Samecomo";
// import ecom from "../imges/ecom.jpg";
import business from "../imges/business.jpg";
import blog from "../imges/blog.jpg";
import nprofit from "../imges/nprofite.png";
import personal from "../imges/personal.jpg";
import forum from "../imges/forum.jpg";
import serviceimg from '../imges/serviceimg.jpg';
import OurPrinc from "./OurPrinc";
import Scontact from "./Scontact";

const Sdata = [
  {
    img: blog,
    tit: "Blog Website",
    par: "lorem sadfhiu iueriuyb nvniure kj",
  },
  {
    img: personal,
    tit: "Ecommerce Website",
    par: "lorem sadfhiu iueriuyb nvniure kj",
  },
  {
    img: business,
    tit: "Business Websites",
    par: "lorem sadfhiu iueriuyb nvniure kj",
  },
  {
    img: personal,
    tit: "Personal Website",
    par: "lorem sadfhiu iueriuyb nvniure kj",
  },
  {
    img: nprofit,
    tit: "NON-Profit Website",
    par: "lorem sadfhiu iueriuyb nvniure kj",
  },
  {
    img: forum,
    tit: "Online Forum Website",
    par: "lorem sadfhiu iueriuyb nvniure kj",
  },
];

const Services = () => {
  return (
    <>
      <Samecom1
        title="We Are"
        tcol="orange"
        h="Iconic Coders"
        para="Provides you to Grow your Business Next Level"
        btn="Contact"
        img={serviceimg}
        go="/contact"
      />

      <div className="" >
        <div className="container pb-5">
          <div className="row">
            <div className="col-11 mx-auto my-5">
              <div className="row d-flex justify-content-center align-content-center">
                <div className="S-h ">
                  <div className="h ">
                    <div className="S_heading d-flex justify-content-center align-content-center">
                      <div>
                        <h2 className="fw-bold colr-lightyellow text-center">
                          Build Your Website with icode
                        </h2>
                        <span className="small-border"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-auto py-5 ">
                    {Sdata.map((elem, index) => {
                      return (
                        <>
                          <div
                            className="card col-xl-3 col-lg-4 col-md-4 mx-md-5 mb-5"
                            key={index}
                          >
                            <img
                              src={elem.img}
                              className="card-img-top my-2 Scard-img w-100"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title colr-blue">
                                {elem.tit}
                              </h5>
                              <p className="card-text">{elem.par}</p>
                              <a href="#" className="btn btn-orange px-4">
                                Order
                              </a>
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
      </div>

      <OurPrinc />
      <Scontact />
    </>
  );
};

export default Services;
