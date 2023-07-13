import { useState } from "react";
import Button from "./Components/Button/Button";
import Textinput from "./Components/Textinput/Textinput";
import './index.css';



function App() {
  const [theme, setTheme] = useState("");

  return (
    <div className={`${theme} w-screen `}>
      <div className="flex  w-screen h-screen font-josefin bg-Mobile-Light bg-no-repeat bg-contain dark:bg-Mobile-Dark lg:bg-Desktop-Light dark:lg:bg-Desktop-Dark dark:bg-VeryDarkBlueDM">
        <header className="flex flex-col h-[50px] lg:w-[40%] mt-[40px] mx-auto justify-between items-center">
          <div className="flex w-[90%] justify-between mb-[25px]">
          <span className=" text-white text-2xl">TO DO</span>                 
          <Button setTheme={setTheme} />          
          </div>
          <Textinput/>             
        <section className="flex flex-col items-center  text-veryDarkGrayishBlue dark:text-LightGrayishBlueDM " >
          <span>Full Stack developer bootcamp</span>
          <span>Created by <a className= "underline" href="https://github.com/Alejandroc85">Alejandro Cuadrado</a></span>
        </section>
        </header>
      </div>
    </div>
  );
}

export default App;


