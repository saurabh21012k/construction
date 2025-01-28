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
import {default as ShowServices} from "./componants/backend/services/Show";
import {default as CreateServices} from "./componants/backend/services/Create";
import {default as EditServices} from "./componants/backend/services/Edit";
import {default as ShowProjects} from "./componants/backend/projects/Show";
import {default as CreateProjects} from "./componants/backend/projects/Create";
import {default as EditProjects} from "./componants/backend/projects/Edit";

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
          <Route path="/admin/login" element={<Login  />} />
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
                <ShowServices/>
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateServices/>
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/edit/:id"
            element={
              <RequireAuth>
                <EditServices/>
              </RequireAuth>
            }
          />
            <Route
            path="/admin/projects"
            element={
              <RequireAuth>
                <ShowProjects/>
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/create"
            element={
              <RequireAuth>
                <CreateProjects/>
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/edit/:id"
            element={
              <RequireAuth>
                <EditProjects/>
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}
