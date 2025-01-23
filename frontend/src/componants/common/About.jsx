import React from 'react'

import AboutImg from "../../assets/images/about-us.jpg";

function About() {
  return (
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
        
  )
}

export default About