import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavFixed from "./components/NavFixed";
import Footer from "./components/Footer";
import ErrorBoundary from "./ErrorBoundary";
import PageLayout from "./Layouts/PageLayout";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div className="App">
      <HashRouter basename="">
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <NavFixed />
            <Routes>
              <Route
                path="/"
                element={
                  <PageLayout>
                    <HomePage />
                  </PageLayout>
                }
              />
              <Route
                path="/home"
                element={
                  <PageLayout>
                    <HomePage />
                  </PageLayout>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </HashRouter>
    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <div style={{ padding: "2rem", textAlign: "center" }}>Page Not Found</div>;
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
