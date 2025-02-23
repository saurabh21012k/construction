import React, { useEffect, useState } from "react";

import { apiUrl, fileUrl } from "../common/http";
import Header from "../common/Header";
import Hero from "../common/Hero";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import LatestArticles from "../common/LatestArticles";



const Blogs = () => {



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

      <LatestArticles/>

    </main>

    <Footer/>
    </>
  )
}

export default Blogs