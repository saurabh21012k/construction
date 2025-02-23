import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchLatestArticles = async () => {
    const res = await fetch(apiUrl + "get-articles", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status === true) {
      setArticles(result.data);
    }
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  return (
    <>
      <section className="section-6 bg-light py-5">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span>Blog and News</span>
            <h2>Articles and Blog Posts</h2>
            <p>
              We offer a diverse array of construction services, spanning
              residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Swiper Slider for Articles */}
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
            {articles &&
              articles.map((article) => (
                <SwiperSlide key={article.id}>
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img
                        src={`${fileUrl}uploads/articles/small/${article.image}`}
                        alt="ArticleImg"
                        className="w-100"
                      />
                    </div>
                    <div className="card-body p-4">
                      <h3 className="mb-3">{article.title}</h3>
                      <Link
                        to={`/article/${article.id}`}
                        className="btn btn-primary small"
                      >
                        Read More
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

export default LatestArticles;
