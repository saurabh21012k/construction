import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";

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
                  <a className="btn btn-primary">Contact now</a>
                  <a className="btn btn-secondary ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}

        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} alt="About Image" className="w-100" />
              </div>
              <div className="col-md-6 py-3">
                <span>About us</span>
                <h2>Crafting structures that last lifetime</h2>
                <p>
                  Crafting structures that last a lifetime involves meticulous
                  planning, durable materials, and innovative design. Engineers
                  and architects must focus on resilience, ensuring structures
                  withstand time, weather, and usage. Sustainability plays a key
                  role, integrating eco-friendly solutions.{" "}
                </p>
                <p>
                  Timeless structures reflect thoughtful craftsmanship and
                  adaptability to evolving needs. By combining traditional
                  techniques with modern advancements, these creations stand as
                  testaments to human ingenuity. A structure's longevity is
                  rooted in quality, foresight, and sustainable maintenance
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

     <Footer />
      
    </>
  );
};

export default Home;
