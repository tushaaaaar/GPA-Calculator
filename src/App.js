import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import SgpaCalculator from "./components/SgpaCalculator";
import CgpaCalculator from "./components/CgpaCalculator";

function App() {
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname === "/" && (
        <>
          <Home name={"GPA Calculator"} home={"Home"} />
          <div className="d-flex justify-content-center mt-5">
            <div className="d-flex flex-column">
            <Link to="/sgpa-calculator">
              <button className="btn btn-primary m-2">SGPA Calculator</button>
            </Link>
            <Link to="/cgpa-calculator">
              <button className="btn btn-primary m-2">CGPA Calculator</button>
            </Link>
            </div>
          </div>
        </>
      )}
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/sgpa-calculator" element={<SgpaCalculator />} />
        <Route path="/cgpa-calculator" element={<CgpaCalculator />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
