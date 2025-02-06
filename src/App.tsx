import { useEffect, useState } from "react";
import NavBar from "./scenes/navbar/index.tsx";
import Home from "./scenes/home/index.tsx";
import { SelectedPage } from "./shared/types.ts";
import Benefits from './scenes/benefits/index.tsx';
import OurClasses from './scenes/ourClasses/index.tsx';
import ContactUs from './scenes/contactUs/index.tsx';
import Footer from './scenes/footer/index.tsx';

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);//enferred type
  const[isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useEffect(()=>{const handleScroll = ()=>{
    if(window.scrollY===0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home)
    }
    else 
      setIsTopOfPage(false);
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);
    
  }
  },[])
  return (
    <div className="app bg-amber-50 h-full w-full">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>

  )
}

export default App
