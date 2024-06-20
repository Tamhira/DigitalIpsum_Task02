import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Service from "./components/Services";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation></Navigation>
        <Home></Home>
        <Service></Service>
        <Info></Info>
        <About></About>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
