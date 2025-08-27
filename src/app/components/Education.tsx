import Image from 'next/image';
import EducationLogo from '../../../public/NIT_Durgapur_Logo.png'
import AnimatedSection from './AnimatedSection';

export default function Education() {
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3 mt-20">
                <AnimatedSection animation="slideUp" delay={100}>
                    <h2 className="text-xl font-bold">Education</h2>
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={200}>
                    <a className="block cursor-pointer hover-effect" href="https://nitdgp.ac.in/">
                        <div className="rounded-lg text-card-foreground flex transition-all duration-300">
                            <div className="flex-none">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                                    <Image src={EducationLogo} alt="EducationLogo" className="aspect-square h-full w-full" width={200} height={200} />
                                </span>
                            </div>
                            <div className="flex-grow ml-4 items-center flex-col group">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-x-2 text-base">
                                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">NIT Durgapur
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </h3>
                                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">2020 - 2024
                                    </div>
                                </div>
                                <div className="font-sans text-xs">Bachelor&apos;s in Electrical Engineering</div>
                                <div className="font-sans text-xs text-muted-foreground">CGPA: <span className="font-medium">7.64</span></div>
                            </div>
                            </div>
                        </div>
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}