import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Contact from "./components/Footer";
import Workflow from "./components/Workflow";
import LoadingPage from "./components/LoadingPage";
import ProjectList from "./components/ProjectList";
import ProjectView from "./components/ProjectView";

function App() {
  return (
    <Router>
      <PageLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Project4" element={<Project4 />} />
          <Route path="/Project5" element={<Project5 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Workflow" element={<Workflow />} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/ProjectView" element={<ProjectView />} />
        </Routes>
      </PageLoader>
    </Router>
  );
}

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") { // Only show loading for Home page
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2500); // Simulate loading delay (800ms)
      return () => clearTimeout(timer);
    } else {
      setLoading(false); // No loading for other pages
    }
  }, [location]);

  return loading ? <LoadingPage /> : children;
};

export default App;
