import React from "react";
import Layout from "./../components/Layout/Layout";
import ReactPlayer from 'react-player';

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus">
        <div className="col-md-6 ">
        <ReactPlayer width="500px" height="280px" controls url='https://youtu.be/YQ7OF5yDDaU' 
        onReady = {() => console.log('onReady callback')}
        onstart = {() => console.log('onStart callback')}
        onPause = {() => console.log('onPause callback')}
        onEnded = {() => console.log('onEnded callback')}
        onError = {() => console.log('onError callback')}
        >

        </ReactPlayer>
        {/* <img src={smt} style={{width:"400px" ,height:"400px"}}></img> */}
        </div>
        <div className="col-md-5">
        <h1 className="bg-dark p-2 text-white text-center mt-5">ABOUT US</h1>
          <p className="text-justify mt-2">
          Velan autos is one the top vehicle selling showroom in major part of the state.
           TVS vehicles are the selling products. We will provide good quality, good Maintance.
           Our services will be good and can be marked with 100% guarantee.
           We offer No cost EMI for vehicles, Monthly due for vehicles is available.
           TVS Motor Company – The third largest two-wheeler manufacturer in India.
           We have a direct partnership with TVS motor Company.
           TVS Motor manufactures the largest range of two-wheelers, starting from mopeds, to scooters, commuter motorcycles, to racing inspired bikes
            like the TVS Apache series and the TVS Apache RR310. Whatever your requirement be.
            <h1>we have one for everyone</h1>
          </p>
          <br/>
        </div>
      </div>
      
    </Layout>
  );
};

export default About;