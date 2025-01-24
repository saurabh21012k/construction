import React, { useContext } from "react";
import {AuthContext} from'../backend/context/Auth';


function Sidebar() {
    const {logout} = useContext(AuthContext)
  return (
         <div className="card shadow border-0">
        <div className="card-body  p-3 sidebar">
          <h4>Sidebar</h4>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Articals</a></li>
            <li>
                <button onClick={logout} className="btn btn-primary mt-3">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    
  );
}

export default Sidebar;
