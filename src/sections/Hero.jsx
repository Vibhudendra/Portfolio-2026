import { useRef } from "react"
import AnimatedTextLine from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = `I'm Somewhat of a 
                     WebDev Myself`

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: 'circ.out'
        });
        tl.from(headerRef.current, {
            opacity: 0,
            y: 200,
            duration: 1,
            ease: "circ.out"
        }, "<+0.2")
    }, [])

    return (
        <section className="flex flex-col justify-end min-h-screen" id="Home">
            <div ref={contextRef}>
                <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
                    <div className="flex flex-col justify-center gap-12 pt-16 sm:gap-16" ref={headerRef}>
                        <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">200 Portfolio Found</p>
                        <div className="px-10">
                            <h1 className='flex flex-col flex-wrap gap-12 text-black 
                            uppercase banner-text-responsive sm:gap-16 md:block'>
                                Vibhu
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="relative px-10 text-black">
                    <div className="absolute inset-x-0 border-t-2" />
                    <div className="py-12 sm:py-16 text-end">
                        <AnimatedTextLine
                            text={aboutText}
                            className="font-light uppercase value-text-responsive" />

                    </div>
                </div>
            </div>

            <figure
                className="absolute inset-0 -z-50"
                style={{
                    width: "100vw",
                    height: "100vh"
                }}
            >
                
            </figure>
        </section >
    )
}

export default Hero