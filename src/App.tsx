import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<MainContent />}></Route> */}
            {/* <Route path="/spaces/:id" element={<DetailContent />} /> */}
            <Route path="/about-us" element={<Home />} />
            <Route path="/contact-us" element={<Home />} />
            {/* <Route path="/profile/:id" element={<DetailUser />} />
            <Route path="/edit-profile/:id" element={<EditProfile />} />
            <Route path="/spaces/:id" element={<DetailContent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/follows" element={<Follow />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
