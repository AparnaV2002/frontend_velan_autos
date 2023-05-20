import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import AdminLayout from "./../../components/Layout/AdminLayout";

const Review = () => {
  return (
    <AdminLayout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-2">
      <br/>
          <br/>
        <div className="row">
          
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9" style={{alignItems:"center"}}>
            <h1 style={{textAlign:"center"}}>Most Commonly Getting Feedback</h1>
            <table style={{borderCollapse: 'collapse', border: '2px solid black',alignContent:"center"}}>
  <tr style={{backgroundColor: '#f2f2f2'}}>
    <th style={{padding: '8px', border: '1px solid black'}}>Feedbacks</th>
  </tr>
  <tr>
    <td style={{padding: '8px', border: '1px solid black'}}>There was good staffing available</td>
  </tr>
  <tr>
    <td style={{padding: '8px', border: '1px solid black'}}>Can increase the product count</td>
  </tr>
  <tr>
    <td style={{padding: '8px', border: '1px solid black'}}>Accessories can be made available</td>
  </tr>
</table>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Review;