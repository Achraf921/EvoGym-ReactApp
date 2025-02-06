import {useState,/* useEffect*/} from 'react';
import {Bars3Icon, XMarkIcon,/* XMarkIcon*/} from "@heroicons/react/24/solid";
import useMediaQuery from "../../hooks/useMediaQuery.ts";
import { SelectedPage } from "../../shared/types.ts";
import Link from "./Link.tsx";
import Logo from "@/assets/Logo.png" 
import ActionButton from '../../shared/ActionButton.tsx';
type Props = {
    selectedPage:string;
    setSelectedPage:(value:SelectedPage)=>void;
    isTopOfPage:boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navBarBackground = isTopOfPage?"":"bg-pink-100 drop-shadow"
  return (
    <nav>
        <div className={`${flexBetween} ${navBarBackground} fixed top-0 z-23 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/*Left Section */}
                <img src ={Logo} alt="logo"></img>
                {/*Right section*/}
                {isAboveMediumScreen?(<div className={`${flexBetween} w-full`}>
                    {/*Buttons header */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    {/*Sign in/Member */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                    </div>
                </div>):
                (<button className="rounded-full bg-yellow-500 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                    <Bars3Icon className="h-6 w-6 text-white"/>
                </button>)}
            </div>
            </div>
        </div>
        {/*MENU */}
    {((!isAboveMediumScreen)&&isMenuToggled)?(
        <div className="fixed right-0 bottom-align z-42 h-full w-[300px] bg-red-200 drop-shadow-xl">
            {/*CLOSE*/}
            <div className="flex justify-end p-12">
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
            </div>
            {/*BAR MENU*/}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
        </div>
    ):null}
    </nav>
  );
}


export default Navbar