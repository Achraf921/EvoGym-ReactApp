import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage:(arg:SelectedPage)=>void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md bg-yellow-400 px-10 py-2 hover:bg-pink-600 hover:text-white" onClick={()=>{setSelectedPage(SelectedPage.ContactUs);console.log(SelectedPage.ContactUs)}} href={`#${SelectedPage.ContactUs}`}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton