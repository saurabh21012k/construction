import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BlogImg from "../../assets/images/construction4.jpg";
import Hero from '../common/Hero';


function Blogs() {
  return (
    <>
    <Header/>
    <main>
    <Hero
        preHeading="Quality , Integrity, Value"
        heading="Blogs"
        text="We excell at transforming visions into realitythrough
            <br />
            outstanding craftsmanship and presise"
      />

      <section className="section-6 bg-light py-5">
              <div className="container">
              <div className="section-header text-center mb-4">
                  <span>Blog and News</span>
                  <h2>Articals and Blog posts</h2>
                  <p>
                    We offer a diverse array of constructiin services,spanning
                    residential, commercial, and industrial projects.
                  </p>
                </div>
                <div className="row pt-3">
                  <div className="col-md-4">
                    <div className="card shadow border-0">
                      <div className="card-img-top"> 
                        <img src={BlogImg} alt="BlogImg" className="w-100" />
      
                      </div>
                      <div className="card-body p-5">
                          <div className="mb-3">
                            <a href="#" className="title ">Dummy Blog Title</a>
                          </div>
                          <a href="#" className="btn btn-primary small"> Read More</a>
                      </div>
      
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow border-0">
                      <div className="card-img-top"> 
                        <img src={BlogImg} alt="BlogImg" className="w-100" />
      
                      </div>
                      <div className="card-body p-5">
                          <div className="mb-3">
                            <a href="#" className="title ">Dummy Blog Title</a>
                          </div>
                          <a href="#" className="btn btn-primary small"> Read More</a>
                      </div>
      
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow border-0">
                      <div className="card-img-top"> 
                        <img src={BlogImg} alt="BlogImg" className="w-100" />
      
                      </div>
                      <div className="card-body p-5">
                          <div className="mb-3">
                            <a href="#" className="title ">Dummy Blog Title</a>
                          </div>
                          <a href="#" className="btn btn-primary small"> Read More</a>
                      </div>
      
                    </div>
                  </div>
                  
                </div>
      
              </div>
      
            </section>

    </main>

    <Footer/>
    </>
  )
}

export default Blogs