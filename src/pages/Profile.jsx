import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Logo from "../assets/Logo.JPG";
import MiniDrawer from "../components/MiniDrawer";
export default function PersonalProfile() {
  return (
    <>
      <MiniDrawer />
    <img
        className="card-img"
        src={Logo}
        alt="Card"
        />
    <section className="vh-100 background" style={{ marginTop: -115 ,backgroundColor: '#f4f5f7'}}>
      <MDBContainer className="py-5 w-200 h-300">
        <MDBRow className="justify-content-center align-items-center h-300">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '900px' }} fluid />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  {/* <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" /> */}
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Workflow Number: 123478</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Workflow Status</MDBTypography>
                        <MDBCardText className="text-muted">Submitted</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Submitted On</MDBTypography>
                        <MDBCardText className="text-muted">27/10/2023</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
}