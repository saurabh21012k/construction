import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import ServiceImg from "../../assets/images/construction1.jpg";

function Services() {
  return (
    <>
      <Header />
      <Hero
        preHeading="Quality , Integrity, Value"
        heading="Services"
        text="We excell at transforming visions into realitythrough
            <br />
            outstanding craftsmanship and presise"
      />

       {/* Our Services */}
      
            <section className="section-3 bg-light py-5">
              <div className="container py-5 ">
                <div className="section-header text-center mb-4">
                  <span>Our Services</span>
                  <h2>Our construction services</h2>
                  <p>
                    We offer a diverse array of constructiin services,spanning
                    residential, commercial, and industrial projects.
                  </p>
                </div>
                <div className="row pt-4">
                  <div className="col-md-4 col-lg-4 ">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="ServiceImg" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Speciality Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Libero incidunt eos, fuga animi ab impedit{" "}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary small">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 ">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="ServiceImg" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Speciality Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Libero incidunt eos, fuga animi ab impedit{" "}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary small">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 ">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="ServiceImg" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Speciality Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Libero incidunt eos, fuga animi ab impedit{" "}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary small">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="ServiceImg" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Speciality Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Libero incidunt eos, fuga animi ab impedit{" "}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary small">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="ServiceImg" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Speciality Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Libero incidunt eos, fuga animi ab impedit{" "}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary small">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="ServiceImg" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Speciality Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Libero incidunt eos, fuga animi ab impedit{" "}
                          </p>
                        </div>
                        <a href="#" className="btn btn-primary small">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>

      <Footer />
    </>
  );
}

export default Services;
