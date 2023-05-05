import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Dashboard = () => {
  
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile bg-zinc-100">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-5xl text-primary font-bold text-center mb-5">
          Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-primary">
          {/* dashboard sidebar */}
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
        <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
            { !admin && <>
              <li><Link to="/dashboard/my-order">My Order</Link></li>
              <li><Link to="/dashboard/review">Add A Review</Link></li>
            </>}
            { admin && <>
              <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
              <li><Link to="/dashboard/add-product">Add A Product</Link></li>
              <li><Link to="/dashboard/manage-orders">Manage All Orders</Link></li>
              <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
            </>}
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;