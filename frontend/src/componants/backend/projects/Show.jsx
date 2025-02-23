import React, { useEffect, useState } from 'react'
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

const Show = () => {
  const [projects, setProjects] = useState([]);
  
    const fetchProjects = async () => {
      const res = await fetch(apiUrl + "projects", {

        'method': "GET",
        'headers': {
          "Content-type": "application/json",
          'Accept': "application/json",
          'Authorization': `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      setProjects(result.data);
    } 

    const deleteProject=async(id) =>{
        if(confirm("Are you sure? confirm delete project"))
            {
            const res = await fetch(apiUrl + 'projects/'+id, {
                'method': "DELETE",
                'headers': {
                  "Content-type": "application/json",
                  'Accept': "application/json",
                  'Authorization': `Bearer ${token()}`,
                },
              });
          
              const result = await res.json();
    
              if (result.status == true){
                const newProjects = projects.filter(project => project.id != id)
                setProjects(newProjects);
                toast.success(result.message)
              }else{
                toast.error(result.message)
              }
        }

    }
    
    useEffect(()=>{
       fetchProjects();
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
                    <h4 className="h5">projects</h4>
                    <Link to="/admin/projects/create" className="btn btn-primary">
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
                      {projects &&
                        projects.map((project) => {
                          return (
                            <tr key={`project-${project.id}`}>
                              <td>{project.id}</td>
                              <td>{project.title}</td>
                              <td>{project.slug}</td>
                              <td>
                                {project.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                              
                                <Link
                                to={`/admin/projects/edit/${project.id}`}
                                  className="btn btn-primary btn-sm ms-2"
                                >
                                  Edit
                                </Link>
                                <Link
                                onClick={()=>deleteProject(project.id)}
                                  to="/admin/projects"
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