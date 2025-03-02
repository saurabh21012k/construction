import { useState } from "preact/hooks";
import "bootstrap/dist/css/bootstrap.min.css"; // First import Bootstrap
import "./assets/css/style.scss"; // Then import your custom styles

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componants/frontend/Home";
import About from "./componants/frontend/About";
import ContactUs from "./componants/frontend/ContactUs";
import Projects from "./componants/frontend/Projects";
import Services from "./componants/frontend/Services";
import Blogs from "./componants/frontend/Blogs";
import Login from "./componants/backend/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./componants/backend/Dashboard";
import RequireAuth from "./componants/common/RequireAuth";
import { default as ShowServices } from "./componants/backend/services/Show";
import { default as CreateServices } from "./componants/backend/services/Create";
import { default as EditServices } from "./componants/backend/services/Edit";
import { default as ShowProjects } from "./componants/backend/projects/Show";
import { default as CreateProjects } from "./componants/backend/projects/Create";
import { default as EditProjects } from "./componants/backend/projects/Edit";
import { default as ShowArticles } from "./componants/backend/articles/Show";
import { default as CreateArticles } from "./componants/backend/articles/Create";
import { default as EditArticles } from "./componants/backend/articles/Edit";
import { default as ShowTestimonial } from "./componants/backend/testimonial/Show";
import { default as CreateTestimonial } from "./componants/backend/testimonial/Create";
import { default as EditTestimonial } from "./componants/backend/testimonial/Edit";
import { default as ShowMember } from "./componants/backend/members/Show";
import { default as CreateMember } from "./componants/backend/members/Create";
import { default as EditMember } from "./componants/backend/members/Edit";
import ServiceDetails from "./componants/frontend/ServiceDetails";
import ProjectDetails from "./componants/frontend/ProjectDetails";
import BlogDetails from "./componants/frontend/BlogDetails";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/article/:id" element={<BlogDetails />} />
          
          
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/edit/:id"
            element={
              <RequireAuth>
                <EditServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <RequireAuth>
                <ShowProjects />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/create"
            element={
              <RequireAuth>
                <CreateProjects />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/edit/:id"
            element={
              <RequireAuth>
                <EditProjects />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/articles"
            element={
              <RequireAuth>
                <ShowArticles />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles/create"
            element={
              <RequireAuth>
                <CreateArticles />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <RequireAuth>
                <EditArticles />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/testimonial"
            element={
              <RequireAuth>
                <ShowTestimonial />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonial/create"
            element={
              <RequireAuth>
                <CreateTestimonial />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonial/edit/:id"
            element={
              <RequireAuth>
                <EditTestimonial />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/members"
            element={
              <RequireAuth>
                <ShowMember />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/members/create"
            element={
              <RequireAuth>
                <CreateMember />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/members/edit/:id"
            element={
              <RequireAuth>
                <EditMember />
              </RequireAuth>
            }
          />
          
          
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}
