import { SelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage:string;
    setSelectedPage:(value:SelectedPage)=>void;

}

const Link = ({page,selectedPage,setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(" ", "") as SelectedPage;//forces ts to treat it as a SelectedPage enum
    
  return (
    <AnchorLink href={`#${lowerCasePage}`} onClick={()=>{setSelectedPage((lowerCasePage as SelectedPage));}} className={`${selectedPage === lowerCasePage ? "text-pink-500" : ""} transition duration-500 hover:text-pink-300`}>
        {page}
    </AnchorLink>
  )
}

export default Link