import { useRef } from 'react'
import AnimatedTextLine from './AnimatedTextLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeader = ({ title, sub, aboutText, linkText, textColor, withScrollTrigger = false }) => {

    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const resumeRef = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: withScrollTrigger ? {
                trigger: contextRef.current
            } :
                undefined
        });

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
        }, "<+0.2");
        tl.from(resumeRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: 'power1.inOut'
        }, '<+1.5');
    }, [])

    return (
        <div ref={contextRef}>
            <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
                <div className="flex flex-col justify-center gap-12 pt-16 sm:gap-16" ref={headerRef}>
                    <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}>{sub}</p>
                    <div className="px-10">
                        <h1 className={`flex flex-col flex-wrap gap-12
                            uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}>
                            {title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`relative px-10 ${textColor}`}>
                <div className="absolute inset-x-0 border-t-2" />
                <div className="py-12 sm:py-16 text-end">
                    <AnimatedTextLine
                        text={aboutText}
                        className={`font-light uppercase value-text-responsive ${textColor}`}
                    />
                    <a
                        ref={resumeRef}
                        href="/resume.pdf"
                        download="Vibhudendra_Resume.pdf"
                        className="relative cursor-pointer group inline-flex items-center gap-2"
                    >
                        {linkText}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AnimatedHeader