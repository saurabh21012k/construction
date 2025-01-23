import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Hero from '../common/Hero'
import ProjectImg from "../../assets/images/construction3.jpg";


function Projects() {
  return (
    <>
    <Header />
    <main>
    <Hero
          preHeading="Quality , Integrity, Value"
          heading="Our Projects"
          text="We excell at transforming visions into realitythrough
            <br />
            outstanding craftsmanship and presise"
        />

        {/* Our Projects */}
        
              <section className="section-3 bg-light py-5">
                <div className="container py-5 ">
                  <div className="section-header text-center mb-4">
                    <span>Our Projects</span>
                    <h2>Discover our diverse range of projects </h2>
                    <p>
                      We offer a diverse array of constructiin services,spanning
                      residential, commercial, and industrial projects.
                    </p>
                  </div>
                  <div className="row pt-4">
                    <div className="col-md-4 col-lg-4">
                      <div className="item">
                        <div className="service-image">
                          <img src={ProjectImg} alt="ServiceImg" className="w-100" />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>Kolhapur Project</h3>
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
                          <img src={ProjectImg} alt="ServiceImg" className="w-100" />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>Kolhapur Project</h3>
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
                          <img src={ProjectImg} alt="ServiceImg" className="w-100" />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>Kolhapur Project</h3>
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
                          <img src={ProjectImg} alt="ServiceImg" className="w-100" />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>Lohegaon Project</h3>
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
                          <img src={ProjectImg} alt="ServiceImg" className="w-100" />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>Nipani Project</h3>
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
                          <img src={ProjectImg} alt="ServiceImg" className="w-100" />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>Pune Project</h3>
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

    </main>
    <Footer />
    </>
  )
}

export default Projects