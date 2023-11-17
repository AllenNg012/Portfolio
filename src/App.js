import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";


function App() {
  return (
  
        <Router><Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Project1" element={<Project1 />}>        </Route>
        <Route path="/Project2" element={<Project2 />}>        </Route>
        <Route path="/Project3" element={<Project3 />}>        </Route>
        <Route path="/Project4" element={<Project4 />}>        </Route>
        <Route path="/Project5" element={<Project5 />}>        </Route>
        </Routes></Router>
  );
}

export default App;

