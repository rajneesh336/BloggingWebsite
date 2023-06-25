import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-04">
        <div className="w-100">
          <div className="container">
            <div className="row ">
              <div className="col-sm-6" style={{ marginLeft: "-150px"}}>
                <h2 className="about">About us</h2>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quia atque nemo ad modi officiis iure, autem nulla
                  tenetur repellendus.
                </span>
              </div>
              <div className="col-sm-3" style={{ marginLeft: "60px"}}>
                <h2 className="about">Newsletter</h2>
                <p>Stay update with our latest</p>
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div className="col-sm-3" style={{ marginLeft: "88px"}}>
                <h2 className="about">Follow us</h2>
                <span>Let us be Social</span>
                <ul className="ftco-footer-social p-0">
                  <li className="ftco-animate mx-2">
                  <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li className="ftco-animate mx-2">
                  <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li className="ftco-animate mx-2">
                  <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12">
                <p className="copy" style={{ marginLeft: "266px" ,marginTop: "15px"}}>
                  Copyright &copy;Copyright ©2021 | Blooger Project designed and
                  made by Rajneesh tiwari
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
