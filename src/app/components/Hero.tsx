import Image from "next/image";
import Profile from "../../../public/profile.jpg";
import AnimatedSection from "./AnimatedSection";

export default function Hero(){
    return(
        <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                  <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                      <AnimatedSection animation="slideUp" delay={200}>
                        <div className="flex">
                          <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Hi, I&apos;m Asif
                          </span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="slideUp" delay={400}>
                        <div className="flex">
                          <span className="inline-block max-w-[600px] md:text-xl">
                            Software Engineer, code slinging quant and wannabe model tweaker. Passionate about the point where Tech and Finance converge.
                          </span>
                        </div>
                      </AnimatedSection>
                    </div>
                    <AnimatedSection animation="scaleIn" delay={600}>
                      <div>
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-36 border">
                          <Image src={Profile} alt="Asif Khan" className="aspect-square h-full w-full" width={200} height={200} />
                        </span>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </section>
    )
}