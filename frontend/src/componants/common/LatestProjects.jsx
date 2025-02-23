import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchLatestProjects = async () => {
    const res = await fetch(apiUrl + "get-projects", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status === true) {
      setProjects(result.data);
    }
  };

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  return (
    <>
      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center mb-4">
            <span>Our Projects</span>
            <h2>Discover our diverse range of projects</h2>
            <p>
              We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Swiper Slider for Projects */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {projects &&
              projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="item">
                    <div className="service-image">
                      <img
                        src={`${fileUrl}uploads/projects/small/${project.image}`}
                        alt="ProjectImg"
                        className="w-100"
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{project.title}</h3>
                      </div>
                      <div className="service-content">
                        <p>{project.short_desc}</p>
                      </div>
                      <Link to={`/project/${project.id}`} className="btn btn-primary small">
                        Read more
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default LatestProjects;
