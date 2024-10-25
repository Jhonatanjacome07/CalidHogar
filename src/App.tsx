import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/ui/layout/Header";
import { Footer } from "./components/ui/layout/Footer";
import Home from "./components/pages/Home";
import Pets from "./components/pages/Pets";
import PetDetails from "./components/pages/PetDetails";
import Shelters from "./components/pages/Shelter";
import SheltersDetails from "./components/pages/ShelterDetail";
import About from "./components/pages/About";
import { Register as Register } from "./components/pages/Register";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/shelters" element={<Shelters />} />
            <Route path="/shelters/:id" element={<SheltersDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
