import React from "react";
import { Link } from "react-router-dom";
import { homeUrl } from "./http";

function Footer() {
  return (
    <footer>
      <div className="container pt-5  ">
        <div className="row">
          <div className="col-md-3">
            <h3 className="mb-3">Jadhav Constructions</h3>
            <div className="pe-5">
              <p>
                Our post-construction services gives you pease of mind knowing
                that we are still here for you even after.{" "}
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href={` ${homeUrl}service/19`}>Specility Construction</a>
              </li>
              <li>
                <a href={` ${homeUrl}service/20`}>Civil Construction</a>
              </li>
              <li>
                <a href={` ${homeUrl}service/21`}>Residential Construction</a>
              </li>
              <li>
                <a href={` ${homeUrl}service/22`}>Corporate Construction</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href={` ${homeUrl}about`}>About Us</a>
              </li>
              <li>
                <a href={` ${homeUrl}services`}>Services</a>
              </li>
              <li>
                <a href={` ${homeUrl}projects`}>Projects</a>
              </li>
              <li>
                <a href={` ${homeUrl}blogs`}>Blogs</a>
              </li>
              <li>
                <a href={` ${homeUrl}contact-us`}>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              {/* Phone Number - Opens Dialer */}
              <li>
                <a href="tel:+8880000000">(888-000-0000)</a>
              </li>

              {/* Email - Opens Email Client */}
              <li>
                <a href="mailto:info@jadhavcons.com">info@jadhavcons.com</a>
              </li>

              {/* Address - Opens Google Maps */}
              <li>
                <a
                  href="https://maps.app.goo.gl/BWkqx6dRTFqQDrbt5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tingare Nagar
                  <br />
                  411047, Post Office-Lohegaon, District-Pune, Maharashtra.
                </a>
              </li>
            </ul>
          </div>

          <hr />
          <div className="text-center py-2">
            2025 © Jadhav Constructions. All rights reserved.{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
