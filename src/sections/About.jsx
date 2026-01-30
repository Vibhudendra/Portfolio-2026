import { useRef } from "react"
import AnimatedHeader from "../components/AnimatedHeader"
import AnimatedTextLine from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const imgRef = useRef(null);
    const resumeRef = useRef(null);
    const text = `Mostly harmless.
    Occasionally useful`
    const aboutText = `Software developer who cares deeply about how things look, feel, and perform. During my time at Tata Consultancy Services and City Union Bank, I’ve contributed to meaningful products in the BFS domain — focusing on clarity, performance, and interfaces people can rely on.`

    useGSAP(() => {
        gsap.to("#About", {
            scale: 0.90,
            scrollTrigger: {
                trigger: "#About",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(73% 0, 73% 0, 50% 100%, 50% 100%);",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        }, '<+5');
        gsap.from(resumeRef.current, {
            opacity: 0,
            duration: 3,
            ease: "power4.out",
        }, '<+0.5');
    });

    return (
        <section id="About" className="min-h-screen bg-black rounded-b-2xl">
            <AnimatedHeader
                title={"Who Am I?"}
                sub={"Let's See"}
                aboutText={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-10 px-10 py-16 text-xl font-light tracking-tight lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/MAN2.png"
                    alt="man"
                    className="w-md rounded-2xl"
                />

                <div className="flex flex-col gap-4 w-full lg:w-1/2">
                    <AnimatedTextLine
                        text={aboutText}
                        className={"w-full"}
                    />
                    <a
                        ref={resumeRef}
                        href="/resume.pdf"
                        download="Vibhudendra_Resume.pdf"
                        className="relative cursor-pointer group inline-flex items-center gap-2 text-white/50 w-fit text-lg lg:text-xl"
                    >
                        Download Resume
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About