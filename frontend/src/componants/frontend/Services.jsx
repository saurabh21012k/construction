import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

function Services() {
 const[services, setServices] = useState([]);
  const fetchAllServices = async () => {
  const res = await fetch(apiUrl + "get-services", {
    'method': 'GET',
  });
  const result = await res.json();
  setServices(result.data)
 }

 useEffect(()=>{
  fetchAllServices()
 },[]);


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
                  {
                                      services && services.map(service=>{
                                        return (
                                              <div className="col-md-4 col-lg-4 ">
                                              <div className="item">
                                                <div className="service-image">
                                                  <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="ServiceImg" className="w-100" />
                                                </div>
                                                <div className="service-body">
                                                  <div className="service-title">
                                                    <h3>{service.title}</h3>
                                                  </div>
                                                  <div className="service-content">
                                                    <p>
                                                      {service.short_desc}
                                                    </p>
                                                  </div>
                                                  <Link to={`/service/${service.id}`} className="btn btn-primary small">
                                                    Read more
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                      })
                                  }
                                 
                  
                </div>
                
              </div>
            </section>

      <Footer />
    </>
  );
}

export default Services;
