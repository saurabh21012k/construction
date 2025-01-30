import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "./http";
import AvatharImg from "../../assets/images/author-2.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

const ShowTestimonial = () => {
  const [testimonials, SetTestimonials] = useState([]);
  const fetchTestimonials = async () => {
    const res = await fetch(apiUrl + "get-testimonial", {
      method: "GET",
    });
    const result = await res.json();
    SetTestimonials(result.data);
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <>
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
          breakpoints={{
            200:{
                slidesPerView:1,
                spaceBetween:20,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:50,
            },
          }}
        >
          {testimonials &&
            testimonials.map((testimonial) => {
              return (
                
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
                          <p>
                           {testimonial.testimonial}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex meta">
                          <div>
                             <img src={`${fileUrl}uploads/testimonial/${testimonial.image}`} alt="testimonialIMG" className="w-50" />
                          </div>
                          <div className=" ps-3">
                            <div className="name">{testimonial.citation}</div>
                            <div className="designation">{testimonial.designation}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                
              );
            })}
          
        </Swiper>
      </section>
    </>
  );
};

export default ShowTestimonial;
