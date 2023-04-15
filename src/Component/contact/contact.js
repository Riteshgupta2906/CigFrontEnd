// import Left from "./left"
// import Right from "./right"
import Right from "./right"
import Left from "./left"
import './contact.css'

export default function Contact() {
  return (
    <>
      <div className="empty"></div>
      {/* <div className="heading">
          <div className="header">Contact Us</div>
          <div className="underline"></div>
          <div className="brief">We would love to hear from you! If you have any questions, comments or suggestions, please feel free to get in touch with us using the contact form below. We will do our best to respond to your inquiry as soon as possible. Thank you for visiting our website!</div>
        </div>
      <div className="contact-container">
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div> */}
      <div className="ContactUsContainer">

        <div className="heading">
            <div className="header">Contact Us</div>
            <div className="underline"></div>
            <div className="brief">
              We would love to hear from you! If you have any questions, comments or suggestions, please feel free to get in touch with us using the contact form below. <br></br>
              We will do our best to respond to your inquiry as soon as possible. Thank you for visiting our website!
            </div>
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.941259598978!2d77.89787421540963!3d29.865967833935947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36c210c7d2b%3A0x43a317fe732508db!2sCIG%20IITR!5e0!3m2!1sen!2sin!4v1680548354157!5m2!1sen!2sin" 
              title="CIG Office" allowFullScreen loading="lazy" ></iframe>
            </div>

          <div className="sideToSide">
            <div className='left'>
              <Left />
            </div>
            <div className='right'>
              <Right />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
