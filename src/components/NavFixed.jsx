// src/components/Navs/NavFixed.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function NavFixed() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => setExpanded(prev => !prev);

  const handleNavLinkClick = () => {
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setExpanded(false);
    };
    let timeout;
    const debouncedResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleResize, 100);
    };
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <style>
        {`
        .nav-link-custom {
          font-size: 0.875rem;
          font-family: 'Raleway', sans-serif;
          color: #333 !important;
        }
        .nav-link-custom:hover {
          color: #FF385C !important;
        }
        .navbar-brand {
          font-family: 'Raleway', sans-serif;
          color: #FF385C !important;
          font-weight: bold;
        }
        `}
      </style>

      <Navbar
        expand="lg"
        className="shadow-sm bg-body-tertiary fixed-top"
        expanded={expanded}
      >
        <Container fluid style={{ fontFamily: 'Raleway, sans-serif' }}>
          <Navbar.Brand as={Link} to="/" onClick={handleNavLinkClick}>
            CW HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle}>
            <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about" onClick={handleNavLinkClick} className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" onClick={handleNavLinkClick} className="nav-link-custom">
                Resume
              </Nav.Link>
              <NavDropdown title="My Work" id="my-work-dropdown" className="nav-link-custom" onSelect={handleNavLinkClick}>
                <NavDropdown.Item as={Link} to="/portfolio">Web Components</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/samples">Landing Pages</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/forms">Forms</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cards">Cards & Images</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/server">Utility Apps</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/graphics">Graphics</NavDropdown.Item>

                <NavDropdown title="Graphics" id="graphics-sections-dropdown" drop="end">
                  {[
                    { id: 'graphics', label: 'All Samples' },
                    { id: 'newsletter-samples', label: 'Newsletter Samples' },
                    { id: 'email-samples', label: 'Email Samples' },
                    { id: 'social-samples', label: 'Social Media' },
                    { id: 'sport-samples', label: 'Sports Media' },
                    { id: 'info-samples', label: 'Infographics' },
                  ].map((section) => (
                    <NavDropdown.Item
                      key={section.id}
                      href={`/graphics#${section.id}`}
                      onClick={() => setExpanded(false)}
                    >
                      {section.label}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </NavDropdown>
            </Nav>

            <Nav>
              <Link to="/contact" onClick={handleNavLinkClick}>
                <motion.button
                  className="btn btn-outline-dark rounded-pill shadow btn-sm px-3 py-2"
                  whileHover={{ scale: 1.0, backgroundColor: 'black', color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Contact
                </motion.button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavFixed;
