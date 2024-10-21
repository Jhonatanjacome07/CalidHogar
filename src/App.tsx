import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/ui/layout/header";
import { Footer } from "./components/ui/layout/footer";
import Home from "./components/pages/home";
import Pets from "./components/pages/pets";
import PetDetails from "./components/pages/petdetails";
import Shelters from "./components/pages/shelterdetail";
import About from "./components/pages/about";
import { Register as Register } from "./components/pages/register";

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
