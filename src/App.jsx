import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Women from "./pages/Women";
import Men from "./pages/Men";
import kids from "./pages/kids";
const App = () => {
  return (
    <div className="flex flex-col text-center h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} >
          
          <Route path="men" element={<Men />} />
      
       <Route path="women" element={<Women />} />
       <Route path="kids" element={<kids/>}/>
           </Route>
      
        <Route path='*' element={ <NotFound/>} />
        
       
       
        </Routes>
      </main>
     
      <footer className="py-4 text-sm border-t border-white/10">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default App;

