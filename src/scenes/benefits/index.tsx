import React from 'react'
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from '@heroicons/react/24/solid';
import { BenefitTypes, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import HTag from '../../shared/HTag';
import Benefit from './Benefit';
import AbstractWave from '@/assets/AbstractWaves.png';
import Sparkles from '@/assets/Sparkles.png'
import ActionButton from '../../shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits:Array<BenefitTypes> =[
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit, temporibus illo tenetur dolore accusamus aliquid quam soluta odit totam iure magnam deserunt voluptatum quia expedita alias ipsa, quisquam nulla."
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit, temporibus illo tenetur dolore accusamus aliquid quam soluta odit totam iure magnam deserunt voluptatum quia expedita alias ipsa, quisquam nulla."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit, temporibus illo tenetur dolore accusamus aliquid quam soluta odit totam iure magnam deserunt voluptatum quia expedita alias ipsa, quisquam nulla."
    }
];

const container ={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
};

type Props = {
    setSelectedPage:(arg:SelectedPage)=>void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>{setSelectedPage(SelectedPage.Benefits)}}>
            {/*Header*/}
            <motion.div className="md:my-5 md:w-3/5 pt-20" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2}} variants={{hidden:{opacity:0, x:-50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
                <HTag children="MORE THAN JUST A GYM."/>
                <p className="my-5 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, voluptatibus, sapiente amet deleniti praesentium a officia ratione culpa cupiditate unde facere architecto beatae quaerat excepturi iste libero numquam omnis maxime.</p>
            </motion.div>
            {/*Benefits */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} variants={container}>
                {benefits.map((benefit:BenefitTypes)=>(<Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>))}
            </motion.div>
            {/*Graphics and description*/}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*Graphic*/}
                <img className="mx-auto" alt="BenefitsPageGraphic" src={BenefitsPageGraphic}/>
                {/*Description*/}
                <div>
                    {/*Title*/}
                    <div className="relative">
                        <div className="before:absolute before-top-20 before:-left-20 before:z-[-1]">
                            <img alt="abstractWaves" src={AbstractWave}/>
                            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2}} variants={{hidden:{opacity:0, x:50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
                            <HTag>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-red-400">FIT</span></HTag>
                            </motion.div>
                        </div>
                    </div>
                    {/*Description*/}
                    <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:2}} variants={{hidden:{opacity:0, x:50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur tempore quasi ipsam odio ducimus, accusantium quisquam tenetur? Nulla recusandae, libero, vero praesentium autem quasi laboriosam minima atque excepturi repellendus ipsa?</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur harum, libero veniam dignissimos tempore, sequi mollitia optio ullam consectetur repellat omnis maiores eos rerum praesentium, iste laborum nemo obcaecati!</p>
                    </motion.div>
                    {/*Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                            <img alt="Sparkles" src={Sparkles} className="mb-10 z=[-1]"/>
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits