"use client";
import Navbar from "./components/navbar";
import Description from "./components/description";
import Platform from "./components/Platform";

const Home = () => {
  return (
    <main className="dark">
      <Navbar></Navbar>
      <Description></Description>
      <Platform></Platform>
    </main>
  );
};

export default Home;
