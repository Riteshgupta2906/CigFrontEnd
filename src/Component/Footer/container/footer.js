import React from "react";
import Footer from "../footerComponent/footer";
import Icon from "../footerComponent/icons";
import "../container/footer.css"

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="https://medium.com/@cig_59196">Marketing</Footer.Link>
            <Footer.Link href="https://medium.com/@cig_59196">Consulting</Footer.Link>
            <Footer.Link href="https://medium.com/@cig_59196">Development</Footer.Link>
            <Footer.Link href="https://medium.com/@cig_59196">Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
           
            <div className="contact">
            <div className="row2">
              Ground Floor, Student Activity Center <br></br>
              IIT Roorkee, Roorkee <br></br>
              Uttarakhand, India - 247667
            </div>
            <div className="data2">
            <div className="row2">
              cig@iitr.ac.in
            </div>
          </div>
            </div>
           
            {/* <Footer.Link href="#">United States</Footer.Link>
            <Footer.Link href="#">United Kingdom</Footer.Link>
            <Footer.Link href="#">Australia</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link> */}
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://www.facebook.com/cig.iitroorkee/">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="https://instagram.com/cig_iitr?igshid=MzRlODBiNWFlZA==">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/channel/UCsstbHoTrFraZXh4Hw7CR3w">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="https://twitter.com/cig_iitr?lang=en">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
