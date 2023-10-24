import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-4 col-xl-3 col-md-6">
            <div className="footer-links ms-5">
              <h4>Useful links</h4>

              <a href="#">Contact us</a>
              <br />
              <a href="#">Help &amp; About us</a>
              <br />
              <a href="#">Shipping &amp; Returns</a>
              <br />
              <a href="#">Refund Policy</a>
              <br />
              <a href="#">About us</a>
              <br />
              <a href="#">Services</a>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6">
            <h4>Contact info</h4>
            <a href="#">Contact us</a>
            <br />
            <a href="#">Help</a>
            <br />

            <a href="#">About us</a>
            <br />

            <span>Office Hours: 8AM - 11PM</span>
            <br />

            <span>Sunday - Wekend Day</span>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6">
            <h4>Subscribe Newslatter</h4>
            <p className="py-3">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
              commodo
            </p>
          </div>
          <div className="col-xl-3">
            <h4>Nouralhuda Y. Natsheh</h4>
          </div>
        </div>
      </div>
      <div className="container position-relative">
        <div className="footer-bottom pt-5 bottom-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="copy-right d-flex">
                <span className="text-white">
                  ©Copyright ©2022 Theme_pure. All Rights Reserved Copyright
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bottom-links d-flex align-items-center justify-content-end">
                <a href="#" className="px-4">
                  Terms and conditions
                </a>
                <a href="#">Privacy policy</a>
                <a href="# " className="px-4">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
