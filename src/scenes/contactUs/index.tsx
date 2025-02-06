import { useForm } from "react-hook-form";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HTag from "../../shared/HTag";
import EvolveText from "@/assets/EvolveText.png";

type Props = {
  setSelectedPage:(arg:SelectedPage)=>void
}

const ContactUs = ({setSelectedPage}: Props) => {

  const styling = "mt-5 w-full roumded-lg bg-red-200 px-5 py-3 placeholde-white"

  const{
    register,
    trigger,
    formState:{errors}
  }= useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e:any)=>{
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault();
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
        {/*Header */}
        <motion.div className="md:w-3/5" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2}} variants={{hidden:{opacity:0, x:-50},
                                                                                                                                                             visible:{opacity:1,x:0}}}>
                    <HTag><span className="text-red-400">JOIN NOW</span>{" "}TO GET IN SHAPE</HTag>
                    <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolores mollitia rem, sed unde officiis debitis inventore quos. Corrupti sit assumenda temporibus, expedita nam libero quod quia veritatis culpa magnam?</p>
        </motion.div>
        {/*Form and img */}
        <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div className="mt-10 basis-3/5 md:mt-0" initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2}} variants={{hidden:{opacity:0, y:50},
                                                                                                                                                             visible:{opacity:1,y:0}}}></motion.div>
              <form target="_blank" onSubmit={onSubmit} method="POST" action="https://formsubmit.co/3c860359e7e70a8560f07a9cf28cb3d9">
                <input className={styling} type="text" placeholder="NAME" {...register("name",{
                  required:true,
                  maxLength:30
                })}/>
                {errors.name && (
                  <p className="mt-1 text-red-300">
                    {errors.name.type==="required"&&( "This field is required.")}
                    {errors.name.type==="maxLength" &&( "Max length is 30 charactrs.")}
                    
                  </p>
                )}
                <input className={styling} type="email" placeholder="EMAIL" {...register("email",{
                  required:true,
                  pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}/>
                {errors.email && (
                  <p className="mt-1 text-red-300">
                    {errors.email.type==="required"&&( "This field is required.")}
                    {errors.email.type==="pattern" &&( "Invalid email adress.")}
                  </p>
                )}
                <textarea className={styling} placeholder="MESSAGE" cols={50} rows={4}
                 {...register("message",{ 
                  required:true,
                  maxLength:200
                })}/>
                {errors.message && (
                  <p className="mt-1 text-red-300">
                    {errors.message.type==="required"&&( "This field is required.")}
                    {errors.message.type==="maxLength" &&( "Max length is 2000 charactrs.")}
                  </p>
                )}
              <button type="submit" className="mt-5 rounded-lg bg-amber-300 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
              </form>
              <motion.div className='relative mt-16 basis-2/5 md:mt-0' initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity:0, y:50},
                                                                                                                                                                                      visible:{opacity:1,y:0}}}>
                    <div className="md:before w-full before:absolute before:-bottom-20 before:-right-10 z-[-1]">
                      <img className="mb-10 md:before w-full before:absolute before:-bottom-20 before:-right-10 z-[-1]" src={EvolveText}/>
                      <img className="w-full" alt="contactuspagegraphic px-20" src={ContactUsPageGraphic}/>
                    </div>
              </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs