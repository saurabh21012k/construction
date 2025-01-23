import React from "react";

import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg from "../../assets/images/construction1.jpg";
import ProjectImg from "../../assets/images/construction3.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Construction</span>
                <h1>
                  Crafting Dreams with <br /> Precision and Excellence.
                </h1>
                <p>
                  We excell at transforming visions into realitythrough
                  outstanding craftsmanship and presise
                  <br />
                  attention to details. With years of experience and dedication
                  to quality.
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary">Contact now</a>
                  <a className="btn btn-secondary ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}

        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} alt="About Image" className="w-100" />
              </div>
              <div className="col-md-6 py-3">
                <span>About us</span>
                <h2>Crafting structures that last lifetime</h2>
                <p>
                  Crafting structures that last a lifetime involves meticulous
                  planning, durable materials, and innovative design. Engineers
                  and architects must focus on resilience, ensuring structures
                  withstand time, weather, and usage. Sustainability plays a key
                  role, integrating eco-friendly solutions.{" "}
                </p>
                <p>
                  Timeless structures reflect thoughtful craftsmanship and
                  adaptability to evolving needs. By combining traditional
                  techniques with modern advancements, these creations stand as
                  testaments to human ingenuity. A structure's longevity is
                  rooted in quality, foresight, and sustainable maintenance
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Our Services */}

      <section className="section-3 bg-light py-5">
        <div className="container-fluid py-5 ">
          <div className="section-header text-center mb-4">
            <span>Our Services</span>
            <h2>Our construction services</h2>
            <p>
              We offer a diverse array of constructiin services,spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-3 col-lg-3 ">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-4 py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Why choose Us</span>
            <h2>Discover our wide range of projects</h2>
            <p>
              Created in close partnership with our clients and collaborators
              this approch merge industry expertise,
              <br />
              decades of experience , innovation and flexibility to consistantly
              deliver Excellence.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="card shadow border-0 p-4">
                <div className="card-icon">
                  <img src={Icon1} alt="Icon-1" />
                </div>
                <div className="card-title mt-3">
                  <h3>Cutting-Edge Solutions</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic eaque mollitia, velit voluptas numquam tempora
                    reprehenderit voluptatibus sapiente. Ut sit deserunt
                    asperiores aperiam facilis id.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 p-4">
                <div className="card-icon">
                  <img src={Icon2} alt="Icon-2" />
                </div>
                <div className="card-title mt-3">
                  <h3>Cutting-Edge Solutions</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic eaque mollitia, velit voluptas numquam tempora
                    reprehenderit voluptatibus sapiente. Ut sit deserunt
                    asperiores aperiam facilis id.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 p-4">
                <div className="card-icon">
                  <img src={Icon3} alt="Icon-3" />
                </div>
                <div className="card-title mt-3">
                  <h3>Cutting-Edge Solutions</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic eaque mollitia, velit voluptas numquam tempora
                    reprehenderit voluptatibus sapiente. Ut sit deserunt
                    asperiores aperiam facilis id.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}

      <section className="section-3 bg-light py-5">
        <div className="container-fluid py-5 ">
          <div className="section-header text-center mb-4">
            <span>Our Projects</span>
            <h2>Discover our diverse range of projects </h2>
            <p>
              We offer a diverse array of constructiin services,spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
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
                  <a href="#" className="btn btn-primary">
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
};

export default Home;
