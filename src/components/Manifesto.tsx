'use client';
import { motion } from 'framer-motion';

export default function Manifesto() {
    return (
        <section id="agencia" className="py-32 flex items-center justify-center bg-acid-lime text-acid-black border-t border-b border-acid-black relative overflow-hidden">
            {/* Background noise or pattern could go here */}
            <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <h2 className="font-display text-5xl md:text-7xl uppercase leading-tight max-w-4xl mx-auto flex flex-col items-center">
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="block"
                        >
                            "Menos bulto,
                        </motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
                            className="block italic"
                        >
                            más código
                        </motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                            className="block text-3xl md:text-5xl mt-4"
                        >
                            No usamos plantillas de $50."
                        </motion.span>
                    </div>
                </h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 font-sans text-xl md:text-2xl font-bold uppercase tracking-wide max-w-2xl mx-auto border-t-2 border-acid-black pt-8"
                >
                    Creamos herramientas que de verdad funcionan.
                </motion.p>
            </div>
        </section>
    );
}
