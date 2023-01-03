import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const ModalPopup = ({modalIsOpen, setIsOpen}) => {

  return (
    <Modal isOpen={modalIsOpen} id="quoteModal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Request Free Quote</h5>
          <button
            type="button"
            className="close"
            onClick={() => setIsOpen(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form action="" method="post">
          <div className="contactFormNew row">
            <div className="col-sm-6 formField">
              <label>
                Name<span className="redClr">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contactInput"
              />
            </div>
            <div className="col-sm-6 formField">
              <label>
                Email<span className="redClr">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="contactInput"
              />
            </div>
            <div className="col-sm-6 formField">
              <label>Phone</label>
              <input
                type="text"
                name="contact"
                id="contact"
                className="contactInput"
              />
            </div>
            <div className="col-sm-6 formField">
              <label>
                How can we help?<span className="redClr">*</span>
              </label>
              <input
                type="text"
                name="How can we help"
                id="help"
                className="contactInput"
              />
            </div>
            <div className="col-sm-12 formField">
              <label>
                Message<span className="redClr">*</span>
              </label>
              <textarea
                rows="10"
                cols="2"
                name="info"
                id="info"
                className="contactInput"
              ></textarea>
            </div>
            <div className="col-sm-12 formField">
              <div className="newCaptchBox">
                <span className="capthhaNumber">
                  <img
                    id="cap"
                    className="vAlign"
                    alt=""
                    src="assets/img/cpat_img.png"
                  />
                  <input
                    type="text"
                    name="captcha"
                    id="captcha"
                    className="contactInput captchaInput"
                  />
                  <Link to="#" onClick="refcapt();" className="refreshLink">
                    Refresh
                  </Link>
                </span>
              </div>
              <div className="contactBtn">
                <input
                  type="submit"
                  className="formBtn smll"
                  value="Submit Information"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalPopup;
