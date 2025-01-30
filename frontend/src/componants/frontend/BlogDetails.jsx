import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import ShowTestimonial from "../common/ShowTestimonial";

const BlogDetails = () => {

  const params = useParams();
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);

  const fetchAllBlogs = async () => {
    const res = await fetch(`${apiUrl}get-articles/`, {
      method: "GET",
    });
    const result = await res.json();
    setArticles(result.data);
  };

  const fetchBlog = async () => {
    const res = await fetch(`${apiUrl}get-articles/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    setArticle(result.data);
  };

  useEffect(() => {
      fetchBlog();
    fetchAllBlogs();
  }, [params.id]);


  return (
    <>
   
      <Header />
      <main>
        <Hero
          preHeading="Quality , Integrity, Value"
          heading={`${article.title}`}
          text=""
        />
        <section className="section-10">
          <div className="container py-5">
            <div className="row">
            <div className="col-md-8">
            <h3 className=" py-3">{article.title}</h3>
                <div>
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/articles/large/${article.image}`}
                    alt=""
                  />
                </div>

                
                <div dangerouslySetInnerHTML={{ __html: article.content }}>
                  {article.content}
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 sidebar">
                  <div className=" card-body px-4 py-4">
                    <h3 className="mt-2 mb-3">Check Articles</h3>
                    <ul>
                      {articles &&
                        articles.map((article) => {
                          return (
                            <li>
                              <Link to={`/article/${article.id}`}>
                                {article.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
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
  )
}

export default BlogDetails