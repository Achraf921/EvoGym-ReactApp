import { SelectedPage } from '../../shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HTag from '../../shared/HTag';
import {ClassType} from '../../shared/types';
import Class from './Class';

const classes:Array<ClassType> =[
    {
        name:"Weight Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, aspernatur sequi officiis sapiente, cum error earum, voluptatem quibusdam ad quas. Excepturi explicabo quas mollitia velit culpa natus ipsa? Itaque?",
        image: image1
    },
    {
        name:"Yoga Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, aspernatur sequi officiis sapiente, cum error earum, voluptatem quibusdam ad quas. Excepturi explicabo quas mollitia velit culpa natus ipsa? Itaque?",
        image: image2
    },
    {
        name:"Ab Core Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, aspernatur sequi officiis sapiente, cum error earum, voluptatem quibusdam ad quas. Excepturi explicabo quas mollitia velit culpa natus ipsa? Itaque?",
        image: image3
    },
    {
        name:"Adventure Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, aspernatur sequi officiis sapiente, cum error earum, voluptatem quibusdam ad quas. Excepturi explicabo quas mollitia velit culpa natus ipsa? Itaque?",
        image: image4
    },
    {
        name:"Fitness Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, aspernatur sequi officiis sapiente, cum error earum, voluptatem quibusdam ad quas. Excepturi explicabo quas mollitia velit culpa natus ipsa? Itaque?",
        image: image5
    },
    {
        name:"Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo alias, aspernatur sequi officiis sapiente, cum error earum, voluptatem quibusdam ad quas. Excepturi explicabo quas mollitia velit culpa natus ipsa? Itaque?",
        image: image6
    }
]
type Props = {
    setSelectedPage:(arg:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section className="w-full bg-pink-100 py-10" id="ourclasses">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className="mx-auto w-5/6"  initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2}} variants={{hidden:{opacity:0, x:-50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
                        <div className="md:w-3/5">
                            <HTag>OUR CLASSES</HTag>
                            <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, nihil ullam aperiam recusandae blanditiis omnis voluptas in saepe autem provident quaerat praesentium hic eveniet est voluptatem tempore animi obcaecati! Vitae?</p>
                        </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((arg:ClassType, index:number)=>(<Class key={`${index}`} name={arg.name} description={arg.description} image={arg.image}/>))}
                </ul>
            </div>
        </motion.div>

    </section>
  )
}

export default OurClasses