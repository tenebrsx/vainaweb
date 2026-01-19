'use client';
import { motion } from 'framer-motion';

export default function Services() {
    const needs = [
        {
            title: "Web Design",
            desc: "Interfaces que no aburren. Diseñamos experiencias visuales que pegan, con estética brutalista y funcionalidad nítida.",
        },
        {
            title: "Branding",
            desc: "Identidad con personalidad. Creamos marcas que hablan claro y se ven durísimas en cualquier plataforma.",
        },
        {
            title: "Development",
            desc: "Código limpio, sin disparates. Construimos sitios rápidos, escalables y optimizados para el mundo real.",
        }
    ];

    return (
        <section id="servicios" className="py-32 border-t border-acid-grid relative bg-acid-black">
            {/* Blueprint background adjustment for this section */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <h2 className="font-display text-display text-acid-white uppercase">
                        Lo que <span className="text-acid-lime">hacemos</span>
                    </h2>
                    <p className="font-sans text-acid-grey text-lg uppercase tracking-widest mt-4">
                        Hacemos que tu marca no se vea aburrida.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border-t border-acid-grid">
                    {needs.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative p-10 group hover:bg-neutral-900/50 transition-all duration-300 overflow-hidden border-b border-acid-grid"
                        >
                            {/* Vertical Line Animation */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
                                className="absolute left-0 top-0 w-[1px] bg-acid-grid"
                            />

                            {/* Content Fade In */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                            >
                                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-acid-lime opacity-50">
                                    0{index + 1}
                                </div>
                                <h3 className="font-display text-4xl text-acid-white mb-6 uppercase group-hover:text-acid-lime transition-colors">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-acid-grey text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-8 w-12 h-1 bg-acid-lime transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </motion.div>
                        </motion.div>
                    ))}
                    {/* Closing Border */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                        className="absolute right-0 top-0 w-[1px] bg-acid-grid hidden md:block" // Approximate for grid right edge if needed, or rely on container
                    />
                </div>
            </div>
        </section>
    );
}
