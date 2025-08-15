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
                        <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black shadow hover:bg-primary/90 h-9 px-4 py-2 w-full sm:w-auto" href={resume}>View Resume</a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}