import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Contact, Event, Home, Navbar, Team } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/about" element={<About />} exact />
          <Route path="/events" element={<Event />} exact />
          <Route path="/team" element={<Team />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
