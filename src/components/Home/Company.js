import React, { Component } from "react";
export class Company extends Component {
  render() {
    return (
      <section className="companies">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-center">
            <div className="col-md-2 company-item">
              <img
                src="img/companies/1.png"
                alt="Company logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 company-item">
              <img
                src="img/companies/2.png"
                alt="Company logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 company-item">
              <img
                src="img/companies/3.png"
                alt="Company logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 company-item">
              <img
                src="img/companies/4.png"
                alt="Company logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 company-item">
              <img
                src="img/companies/5.png"
                alt="Company logo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Company;
