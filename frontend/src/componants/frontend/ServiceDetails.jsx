import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import ShowTestimonial from "../common/ShowTestimonial";
function ServiceDetails() {
  const params = useParams();
  const [service, setService] = useState([]);
  const [services, setServices] = useState([]);

  const fetchAllServices = async () => {
    const res = await fetch(`${apiUrl}get-services/`, {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
  };

  const fetchServices = async () => {
    const res = await fetch(`${apiUrl}get-services/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    setService(result.data);
  };

  useEffect(() => {
    fetchServices();
    fetchAllServices();
  }, [params.id]);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality , Integrity, Value"
          heading={`${service.title}`}
          text=""
        />
        <section className="section-10">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow border-0 sidebar">
                  <div className=" card-body px-4 py-4">
                    <h3 className="mt-2 mb-3">Our Services</h3>
                    <ul>
                      {services &&
                        services.map((service) => {
                          return (
                            <li>
                              <Link to={`/service/${service.id}`}>
                                {service.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div>
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/services/large/${service.image}`}
                    alt=""
                  />
                </div>

                <h3 className=" py-3">{service.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: service.content }}>
                  {service.content}
                </div>
              </div>
            </div>
          </div>
          <section className="section-11 bg-light">
            <div className="row ">
              <div className="col-md-12">
                <ShowTestimonial />
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServiceDetails;
