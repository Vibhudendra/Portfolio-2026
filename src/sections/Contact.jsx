import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Contact = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Collaboratin",
    "Cool-Stuff",
    "Precision",
    "Trust",
  ];
  const items2 = [
    "連絡してください",
    "Contact",
    "ಸಂಪರ್ಕಿಸಿ",
    "संपर्क",
    "Contacto",
  ];

  useGSAP(()=>{
    gsap.to(containerRef.current,{
        scrollTrigger:{
            trigger:containerRef.current,
            start:"center center",
            end:"+=800 center",
            scrub:0.5,
            pin:true,
            pinSpacing:true
        }
    })
  })

  return (
    <secion
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
      ref={containerRef}
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light contact-text-responsive">
        <p>
          "Let's Build <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">cool</span> <br />
          Web-Applications <span className="text-gold">together</span>"
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassname="stroke-gold stroke-2 text-primary"
      />
    </secion>
  );
};

export default Contact;
