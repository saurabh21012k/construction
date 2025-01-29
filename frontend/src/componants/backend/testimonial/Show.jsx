import React, { useEffect, useState } from 'react'
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

const Show = () => {
  const [testimonial, SetTestimonial] = useState([]);
  
    const fetchTestimonial = async () => {
      const res = await fetch(apiUrl + "testimonial", {

        'method': "GET",
        'headers': {
          "Content-type": "application/json",
          'Accept': "application/json",
          'Authorization': `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      SetTestimonial(result.data);
    } 

    const deleteTestimonial=async(id) =>{
        if(confirm("Are you sure? confirm delete Testimonial"))
            {
            const res = await fetch(apiUrl + 'testimonial/'+id, {
                'method': "DELETE",
                'headers': {
                  "Content-type": "application/json",
                  'Accept': "application/json",
                  'Authorization': `Bearer ${token()}`,
                },
              });
          
              const result = await res.json();
    
              if (result.status == true){
                const newTestimonial = testimonial.filter(testimonial => testimonial.id != id)
                SetTestimonial(newTestimonial);
                toast.success(result.message)
              }else{
                toast.error(result.message)
              }
        }

    }
    
    useEffect(()=>{
      fetchTestimonial();
    },[])
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
                    <h4 className="h5">Testimonial</h4>
                    <Link to="/admin/testimonial/create" className="btn btn-primary">
                       Create
                    </Link>
                  </div>
                  <hr />
                  <table className="table table-striped">
                    <thead>
                      <tr >
                        <th>ID</th>
                        <th>Testimonial</th>
                        <th>Citation</th> 
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testimonial &&
                        testimonial.map((testimonial) => {
                          return (
                            <tr key={`testimonial-${testimonial.id}`}>
                              <td>{testimonial.id}</td>
                              <td>{testimonial.testimonial}</td>
                               <td>{testimonial.citation}</td> 
                              <td>
                                {testimonial.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                              
                                <Link
                                to={`/admin/testimonial/edit/${testimonial.id}`}
                                  className="btn btn-primary btn-sm ms-2"
                                >
                                  Edit
                                </Link>
                                <Link
                                onClick={()=>deleteTestimonial(testimonial.id)}
                                  to="/admin/testimonial"
                                  className="btn btn-secondary btn-sm ms-2"
                                >
                                  Delete
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Show