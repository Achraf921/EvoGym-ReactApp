import React from 'react'
import { SelectedPage } from '../../shared/types'
import useMediaQuery from '../../hooks/useMediaQuery'
import ActionButton from '../../shared/ActionButton'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import HomePageText from '@/assets/HomePageText.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


type Props = {
    setSelectedPage:(arg:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px");
  return (
    <section id="home" className={`${/*'bg-gray-200 '*/''}py-10 md:h-full md:pb-0 bg-amber-50`}>
    {/*Image + Main header */}
    <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={()=>{setSelectedPage(SelectedPage.Home)}}>
        {/*Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/*Headings*/}
            <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2}} variants={{hidden:{opacity:0, x:-50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
                <div className="relative">
                    <div>
                    <img alt="HomePageText" src={HomePageText}></img>
                    </div>
                </div>
                <p className="mt-8 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci debitis harum! Sint nam itaque eveniet repellat deserunt eligendi hic mollitia, tempora consectetur omnis? Modi tempora ea incidunt amet iusto.  
                </p>
            </motion.div>
            {/*Actions */}
            <motion.div className="mt-8 flex items-center gap-8" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.5,duration:2}} variants={{hidden:{opacity:0, x:-50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink className ="text-sm font-bold text-red-400 underline hover:text-amber-400" onClick={()=>{setSelectedPage(SelectedPage.ContactUs)}} href={`#${SelectedPage.ContactUs}`}>
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
        </div>
        {/*Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="HomePageGraphic" src={HomePageGraphic}/>
        </div>
    </motion.div>
    {/*Sponsors */}
    {isAboveMediumScreen&&(
      <div className="h-[150px] w-full bg-pink-100 py-10 mt-25">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="sponsorNum1" src={SponsorRedBull}></img>
            <img alt="sponsorNum2" src={SponsorForbes}></img>
            <img alt="sponsorNum3" src={SponsorFortune}></img>
          </div>
        </div>
      </div>
    )}
    </section>
  )
}

export default Home