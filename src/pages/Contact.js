import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import {IoLocationSharp} from "react-icons/io5";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <br/>
      <br/>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/velan.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Ours services are available 24 * 7.
            Feel Free to call!
          </p>
          <p className="mt-3">
            <BiMailSend /> :  <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'" style={{ textAlign: 'center' }}>velantvs@gmail.com</a>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 98427-06599
            <br/>
            <BiPhoneCall /> : 98427-06577
          </p>
          <p className="mt-3">
            <BiSupport /> : 04294-262222
            
          </p>
          <p>

          <IoLocationSharp/>:109B, R.S. Road, Uthukuli raod, Tirupur
            Tamilnadu - 638751
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;