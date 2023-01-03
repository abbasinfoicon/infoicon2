import React from "react";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import Address from "../components/templates/Address";
import Locations from "../components/templates/Locations";
import OfficeTime from "../components/templates/OfficeTime";
import Sidebar from "../components/templates/Sidebar";

const Contact = () => {
  return (
    <>
      <Banner
        title={"Contact us"}
        banner={"assets/img/slider/inner-banner.jpg"}
      />

      <Breadcrumb name={"Contact us"} />

      <div className="midCon">
        <div className="container clearfix">
          <div className="midLft">
            <div className="contactTopNew wow fadeInDown" data-wow-delay="0.3s">
              Let's talk business
            </div>
            <div className="wow fadeInDown" data-wow-delay="0.3s">
              <form action="/contactus" method="post">
                <div className="contactFormNew">
                  <ul>
                    <li className="clearfix">
                      <div className="formField half fl">
                        <div className="contactBot">
                          <label>
                            Name<span className="redClr">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="contactInput"
                            required=""
                          />
                        </div>
                        <div className="contactBot">
                          <label>
                            Email<span className="redClr">*</span>
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="contactInput"
                            required=""
                          />
                        </div>
                        <div>
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="contactInput"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="formField half fr">
                        <div className="contactBot">
                          <label>
                            How can we help?<span className="redClr">*</span>
                          </label>
                          <input
                            type="text"
                            name="howcanhelp"
                            id="howcanhelp"
                            className="contactInput"
                            required=""
                          />
                        </div>
                        <div>
                          <label>
                            Message<span className="redClr">*</span>
                          </label>
                          <textarea
                            rows="10"
                            cols="2"
                            name="message"
                            id="info"
                            className="contactInput"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contactBtn">
                        <input
                          type="submit"
                          className="formBtn smll"
                          value="Submit Information"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>

          <div className="midRgt contct">
            <Sidebar />
            <OfficeTime />
          </div>
        </div>
      </div>
      
      <Address />
      <Locations />
    </>
  );
};

export default Contact;
