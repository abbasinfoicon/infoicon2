import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter_section text-center">
      <div className="section-head text-white">
        <h5>
          <i className="fas fa-bullhorn"></i> Subscribe to Infoicon
        </h5>
      </div>
      <h5 className="hd">Sign Up for the newsletter</h5>
      <div className="subscribe-input-field">
        <form action="POST">
          <div className="subscribe-mail-box text-left">
            <input
              className=" subscribe-mail-field "
              type="email "
              name="email "
              placeholder="Enter Your Email.... "
              required=" "
            />
            <button className="subscribe-btn " type="submit " name="submit ">
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
