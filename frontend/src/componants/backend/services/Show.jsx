import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";
import { apiUrl, token } from "../../common/http";
import { ListGroupItem } from "react-bootstrap";
import { toast } from "react-toastify";

function Show() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await fetch(apiUrl + "services", {
      'method': "GET",
      'headers': {
        "Content-type": "application/json",
        'Accept': "application/json",
        'Authorization': `Bearer ${token()}`,
      },
    });

    const result = await res.json();
    setServices(result.data);
  };
  const deleteService = async(id) =>{
    if(confirm("Are you sure? confirm Delete service"))
        {
        const res = await fetch(apiUrl + 'services/'+id, {
            'method': "DELETE",
            'headers': {
              "Content-type": "application/json",
              'Accept': "application/json",
              'Authorization': `Bearer ${token()}`,
            },
          });
      
          const result = await res.json();

          if (result.status == true){
            const newServices = services.filter(service => service.id != id)
            setServices(newServices);
            toast.success(result.message)
          }else{
            toast.error(result.message)
          }
    }
    
    //   setServices(result.data);
  }

  useEffect(() => {
    fetchServices();
  }, []);

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
                    <h4 className="h5">Services</h4>
                    <Link to="/admin/services/create" className="btn btn-primary">
                       Create
                    </Link>
                  </div>
                  <hr />
                  <table className="table table-striped">
                    <thead>
                      <tr >
                        <th>ID</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services &&
                        services.map((service) => {
                          return (
                            <tr key={`service-${service.id}`}>
                              <td>{service.id}</td>
                              <td>{service.title}</td>
                              <td>{service.slug}</td>
                              <td>
                                {service.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                              
                                <Link
                                to={`/admin/services/edit/${service.id}`}
                                  className="btn btn-primary btn-sm ms-2"
                                >
                                  Edit
                                </Link>
                                <Link
                                onClick={()=>deleteService(service.id)}
                                  to="/admin/services"
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
  );
}

export default Show;
