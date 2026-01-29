import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollSmoother); 

const Service = () => {

  useGSAP(()=>{
    gsap.to("#title-service-1",{
      xPercent:20,
      scrollTrigger:{
        trigger: "#title-service-1",
        scrub:true,
      }
    });
      gsap.to("#title-service-2",{
      xPercent:-20,
      scrollTrigger:{
        trigger: "#title-service-1",
        scrub:true,
      }
    });
      gsap.to("#title-service-3",{
      xPercent:20,
      scrollTrigger:{
        trigger: "#title-service-3",
        scrub:true,
      }
    });
    gsap.to("#title-service-4",{
      xPercent:-15,
      scrollTrigger:{
        trigger: "#title-service-4",
        scrub:true,
      }
    });
  })

  return (
   //-----------------------------------------------Service Section--------------------------------------------------//
      <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
        <div className="flex items-center justify-center gap-3 translate-x-16" id="title-service-1" >
          <p>Arcitecture</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Responsive</p>
        </div>

        <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16">
          <p className="font-normal">Development</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Deployment</p>
        </div>

        <div className="flex items-center justify-center gap-3 -translate-x-48" id="title-service-3">
          <p>APIs</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p className="italic bg-amber-300">Front-end</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p className="italic">Scalability</p>
        </div>

        <div className="flex items-center justify-center gap-3 translate-x-48" id="title-service-4">
          <p>Databases</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Indexing</p>
        </div>
      </section>
  //-----------------------------------------------Service Section--------------------------------------------------//
  )
}

export default Service