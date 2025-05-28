import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Email from '../components/Email';
import Infographics from '../components/Infographics';
import SocialMedia from '../components/SocialMedia';
import Sports from '../components/Sports';
import Newsletter from '../components/Newsletters';
import Newsletter3 from '../assets/images/Newsletters/DIAGRAMS/Newsletter3.png';    
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const scrollSpyRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
   const navigate = useNavigate();

     const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navigate(`${location.pathname}#${sectionId}`);
      console.log(`Navigating to section: ${sectionId}`);
    } else {
      console.warn(`Section not found: ${sectionId}`);
    }
    if (sidebarOpen) setSidebarOpen(false);
  };
  
  useEffect(() => {
    if (scrollSpyRef.current && window.bootstrap) {
      console.log('Initializing scroll-spy');
      const scrollSpy = new window.bootstrap.ScrollSpy(scrollSpyRef.current, {
        target: '#navbar-example3',
        offset: 60,
      });
      return () => scrollSpy.dispose();
    } else {
      console.warn('Bootstrap scroll-spy not initialized. Check Bootstrap JS.');
    }
  }, []);

 useEffect(() => {
    if (scrollSpyRef.current && window.bootstrap) {
      console.log('Initializing scroll-spy');
      const scrollSpy = new window.bootstrap.ScrollSpy(scrollSpyRef.current, {
        target: '#navbar-example3',
        offset: 60,
      });
      return () => scrollSpy.dispose();
    } else {
      console.warn('Bootstrap scroll-spy not initialized. Check Bootstrap JS.');
    }
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      console.log('Navigating to hash:', hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn(`Hash section not found: ${hash}`);
        }
      }, 300);
    }
  }, [location]);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="page d-flex">
      {/* Sidebar */}
 <nav id="navbar-example3" className="navbar navbar-light flex-column align-items-stretch px-3 d-none d-md-block">
  <div className="sidebar-content">
    <div className='mt-4 mb-3'>
      <a className="navbar-brand fw-bold" href="/home">Graphics Dashboard</a>
    </div>
  <nav className="nav nav-pills flex-column">
            <a
              className="nav-link"
              href="#item-1"
              onClick={(e) => handleNavClick(e, 'item-1')}
            >
                Campaign Diagram
            
            </a>
                   <a
              className="nav-link"
              href="#item-2"
              onClick={(e) => handleNavClick(e, 'item-2')}
            >
             Email Campaigns
            </a>
            <a
              className="nav-link"
              href="#item-3"
              onClick={(e) => handleNavClick(e, 'item-3')}
            >
              Infographics
            </a>
            <a
              className="nav-link"
              href="#item-4"
              onClick={(e) => handleNavClick(e, 'item-4')}
            >
              Social Media Campaigns
            </a>
            <a
              className="nav-link"
              href="#item-5"
              onClick={(e) => handleNavClick(e, 'item-5')}
            >
              Sports Media
            </a>
          </nav>
  </div>
</nav>

      {/* Offcanvas for Mobile */}
      <div
        className={`offcanvas offcanvas-start ${sidebarOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="sidebarOffcanvasLabel">
            Graphics Dashboard
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
      <nav className="nav nav-pills flex-column">
            <a
              className="nav-link"
              href="#item-1"
              onClick={(e) => handleNavClick(e, 'item-1')}
            >
              Campaign Diagram
            </a>
                             <a
              className="nav-link"
              href="#item-2"
              onClick={(e) => handleNavClick(e, 'item-2')}
            >
                Email Campaigns
           
            </a>
            <a
              className="nav-link"
              href="#item-3"
              onClick={(e) => handleNavClick(e, 'item-3')}
            >
              Infographics
            </a>
            <a
              className="nav-link"
              href="#item-4"
              onClick={(e) => handleNavClick(e, 'item-4')}
            >
              Social Media Campaigns
            </a>
            <a
              className="nav-link"
              href="#item-5"
              onClick={(e) => handleNavClick(e, 'item-5')}
            >
              Sports Media
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={scrollSpyRef}
        data-bs-spy="scroll"
        data-bs-target="#navbar-example3"
        data-bs-offset="60"
        tabIndex="0"
        className="scrollspy-example"
      >
             <div className="mobile-toggle-block d-md-none">
        {/* Toggle Button for Mobile */}
        <button
          className="btn d-md-none"
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="bi bi-list fs-3"></i>
        </button>
        </div>

  
             <div id="item-1" className="container pb-4">
          <Newsletter />
        </div>
        {/* Email Campaigns */}
        <div id="item-2" className="container pb-4">
          <h1>Email Campaigns & Newsletters</h1>
          <p>
            Unified Graphics-Maximize your brand’s visibility with multi-platform
            marketing graphics, ensuring consistent and captivating visuals across
            all your marketing channels.
          </p>
          <Email />
        </div>
   

        {/* Infographics */}
        <div id="item-3" className="container py-4">
          <h1>Infographics</h1>
          <p>
            Visual Insights that Illuminate- Dive into our meticulously crafted
            infographics that transform complex data into compelling visual
            narratives, making information both engaging and easy to understand.
          </p>
          <Infographics />
        </div>

        {/* Social Media Campaigns */}
        <div  id="item-4" className="container py-4">
          <h1>Social Media Campaigns</h1>
          <p>
            Enhance your social media presence with our vibrant and impactful
            graphics, tailored to catch the eye and engage your followers across
            all platforms.
          </p>
          <SocialMedia />
        </div>

        {/* Sports Media */}
        <div id="item-5" className="container py-4">
          <h1>Sports Media</h1>
          <p>
            Enhance your social media presence with our vibrant and impactful
            graphics, tailored to catch the eye and engage your followers across
            all platforms.
          </p>
          <Sports />
        </div>
      </div>
    </div>
  );
};

export default HomePage;