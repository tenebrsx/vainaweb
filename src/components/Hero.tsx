'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Hydraulic Crush Transforms
    // Top text moves DOWN towards center. 
    // Using percentages relative to element height. Since gap is approx equal to text height, ~100% is a good baseline.
    const yTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Bottom text moves UP towards center.
    const yBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    // Middle text gets crushed (scales Y to 0) and fades out
    const scaleYMiddle = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const opacityMiddle = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Fades out slightly faster than it crushes

    // Global fade out at the very end to smooth transition to next section
    const opacityGlobal = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    // Initial Loading Animation
    const loadTransition = { duration: 1.2, ease: "circOut" as const };

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-acid-black">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-b-4 border-acid-lime">

                {/* Background Grid & Elements */}
                <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none mix-blend-overlay" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/3 right-[15%] w-64 h-64 bg-acid-lime rounded-full blur-[100px] pointer-events-none mix-blend-screen"
                />

                {/* Main Content Wrapper */}
                <motion.div
                    className="relative z-10 w-full px-2 md:px-6 flex flex-col justify-center h-full"
                    style={{ opacity: opacityGlobal }}
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={loadTransition}
                >
                    <h1 className="font-display leading-[0.8] tracking-tighter uppercase w-full flex flex-col">

                        {/* Top Line */}
                        <div className="relative">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ ...loadTransition, delay: 0.2 }}
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-acid-grid origin-left"
                            />
                            <div className="flex items-center justify-between pb-2 md:pb-4 mb-2 md:mb-4">
                                <motion.span
                                    style={{ y: yTop, WebkitTextStroke: '2px white' }}
                                    className="text-[12vw] md:text-[14vw] text-transparent stroke-white block"
                                >
                                    Resolvemo
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="hidden md:block font-xs text-acid-lime font-mono"
                                >
                                    [ REF: 2026 ]
                                </motion.span>
                            </div>
                        </div>

                        {/* Middle Line - The Crush Zone */}
                        <div className="relative overflow-visible min-h-[16vw] flex items-center justify-center">
                            <motion.div
                                style={{ scaleY: scaleYMiddle, opacity: opacityMiddle }}
                                className="text-[14vw] md:text-[16vw] text-acid-lime mix-blend-difference font-mono origin-center"
                            >
                                Tu Vaina
                            </motion.div>
                        </div>

                        {/* Bottom Line */}
                        <div className="relative">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ ...loadTransition, delay: 0.2 }}
                                className="absolute top-0 right-0 w-full h-[1px] bg-acid-grid origin-right"
                            />
                            <div className="flex items-start justify-end pt-2 md:pt-4 mt-2 md:mt-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="hidden md:block max-w-sm font-sans text-sm text-acid-white text-left mr-auto mt-4 leading-relaxed"
                                >
                                    <p>Olvídate del bulto.</p>
                                    <p className="text-acid-grey">Diseño brutalista para marcas que no piden permiso.</p>
                                </motion.div>
                                <motion.span
                                    style={{ y: yBottom }}
                                    className="text-[14vw] md:text-[16vw] text-acid-white text-right block"
                                >
                                    Digital
                                </motion.span>
                            </div>
                        </div>
                    </h1>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 right-8 flex items-center gap-4"
                >
                    <span className="font-mono text-xs text-acid-lime uppercase">[ Scrollea ]</span>
                    <div className="w-12 h-[1px] bg-acid-lime" />
                </motion.div>
            </div>
        </section>
    );
}
