import React, { useEffect, useState } from "react";

import { apiUrl, fileUrl } from "../common/http";
import Header from "../common/Header";
import Hero from "../common/Hero";
import Footer from "../common/Footer";



const Blogs = () => {

     const [articles, setArticles] = useState([]);
      const fetchLatestArticless = async () => {
        const res = await fetch(apiUrl + "get-articles", {
          method: "GET",
        });
        const result = await res.json();
        if(result.status == true){
         setArticles(result.data);
        }
      };
    
      useEffect(() => {
        fetchLatestArticless();
      }, []);


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
                <div className="row pt-4 ">
                
                             {articles &&
                            articles.map((article) => {
                               return  (
                               <div className="col-md-4 mb-4">
                                 <div className="card shadow border-0">
                                   <div className="card-img-top"> 
                                     <img src={`${fileUrl}uploads/articles/small/${article.image}`} alt="ArticleImg" className="w-100"  />
                   
                                   </div>
                                   <div className="card-body p-5">
                                       <div className="mb-3">
                                       <h3>{article.title}</h3>
                                       </div>
                                       <a href="#" className="btn btn-primary small"> Read More</a>
                                   </div>
                   
                                 </div>
                               </div>
                                );
                            })}
                             </div>
      
              </div>
      
            </section>

    </main>

    <Footer/>
    </>
  )
}

export default Blogs