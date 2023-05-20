import React from "react";
import Layout from "./../components/Layout/Layout";
import bike1 from "../images/bike1.jpg";
import bike2 from "../images/bike2.jpg";
import bike3 from "../images/bike3.jpg";
import bike4 from "../images/bike4.jpg";
import bike5 from "../images/bike5.jpg";
import "../styles/home.css"
import { useNavigate} from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <Layout title={"Home page"}>
    <div className="row contactus ">
            <div className="col-md-6 ">
              
      <br/>
      <div className="pic-ctn ">
      <img src={bike1} alt="" className="pic"/>
      <img src={bike2} alt="" className="pic"/>
      <img src={bike3} alt="" className="pic"/>
      <img src={bike4} alt="" className="pic"/>
      <img src={bike5} alt="" className="pic"/>
      </div>
      </div>
      <div className="col-md-4">
          <div className="text-justify mt-2">
            <div className="content-ctn">
            <p className="content">
            The TVS Sport is powered by a 109.7 cc air-cooled engine which produces 8.29 PS @ 7350 rpm of power. 
            It has a fuel tank of 10 L and a claimed mileage of 70 kmpl.
             The TVS Sport starts at Rs 63,990 and goes up to Rs 70,223 (ex-showroom, Delhi). It is available in three variants.
           <br/>
           <button
              type="button-30"
              className="button-30"
              onClick={() => {
                navigate("/prebook");
              }}
            >
              PREBOOK
            </button>
            </p>

            <p className="content">
            The TVS Ronin is powered by a 225.9 cc oil-cooled engine which produces 20.4 PS of power.
             It has a fuel tank of 14 L and a claimed mileage of 42.95 kmpl. 
            The TVS Ronin starts at Rs 1.49 and goes up to Rs 1.71 Lakh (ex-showroom, Delhi). It is available in three variants.
           <br/>
           <button
              type="button"
              className="button-30"
              onClick={() => {
                navigate("/prebook");
              }}
            >
              PREBOOK
            </button>

            </p>
            <p className="content">

            The TVS Radeon is powered by a 109.7 cc air-cooled engine which produces 8.19 PS @ 7350 rpm of power. 
            It has a fuel tank of 10 L and a claimed mileage of 73.68 kmpl. 
            The TVS Radeon starts at Rs 60,925 and goes up to Rs 78,834 (ex-showroom, Delhi). It is available in three variants.
            <br/>
            <button
              type="button"
              className="button-30"
              onClick={() => {
                navigate("/prebook");
              }}
            >
              PREBOOK
            </button>
            </p>
            <p className="content">
           
            The TVS Apache RTR 160 is powered by a 159.7 cc air-cooled engine which produces 16.04 PS @ 8750 rpm of power.
               It has a fuel tank of 12 L and a claimed mileage of 47 kmpl.
               The TVS Apache RTR 160 starts at Rs 1.18 and goes up to Rs 1.25 Lakh (ex-showroom, Delhi).
                It is available in three variants
                <br/>
            <button
              type="button"
              className="button-30"
              onClick={() => {
                navigate("/prebook");
              }}
            >
              PREBOOK
            </button>
            </p>
        
        
        </div>
        </div>
           
        </div>
      </div>
      
    </Layout>
  );
};

export default Home; 