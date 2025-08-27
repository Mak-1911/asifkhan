import OnTimeHire from '../../../public/ontimehire_logo.jpg'
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Experience() {
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3 mt-10">
                <AnimatedSection animation="slideUp" delay={100}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={200}>
                    <a className="block cursor-pointer hover-effect" href="https://ontimehire.com/">
                        <div className="rounded-lg text-card-foreground flex transition-all duration-300">
                            <div className="flex-none">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                                    <Image src={OnTimeHire} alt="OnTimeHire" className="aspect-square h-full w-full" width={200} height={200} />
                                </span>
                            </div>
                            <div className="flex-grow ml-4 items-center flex-col group">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-x-2 text-base">
                                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">OnTimeHire
                                            <span className="inline-flex gap-x-1"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </h3>
                                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">July 2024 - May 2025</div>
                                    </div>
                                    <div className="font-sans text-xs">Software Engineer Intern</div>
                                </div>
                                <div className="mt-2 text-xs sm:text-sm" style={{ opacity: 1, height: '0px' }}>
                                    Built the company&apos;s candidate matching algorithm. Built a system in python that reduced manual overhead and automated processes. 
                                    
                                </div>
                            </div>
                        </div>
                    </a>
                </AnimatedSection>
                
            </div>
        </section>
    );
}