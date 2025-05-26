import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavFixed from "./components/NavFixed";
import Footer from "./components/Footer";
import ErrorBoundary from "./ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));

  <div className="d-flex flex-column min-vh-100">
    <NavFixed />
    <main className="flex-grow-1">
      {children}
    </main>
    <Footer />
  </div>


  /** 
const GraphicsLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <NavFixed />
    <Box sx={{ flexGrow: 1 }}>
      {children}
    </Box>
  </Box>
);
*/

function App() {
  return (
    <div className="App">
      <HashRouter basename="/scroll/">
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  <DefaultLayout>
                    <HomePage />
                  </DefaultLayout>
                }
              />
              <Route
                path="/home"
                element={
                  <DefaultLayout>
                    <HomePage />
                  </DefaultLayout>
                }
              />
              <Route
                path="*"
                element={
                  <DefaultLayout>
                    <NotFound />
                  </DefaultLayout>
                }
              />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </HashRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <div />;
}

export default App;

/**
 *              <Route path="/about" element={<DefaultLayout><AboutPage /></DefaultLayout>} />
              <Route path="/contact" element={<DefaultLayout><ContactPage /></DefaultLayout>} />
              <Route path="/resume" element={<DefaultLayout><ResumePage /></DefaultLayout>} />
              <Route path="/portfolio" element={<DefaultLayout><PortfolioPage /></DefaultLayout>} />
              <Route path="/graphics" element={<GraphicsLayout><GraphicsPage /></GraphicsLayout>} />
              <Route path="/samples" element={<DefaultLayout><SamplesPage /></DefaultLayout>} />
              <Route path="/server" element={<DefaultLayout><ServerPage /></DefaultLayout>} />
              <Route path="/newsletter-samples" element={<Navigate to="/graphics#newsletter" replace />} />
              <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
 */
