import { Route, Routes } from "react-router-dom";
import Homepage from "./scenes/Homepage";
import Navbar from "./components/Navbar";
import Blogs from "./scenes/Blogs";

function App() {
  return (
    <div className="App" id="App">
      <div className="bg-backgroundColor-light dark:bg-backgroundColor-dark">
        <Navbar  />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
