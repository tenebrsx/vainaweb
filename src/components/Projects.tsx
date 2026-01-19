'use client';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Projects() {
    const projects = [
        { id: 1, name: "Neon Drift", category: "Web Design" },
        { id: 2, name: "Barrio Hype", category: "Branding" },
        { id: 3, name: "Cibao Tech", category: "Development" },
        { id: 4, name: "Santo Domingo Motors", category: "App Interface" },
    ];

    return (
        <section id="proyectos" className="py-32 border-t border-acid-grid bg-acid-black">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="font-display text-6xl md:text-display text-acid-white uppercase mb-16 text-right">
                    Vainas <span className="text-acid-lime">Duras</span>
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="flex flex-col"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }
                            }}
                            className="group border-t border-acid-grid py-12 flex flex-col md:flex-row justify-between items-baseline hover:bg-neutral-900/30 transition-colors cursor-pointer"
                        >
                            <Magnetic>
                                <h3 className="font-display text-5xl md:text-7xl text-acid-white uppercase transition-transform duration-300 group-hover:text-acid-lime inline-block">
                                    {project.name}
                                </h3>
                            </Magnetic>
                            <span className="font-mono text-acid-grey text-sm uppercase tracking-widest mt-4 md:mt-0">
                                {project.category}
                            </span>
                        </motion.div>
                    ))}
                    <div className="border-t border-acid-grid" />
                </motion.div>

                <div className="mt-16 text-center">
                    <a href="#" className="inline-block border-b-2 border-acid-lime text-acid-white font-sans text-xl uppercase hover:text-acid-lime transition-colors pb-1">Ver todos los proyectos</a>
                </div>
            </div>
        </section>
    );
}
