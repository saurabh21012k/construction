import React, { useContext } from "react";
import {AuthContext} from'../backend/context/Auth';
import { Link } from "react-router-dom";


function Sidebar() {
    const {logout} = useContext(AuthContext)
  return (
         <div className="card shadow border-0">
        <div className="card-body  p-3 sidebar">
          <h4>Sidebar</h4>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/services">Services</Link></li>
            <li><Link to="/admin/projects">Projects</Link></li>
            <li><Link to="/admin/articles">Articals</Link></li>
            <li><Link to="/admin/testimonial">Testimonials</Link></li>
            <li><Link to="/admin/members">Members</Link></li>
            <li>
                <button onClick={logout} className="btn btn-primary mt-3">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    
  );
}

export default Sidebar;
