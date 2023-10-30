import AddressSVG from "./svgs/address"
import EmailSVG from "./svgs/email"
import PhoneSVG from "./svgs/phone"
import React from "react";

export default function Left() {
  return (
    <>      
        <div className="address">
          <div className="svg">
            <AddressSVG />
          </div>
          <div className="data">
            <div className="semiHeading">
              Address
            </div>
            <div className="row">
              Ground Floor, Student Activity Center <br></br>
              IIT Roorkee, Roorkee <br></br>
              Uttarakhand, India - 247667
            </div>
          </div>
        </div>

        <div className="email">
          <div className="svg">
            <EmailSVG />
          </div>
          <div className="data">
            <div className="semiHeading">
              Email
            </div>
            <div className="row">
              cig@iitr.ac.in
            </div>
          </div>
        </div>

        <div className="phone">
          <div className="svg">
            <PhoneSVG />
          </div>
          <div className="data">
            <div className="semiHeading">
              Phone
            </div>
            <div className="Row">
              <div className="Col"> 
                Prof. Sai R. Meka <br></br>
                Ass. Dean <br></br>
                +91 1332 285378 <br></br>
              </div>
              <div className="Col"> 
                Hardik <br></br>
                Chairperson <br></br>
                +91 8791023775 <br></br>
              </div>
            </div>
          </div>
        </div>
            
    </>
  );
}
