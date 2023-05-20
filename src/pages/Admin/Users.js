import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import AdminLayout from "./../../components/Layout/AdminLayout";

const Users = () => {
  return (
    <AdminLayout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-2">
      <br/>
          <br/>
        <div className="row">
          
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <button type="policy" className="btn btn-dark" style={{width:"10%", textColor:"black"}}>
               Admin
            </button>
            <br/>
            <br/>
            <button type="policy" className="btn btn-dark" style={{width:"10%", textColor:"black"}}>
               user
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;