import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function LatestServices() {
  const [services, setServices] = useState([]);
  const fetchLatestServices = async () => {
    const res = await fetch(apiUrl + "get-latest-services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);

  return (
    <>
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
          {/* Swiper Slider for Services */}
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
            {services &&
              services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="col-md-10 col-lg-10">
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`${fileUrl}uploads/services/small/${service.image}`}
                          alt="ServiceImg"
                          className="w-100"
                        />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{service.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{service.short_desc}</p>
                        </div>
                        <Link
                          to={`/service/${service.id}`}
                          className="btn btn-primary small"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default LatestServices;
