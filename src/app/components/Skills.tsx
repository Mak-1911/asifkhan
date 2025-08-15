import AnimatedSection from './AnimatedSection';

export default function Skills() {
    return(
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3 mt-10">
            <AnimatedSection animation="slideUp" delay={100}>
              <h2 className="text-xl font-bold">Skills</h2>
            </AnimatedSection>
            {/* Skills list */}
            {(() => {
                const skills = [
                    "Node.js",
                    "Python",
                    "TypeScript",
                    "REST API",
                    "Next.js",
                    "React.js",
                    "Docker",
                    "Machine Learning",
                    "Git",
                ];
                return (
                    <div className="flex flex-wrap gap-1">
                        {skills.map((skill, index) => (
                            <AnimatedSection 
                                key={skill} 
                                animation="scaleIn" 
                                delay={200 + (index * 50)}
                                className="inline-block"
                            >
                                <div className="inline-flex mt-2 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white text-black shadow hover:bg-gray-100">
                                    {skill}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                );
            })()} <div className="flex flex-wrap gap-1"></div>
          </div>
        </section>
    )
}