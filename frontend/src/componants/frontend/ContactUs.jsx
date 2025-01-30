import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { useForm } from "react-hook-form";
import { apiUrl } from "../common/http";

function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
  const res = await fetch(apiUrl + 'contact-now',{
      method : 'POST',
      headers :{
        'Content-type' : 'application/json'
      },
        body:JSON.stringify(data)
    });
    const result = await res.json();

     if(result.status==true){
          toast.success(result.message);
          reset();
        }
        else{
          toast.error(result.message);
          }
          
        
         
  }
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality , Integrity, Value"
          heading="CONTACT US"
          text="We excell at transforming visions into realitythrough
            <br />
            outstanding craftsmanship and presise"
        />

        <div className="container">
          <section className="section-9 py-5">
            <div className="section-header text-center mb-4">
              <h2>Contact us</h2>
              <p>
                Our dedicated experts are here to help you with any of your
                questions, Contact us
                <br />
                by filling out the form below and we will be in touch shortly.
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call us</h3>
                    <div>
                      <a href="#">(888-000-1234)</a>
                    </div>
                    <div>
                      <a href="#">(777-000-1234)</a>
                    </div>

                    <h3 className="mt-4">You can write us</h3>
                    <div>
                      <a href="#">info@jadhavcons.com</a>
                    </div>
                    <div>
                      <a href="#">enquiry@jadhavcons.com</a>
                    </div>

                    <h3 className="mt-4">Address</h3>
                    <div>
                      Lohegaon
                      <br />
                      Post office-Lohegaon,
                      <br />
                      Pune, Maharashtra-41107
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <form onSubmit={handleSubmit(onsubmit)}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" 
                          className="form-control form-label "
                         >
                            Name
                          </label>
                          <input
                            type="text"
                            {...register("name", {
                              required: "The name field is required",
                            })}
                            className={`form-control form-control-lg   ${errors.name && "is-invalid"}`}
                            placeholder="Enter Name"

                          />
                          {errors.email && (
                            <p className="invalid-feedback">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            {" "}
                            Email{" "}
                          </label>

                          <input
                            type="text"
                            {...register("email", {
                              required: "the Emial field is required..",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            })}
                            className={`form-control form-control-lg  ${errors.email && "is-invalid"}`}
                            placeholder="Enter Email"
                          />
                          {errors.email && (
                            <p className="invalid-feedback">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            {" "}
                            Phone{" "}
                          </label>
                          <input
                            type="text"
                            {...register("phone")}
                            className="form-control form-control-lg"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            {" "}
                            Subject{" "}
                          </label>
                          <input
                            type="text"
                            {...register("subject")}
                            className="form-control form-control-lg"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="" className="form-label">
                          {" "}
                          Message{" "}
                        </label>
                        <textarea
                          {...register("message")}
                          id=""
                          rows={5}
                          placeholder="Write your message here ..."
                          className="form-control form-control-lg"
                        ></textarea>
                      </div>
                      <button className="btn btn-primary large mt-3 ">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
