import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                        I’m a dedicated Software Engineer with a passion for building creative and impactful web solutions.
                         I enjoy transforming ideas into interactive, user-friendly experiences and exploring new ways to bring technology to life.
                          Beyond coding, I see every project as a chance to grow, innovate, and leave a meaningful mark in the digital space.
                    </p>
                    <p className="text-muted-foreground">
                        As a second-year Computer Science student, I’ve been building my skills in HTML, CSS, JavaScript, React, and Node.js through projects, coursework, and continuous learning.
                         I’m passionate about creating responsive and user-friendly web applications, and I see every project as an opportunity to grow, experiment, and bring ideas to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                      <a href="#contact" className="cosmic-button">Get In Touch</a>
                      <a href="https://drive.google.com/file/d/1Ym60Qmdg89l-LylqEeWlkTolnKrryG6s/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Loading Projects from conception to completion with agile methodologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
