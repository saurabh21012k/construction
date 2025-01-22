import React from 'react'

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
                  <a href="">Specility Construction</a>
                </li>
                <li>
                  <a href="">Civil Construction</a>
                </li>
                <li>
                  <a href="">Residential Construction</a>
                </li>
                <li>
                  <a href="">Corporate Construction</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="mb-3">Quick Links</h3>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="mb-3">Contact Us</h3>
              <ul>
                <li>
                  <a href="">(888-000-0000)</a>
                </li>
                <li>
                  <a href="">info@jadhavcons.com</a>
                </li>

                <p href="">
                  Lohegaon
                  <br />
                  411047, Post Office-Lohegaon, District-Pune, Maharashtra.
                </p>
              </ul>
            </div>
            <hr />
            <div className="text-center py-2">
              2025 © Jadhav Constructions. All rights reserved.{" "}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer