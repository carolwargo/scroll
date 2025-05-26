//src/components/Footer.jsx
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import ResumeDownload from "../assets/ResumeDownload.pdf";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer" id="footer" style={{ fontFamily: "Raleway", width: "100%", margin: 0, padding: 0 }}>
      <MDBFooter className="bg-black w-100 text-light">
        <section className="text-center p-3">
          <MDBContainer fluid className="mt-5 text-center text-md-start">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="4" xl="4" className="mx-auto mb-5 me-2 p-3">
                <h6 className="mb-4 text-uppercase fw-bold">
                  <b>Carol</b> Wargo
                </h6>
                <p className="fw-light" style={{ fontSize: "14px", fontWeight: '200' }}>
                  Thank you for visiting my site. I hope you found what you were looking for and enjoyed your time here. Feel free to reach out if you have any questions or feedback!
                </p>
            
                  <a
                    className="link-light small opacity-75"
                    id="download"
                    download
                    href={ResumeDownload}
                  >
                      
                    Download Resume
                  </a>
      
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 p-3">
                <h6 className="mb-3 fw-bold">PAGES</h6>
                <Link to="/" 
                className="link-light opacity-75 text-decoration-none " 
                onClick={scrollToTop}>
                  <p style={{ fontSize: "14px", fontWeight: '200' }}>Home</p>
                </Link>
                <Link to="/about" 
                className="link-light opacity-75 text-decoration-none fw-light" 
                onClick={scrollToTop}>
                  <p style={{ fontSize: "14px", fontWeight: '200' }}>About</p>
                </Link>
                <Link to="/resume" className="link-light opacity-75 text-decoration-none fw-light" onClick={scrollToTop}>
                  <p style={{ fontSize: "14px", fontWeight: '200' }}>Digital Resume</p>
                </Link>
                <Link to="/portfolio" className="link-light opacity-75 text-decoration-none fw-light" onClick={scrollToTop}>
                  <p style={{ fontSize: "14px", fontWeight: '200' }}>Portfolio</p>
                </Link>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 justify-content-center p-3">
                <h6 className="mb-3 fw-bold">SAMPLES</h6>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <Link to="/blog" className="link-light opacity-75 text-decoration-none" onClick={scrollToTop}>
                    Blog
                  </Link>
                </p>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <Link to="/album" className="link-light opacity-75 text-decoration-none" onClick={scrollToTop}>
                    Album
                  </Link>
                </p>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <a href="http://carolwargo.github.io/realestate" className="link-light opacity-75 text-decoration-none" onClick={scrollToTop}>
                    Real Estate
                  </a>
                </p>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <Link to="/sidenav" className="link-light opacity-75 text-decoration-none" onClick={scrollToTop}>
                    Price Menu
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 mb-md-0 d-flex flex-column justify-content-center p-3">
                <h6 className="fw-bold">CONTACT</h6>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <MDBIcon icon="home" className="me-2" />
                  Huntingtown, MD
                </p>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <a href="mailto:carolwargo.dev@gmail.com" className="link-light opacity-75 text-decoration-none">
                    <MDBIcon icon="envelope" className="me-2" />
                    Email
                  </a>
                </p>
                <p style={{ fontSize: "14px", fontWeight: '200' }}>
                  <a href="tel:+4437711726" className="link-light opacity-75 text-decoration-none">
                    <MDBIcon icon="phone-alt" className="me-2" />
                    Call
                  </a>
                </p>
                        <p style={{ fontSize: "14px", fontWeight: '200' }}>
              <a href="https://github.com/carolwargo" className="me-4 link-light opacity-75 text-decoration-none">
              <MDBIcon fab icon="github" className="me-2" />
              Github
            </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
   


      </MDBFooter>
    </div>
  );
}
         
         