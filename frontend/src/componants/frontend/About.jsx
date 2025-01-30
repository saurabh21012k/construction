import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { default as Aboutnew } from "../common/About";
import Hero from "../common/Hero";
import ShowTestimonial from "../common/ShowTestimonial";
import Member from "../common/Member";
import MemberImg from "../../assets/images/icon-3.svg";

function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality , Integrity, Value"
          heading="ABOUT US"
          text="We excell at transforming visions into realitythrough
            <br />
            outstanding craftsmanship and presise"
        />

        <Aboutnew />

        {/* members */}
        <Member />

        {/* ShowTestimonial */}
        <ShowTestimonial />
      </main>

      <Footer />
    </>
  );
}

export default About;
