import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Arms from "./pages/Arms";
import Contacts from "./pages/Contacts";
import Criminal from "./pages/Criminal";
import Family from "./pages/Family";
import Home from "./pages/Home";
import RealState from "./pages/RealState";
import Traffic from "./pages/Traffic";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="arms" element={<Arms />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="criminal" element={<Criminal />} />
        <Route path="family" element={<Family />} />
        <Route path="realstate" element={<RealState />} />
        <Route path="traffic" element={<Traffic />} />
      </Routes>
    </div>
  );
}

export default App;
