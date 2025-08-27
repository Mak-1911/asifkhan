import AnimatedSection from "./AnimatedSection";

export default function About(){
    return (
        <section id="about">
            <div className="mt-8">
                <AnimatedSection animation="slideUp" delay={100}>
                    <h2 className="text-xl font-bold">About</h2>
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={200}>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        <p>Engineer, developer, and leader building scalable tech solutions that drive impact and innovation.
                            Skilled in modern web technologies like React, Next.js, Node.js and  Python. 
                            Currently learning to tweak ML Models and building Alphas that predict the market.</p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}