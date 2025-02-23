import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";

function ServiceDetails() {
  const params = useParams();
  const [service, setService] = useState({});
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]); // Store filtered projects

  // Fetch all services
  const fetchAllServices = async () => {
    const res = await fetch(`${apiUrl}get-services/`, { method: "GET" });
    const result = await res.json();
    setServices(result.data);
  };

  // Fetch service details
  const fetchServices = async () => {
    const res = await fetch(`${apiUrl}get-services/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    setService(result.data);

  };

  // Fetch filtered projects based on selected location
  const fetchFilterProjects = async (serviceId) => {
    const res = await fetch(`${apiUrl}getProjectsByServiceId/${serviceId}`, {
      method: "GET",
    });
    const result = await res.json();

    if (result.status === true) {
      setProjects(result.data);
    } else {
      setProjects(null);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchServices();
      fetchFilterProjects(params.id);
    }
  }, [params.id]);

  useEffect(() => {
      fetchServices();
      fetchAllServices();
      fetchFilterProjects(params.id);
  }, []);

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
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-3">Our Services</h3>
                    <ul>
                      {services.map((serviceItem) => (
                        <li key={serviceItem.id}>
                          <Link to={`/service/${serviceItem.id}`}>
                            {serviceItem.title}
                          </Link>
                        </li>
                      ))}
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

                <h3 className="py-3">{service.title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: service.content }}
                ></div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="section-11 bg-light">
            <div className="container">
              <h2 className="text-center my-4">Related Projects</h2>
              <div className="row pt-4">
              {projects && projects.length > 0 ? (
                  projects.map((project) => (
                    <div className="col-md-4 col-lg-4" key={project.id}>
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
                          <Link
                            to={`/project/${project.id}`}
                            className="btn btn-secondary ms-2 large"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No related projects found.</p>
                )}
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
