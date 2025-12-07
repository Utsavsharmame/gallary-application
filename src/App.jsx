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
import Courses from "./pages/Courses";
import Kids from "./pages/Kids";
import Nav2 from "./components/Nav2";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <div className="flex flex-col text-center h-screen bg-black text-white">
      <Navbar />
      <Nav2 />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        <Route path='/courses/:courseId' element={<CourseDetails />} />
     


      <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
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
