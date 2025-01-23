import React from "react";

import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg from "../../assets/images/construction1.jpg";
import ProjectImg from "../../assets/images/construction3.jpg";
import BlogImg from "../../assets/images/construction4.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AvatharImg from "../../assets/images/author-2.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

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
                  <a className="btn btn-primary large">Contact now</a>
                  <a className="btn btn-secondary ms-2 large">View Projects</a>
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
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
                  <a href="#" className="btn btn-primary small">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testiminials */}
      <section className="section-5 py-5">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span>Testimonials</span>
            <h2>What peoples are saying about us</h2>
            <p>
              We offer a diverse array of constructiin services,spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
        </div>
        <Swiper
        modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          
        >
          <SwiperSlide>
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="ratting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="content pt-4 pb-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi ut, sunt fuga, fugit voluptas esse error, dolore mollitia obcaecati quos nulla adipisci velit quam ipsa corrupti facere nobis quas! Nihil dolor cupiditate molestiae repudiandae reiciendis placeat voluptatum quam, temporibus aspernatur amet rem alias officia eius dolores odio, nesciunt veritatis.</p>
                </div>
                <hr/> 
                <div className="d-flex meta">
                      <div>
                          <img src={AvatharImg} alt="Client-Img" />
                      </div>
                      <div className=" ps-3">
                          <div className="name">Jhon Doe</div>
                          <div>CEO</div>
                      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="ratting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="content pt-4 pb-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi ut, sunt fuga, fugit voluptas esse error, dolore mollitia obcaecati quos nulla adipisci velit quam ipsa corrupti facere nobis quas! Nihil dolor cupiditate molestiae repudiandae reiciendis placeat voluptatum quam, temporibus aspernatur amet rem alias officia eius dolores odio, nesciunt veritatis.</p>
                </div>
                <hr/> 
                <div className="d-flex meta">
                      <div>
                          <img src={AvatharImg} alt="Client-Img" />
                      </div>
                      <div className=" ps-3">
                          <div className="name">Jhon Doe</div>
                          <div>CEO2</div>
                      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="ratting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="content pt-4 pb-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi ut, sunt fuga, fugit voluptas esse error, dolore mollitia obcaecati quos nulla adipisci velit quam ipsa corrupti facere nobis quas! Nihil dolor cupiditate molestiae repudiandae reiciendis placeat voluptatum quam, temporibus aspernatur amet rem alias officia eius dolores odio, nesciunt veritatis.</p>
                </div>
                <hr/> 
                <div className="d-flex meta">
                      <div>
                          <img src={AvatharImg} alt="Client-Img" />
                      </div>
                      <div className=" ps-3">
                          <div className="name">Jhon Doe</div>
                          <div>CEO3</div>
                      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <div className="ratting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="content pt-4 pb-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi ut, sunt fuga, fugit voluptas esse error, dolore mollitia obcaecati quos nulla adipisci velit quam ipsa corrupti facere nobis quas! Nihil dolor cupiditate molestiae repudiandae reiciendis placeat voluptatum quam, temporibus aspernatur amet rem alias officia eius dolores odio, nesciunt veritatis.</p>
                </div>
                <hr/> 
                <div className="d-flex meta">
                      <div>
                          <img src={AvatharImg} alt="Client-Img" />
                      </div>
                      <div className=" ps-3">
                          <div className="name">Jhon Doe</div>
                          <div>CEO4</div>
                      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="section-6 bg-light py-5">
        <div className="container">
        <div className="section-header text-center mb-4">
            <span>Blog and News</span>
            <h2>Articals and Blog posts</h2>
            <p>
              We offer a diverse array of constructiin services,spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="row pt-3">
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-img-top"> 
                  <img src={BlogImg} alt="BlogImg" className="w-100" />

                </div>
                <div className="card-body p-5">
                    <div className="mb-3">
                      <a href="#" className="title ">Dummy Blog Title</a>
                    </div>
                    <a href="#" className="btn btn-primary small"> Read More</a>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-img-top"> 
                  <img src={BlogImg} alt="BlogImg" className="w-100" />

                </div>
                <div className="card-body p-5">
                    <div className="mb-3">
                      <a href="#" className="title ">Dummy Blog Title</a>
                    </div>
                    <a href="#" className="btn btn-primary small"> Read More</a>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-img-top"> 
                  <img src={BlogImg} alt="BlogImg" className="w-100" />

                </div>
                <div className="card-body p-5">
                    <div className="mb-3">
                      <a href="#" className="title ">Dummy Blog Title</a>
                    </div>
                    <a href="#" className="btn btn-primary small"> Read More</a>
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
