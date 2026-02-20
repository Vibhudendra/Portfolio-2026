import React from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { socials } from "../constants";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contacts = () => {
    const text = `Got something in mind?`
    const items = [
    "Built With Care",
    "Built With Care",
    "Built With Care",
  ];

  useGSAP(()=>{
    gsap.from(".social-link",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.5,
        ease:"back.out",
        scrollTrigger:{
            trigger:".social-link"
        }
    })
  })

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div className="">
        <AnimatedHeader
          title={"Cool Stuff"}
          sub={"Let's Cook some"}
          aboutText={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex px-10 font-light text-white lg:text-[32px] md:[26px] leading-none mb-10">
            <div className="flex flex-col w-full gap-10">
                <div className="social-link">
                    <h2>EMAIL</h2>
                    <div className="w-full h-px my-2 bg-white/30"/>
                    <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">vibhudendra.s@gmai.com</p>
                    <p className="text-xl tracking-wider md:text-lg lg:text-xl text-white/50 mt-2">I usually reply within a day.</p>
                </div>
                <div className="social-link">
                    <h2>ELSEWHERE ON THE INTERNET</h2>
                    <div className="w-full h-px my-2 bg-white/30"/>
                    <div className="flex flex-wrap gap-2 text-white/50 ">
                        {socials.map((social, index)=>(
                            <a className="hover:text-white transition-colors duration-500 hover:transform:translateX(4px)  text-lg md:text-xl leading-loose tracking-widest uppercase" href={social.href} key={index}>
                              {"{"}{social.name}{"}"}
                                </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Marquee
      items={items}
      className="text-white bg-transparent"
      />
    </section>
  );
};

export default Contacts;
