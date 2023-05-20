import React from "react";
import Layout from "../../components/Layout/Layout";

import '../../styles/form.css'

export default function Form()
{
    return(<>
    <Layout>
        <br/><br/><br/>
        <h3 className="text-center">What are you waiting for?</h3>

        <div id="feedback-form" >
              <h2 class="header">PreBooking now</h2>
              <div>

                <form action="https://formspree.io/f/mqkojzbe" method="POST">
                <label class="pure-material-textfield-standard">
                      <input placeholder=" "/>
                      <span>Name</span>
                </label> 
                <label class="pure-material-textfield-standard">
                      <input placeholder=" "/>
                      <span>About Vehicle model</span>
                </label><br/>                  
                  <input type="date" class="pure-material-textfield-standard" name="date" placeholder="Select date"/>
                  <label for="feedback-notify">Remind me about event via SMS</label>
                  <input type="checkbox" id="feedback-notify" name="notify"/>
                  <input type="text" id="feedback-phone" name="phone" placeholder="Phone number"></input>
                  <button type="submit">PreBook</button>
                </form>
              </div>
        </div>
        <br/><br/>

    </Layout>
   
   </>)

}