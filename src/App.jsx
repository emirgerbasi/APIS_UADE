import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import RecipeDetails from "./components/RecipeDetails";
import CustomerReviews from "./components/CustomerReviews";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <div id="home">
                  <Home />
                </div>

                <div id="dishes">
                  <Dishes />
                </div>

                <div id="about">
                  <About />
                </div>

                <div id="menu">
                  <Menu />
                </div>

                <div id="review">
                  <CustomerReviews />
                </div>
              </>
            } />
            <Route path="/recetas/:nombreReceta" element={<RecipeDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
