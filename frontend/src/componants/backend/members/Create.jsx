import React, { useState, useRef, useMemo } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../common/Footer";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Create() {
  const editor = useRef(null);
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const newData = { ...data,  imageId: imageId };
    const res = await fetch(apiUrl + "members", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });

    const result = await res.json();
    if (result.status == true) {
      toast.success(result.message);
      navigate("/admin/members");
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
     const formData = new FormData();
     const file = e.target.files[0];
     formData.append("image", file);
     setIsDisable(true);
     
 
     await fetch(apiUrl + "temp-images", {
       method: "POST",
       headers: {
         Accept: "application/json",
         Authorization: `Bearer ${token()}`,
       },
       body: formData,
     })
       .then((responce) => responce.json())
       .then((result) => {
         setIsDisable(false);
         if (result.status == false) {
           toast.error(result.errors.image[0]);
         } else {
           setImageId(result.data.id);
         }
       });
   };
  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* sideboard */}
              <Sidebar />
            </div>
            <div className="col-md-9 ">
              {/* Dashboard */}
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Member / Create</h4>
                    <Link to="/admin/members" className="btn btn-primary">
                      Back
                    </Link>
                  </div>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        placeholder="Name"
                        {...register("name", {
                          required: "The Name field is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Job Title</label>
                      <input
                        placeholder="Job Title"
                        {...register("job_title", {
                          required: "The Job Title field is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.job_title ? "is-invalid" : ""
                        }`}
                      />
                      {errors.Job_title && (
                        <p className="invalid-feedback">
                          {errors.job_title?.message}
                        </p>
                      )}
                    </div>

                        <div className="mb-3">
                          <label className="form-label">Linkedin URL</label>
                          <input
                            placeholder="Linkedin Url"
                            {...register("linkedin_url")}
                            type="text"
                            className={"form-control"}
                          />
                        </div>
                      
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Status</label>

                        <select
                          className="form-control"
                          {...register("status")}
                        >
                          <option value="1">Active</option>
                          <option value="2">Block</option>
                        </select>
                      </div>

                   
                      <div className="mb-3">
                      <label lassName="form-label">Image</label>
                      <br />
                      <input onChange={handleFile} type="file"></input>
                    </div>

                    <div className="mb-3">
                      <button disabled={isDisable} className="btn btn-primary">
                        Submit{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Create;
