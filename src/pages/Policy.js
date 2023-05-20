import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus mt-50" style={{ marginTop: '40px' }}>
        <div className="col-md-6 ">

      <br/>
      <br/>
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />

        </div>
        <div className="col-md-4">
          <button type="policy" className="btn btn-success" style={{width:"50%", textColor:"black"}}>
               Accidental Policy
          </button>
          <br/>
          <br/>
          <button type="policy" className="btn btn-success" style={{width:"50%", textColor:"black"}}>
               Insurance Policy
          </button>
          <br/>
          <br/>
          <button type="policy" className="btn btn-success" style={{width:"50%", textColor:"black"}}>
               Loss or Theft policy
          </button>
          
        </div>
      </div>
      <br/>
      <br/>
    </Layout>
  );
};

export default Policy;