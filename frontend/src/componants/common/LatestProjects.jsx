import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "../common/http";


function LatestProjects() {
  const [projects, setProjects] = useState([]);
  const fetchLatestProjects = async () => {
    const res = await fetch(apiUrl + "get-latest-projects?limit=3", {
      method: "GET",
    });
    const result = await res.json();
    console.log(result)
    if(result.status == true){
      setProjects(result.data);
    }
  };

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  return (
    <>
    <section className="section-3 bg-light py-5">
      <div className="container py-5 ">
        <div className="section-header text-center mb-4">
          <span>Our Projects</span>
          <h2>Discover our diverse range of projects </h2>
          <p>
            We offer a diverse array of constructiin services,spanning
            residential, commercial, and industrial projects.
          </p>
        </div>
        <div className="row pt-4">
          {projects &&
            projects.map((project) => {
               return  (
                <div className="col-md-4 col-lg-4">
                      <div className="item">
                        <div className="service-image">
                          <img src={`${fileUrl}uploads/projects/small/${project.image}`} alt="ProjectImg" className="w-100"  />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>{project.title}</h3>
                          </div>
                          <div className="service-content">
                            <p>
                            {project.short_desc}
                            </p>
                          </div>
                          <a href="#" className="btn btn-primary small">
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
              );
            })}
        </div>
      </div>
    </section>
    </>
  );
}

export default LatestProjects;
