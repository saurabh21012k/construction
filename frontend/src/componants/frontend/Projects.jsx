import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Fetch all projects
  const fetchAllProjects = async () => {
    const res = await fetch(apiUrl + "get-projects", { method: "GET" });
    const result = await res.json();
    if (result.status === true) {
      setProjects(result.data);
    }
  };

  // Fetch unique locations from backend
  const fetchLocations = async () => {
    const res = await fetch(apiUrl + 'get-project-locations', { method: "GET" });
    const result = await res.json();
    if (result.status === true) {
      setLocations(result.data); 
    }
  };

  // Fetch filtered projects based on selected location
  const fetchFilterProjects = async (location) => {
    const res = await fetch(`${apiUrl}get-filter-projects/${location}`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status === true) {
      setFilteredProjects(result.data);
    }
  };

  // Handle location change from dropdown
  const handleLocationChange = (e) => {
    const selectedLoc = e.target.value;
    setSelectedLocation(selectedLoc);
    fetchFilterProjects(selectedLoc);
  };

  useEffect(() => {
    fetchAllProjects();
    fetchLocations(); // Fetch dynamic locations from backend
    fetchFilterProjects("All");
  }, []);

  const projectsToDisplay = selectedLocation === "All" ? projects : filteredProjects;

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality , Integrity, Value"
          heading="Our Projects"
          text="We excel at transforming visions into reality through outstanding craftsmanship and precision."
        />

        {/* Location Filter Dropdown and Projects */}
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center mb-4">
              <span>Filter Projects by Location</span>
              <h2>Discover our diverse range of projects</h2>
              <p>Choose a location to filter projects by.</p>
              <div className="filter-dropdown">
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="form-select"
                >
                  <option value="All">All Locations</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row pt-4">
              {projectsToDisplay &&
                projectsToDisplay.map((project) => {
                  return (
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
                          <Link to={`/project/${project.id}`} className="btn btn-secondary ms-2 large">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
