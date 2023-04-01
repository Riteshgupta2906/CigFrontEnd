import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTypography, MDBTextArea } from 'mdb-react-ui-kit';
import "./contact.css"

export default function Image() {
  return (
    <MDBContainer className="py-5" style={{ maxWidth: '1200px' }}>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">

              <MDBCol md="6" className="d-xl-block bg-image">
              <MDBCardBody className="p-md-5 text-black fw-light">
                <MDBTypography tag="h3" className="mb-4 text-uppercase">CONTACT US</MDBTypography>
                <MDBRow>
                    <MDBCol md="6" className="mb-4"> 
                        First Name
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        Last Name
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6" className="mb-4"> 
                        First Name
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        Last Name
                    </MDBCol>
                </MDBRow>
              </MDBCardBody>
              </MDBCol>
              
              <MDBCol md="6">
                <MDBCardBody className="p-md-5 text-black fw-light">
                  

                  <MDBRow>
                    <MDBCol md="6" className="mb-4"> 
                        First Name
                      <MDBInput className="shadow-3" type='text' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        Last Name
                      <MDBInput  type='text' size="lg" />
                    </MDBCol>
                  </MDBRow>
                    Email
                  <MDBInput  type='text' className="mb-4" size="lg" />
                  Message
                  <MDBTextArea  id='textAreaExample' rows={4} />

                  <div className="d-flex justify-content-start pt-3">
                    <MDBBtn size="lg" className="ms-2" style={{backgroundColor: 'hsl(210, 100%, 50%)'}}>Send</MDBBtn>
                  </div>

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}