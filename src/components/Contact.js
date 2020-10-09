import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <section className="contact contact-div">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Contact us:</h1>
              <div className="mb-3  contact-label">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label "
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3 contact-label">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="button" className="btn btn-outline-secondary">
                Send
              </button>
            </div>
            <div className="col-md-5">
              <img src="img/handshake.svg" alt="Contact" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
