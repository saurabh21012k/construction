import React, { useEffect, useState } from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from '../common/Hero';
import { Link, useParams } from 'react-router-dom';
import { apiUrl, fileUrl } from '../common/http';
import ShowTestimonial from '../common/ShowTestimonial';
function ProjectDetails() {
    const params = useParams();
    const [project , setProject] = useState([]);
    const [projects , setProjects] = useState([]);

    const fetchAllProjects = async ()=>{
        const res = await fetch(`${apiUrl}get-projects/`,{
        'method' : "GET",
  });
   const result = await res.json();
   setProjects(result.data)
  }

    const fetchProject = async ()=>{
        const res = await fetch(`${apiUrl}get-projects/${params.id}`,{
        'method' : "GET",
  });
   const result = await res.json();
   setProject(result.data)
  }
 
  useEffect(()=>{
    fetchProject()
    fetchAllProjects()
  },[params.id]);


  return (
  <>
  <Header/>
  <main>
  <Hero
          preHeading="Quality , Integrity, Value"
          heading={`${project.title}`}
          text=''
        />

<section className='section-10'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card shadow border-0 sidebar'>
                        <div className=' card-body px-4 py-4'>
                            
                            <h3 className='mt-2 mb-3'>Project Insights</h3>
                            <ul>
                                {project.location && <li className=''><span className='text-body-secondary'>Location</span></li>}
                                <p>{project.location}</p>
                                {project.construction_type && <li className=''><span className='text-body-secondary'>Construction Type</span></li>}
                                <p>{project.construction_type}</p>
                                {project.sector && <li className=''><span className='text-body-secondary'>Sector</span></li>}
                                <p>{project.sector}</p>
                                
                            </ul>

                        </div>
                        
                    </div>
                    <div className='card shadow border-0 sidebar mt-3 bg-light'>
                        <div className=' card-body px-4 py-4'>
                            
                            <h3 className='mt-2 mb-3'>Our Other Projects</h3>
                            <ul>
                                {
                                    projects && projects.map(project=>{
                                        return(
                                            <li>
                                                <Link to={`/project/${project.id}`}>{project.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                        
                    </div>
                </div>
                <div className='col-md-9'>
                            <div>
                                <img className='w-100' src={`${fileUrl}uploads/projects/large/${project.image}`}  alt="" />
                            </div>

                            <h3 className=' py-3'>{project.title}</h3>
                            <div dangerouslySetInnerHTML={{__html:project.content}}>
                                {project.content}
                            </div>
                </div>

            </div>
            

        </div>
        <section className='section-11 bg-light'>
                            <div className='row'>
                    <div className='col-md-12'>
                        <ShowTestimonial/>
                    </div>
                                </div>
                                </section>
        </section>

  </main>
  <Footer/>
  </>
  )
}

export default ProjectDetails