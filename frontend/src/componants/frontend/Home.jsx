import React, { useEffect, useState } from "react";


import Header from "../common/Header";
import Footer from "../common/Footer";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import "swiper/css";
import 'swiper/css/pagination';
import About from "../common/About";
import LatestServices from "../common/LatestServices";
import LatestProjects from "../common/LatestProjects";
import { Link } from "react-router-dom";
import LatestArticles from "../common/LatestArticles";
import ShowTestimonial from "../common/ShowTestimonial";

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
                  <Link to='/projects' className="btn btn-secondary ms-2 large">View Projects</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}

       <About/>
      </main>

      {/* Our Services */}
      <LatestServices/>
      
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

     <LatestProjects/>
     
      {/* Testiminials */}
      <ShowTestimonial/>

      {/* <section className="section-5 py-5">
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
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
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
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
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
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
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
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    claaName="bi bi-star-fill"
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
      </section> */}


           {/* Articles */}

           <LatestArticles/>
      {/* <section className="section-6 bg-light py-5">
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

      </section> */}

      <Footer />
    </>
  );
};

export default Home;
