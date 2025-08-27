import AnimatedSection from './AnimatedSection';

export default function Resume() {
    const resume = "https://drive.google.com/file/d/1u050XXC6TrAyAG4p0FEmy24s5mFSR3_Q/view?usp=sharing"
    return (
        <section id="resume">
            <div className="flex min-h-0 flex-col gap-y-3 mt-10">
                <AnimatedSection animation="slideUp" delay={100}>
                    <h2 className="text-xl font-bold">Resume</h2>
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={200}>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <a target="_blank" rel="noopener noreferrer" className="hover-effect inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground border border-input hover:bg-accent h-9 px-4 py-2 w-full sm:w-auto gap-2 transition-all duration-300" href={resume}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                                <path d="M10 9H8"/>
                                <path d="M16 13H8"/>
                                <path d="M16 17H8"/>
                            </svg>
                            View Resume
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}