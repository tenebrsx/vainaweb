import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-acid-black text-acid-white border-t border-acid-grid pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-acid-lime to-transparent opacity-50" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="font-display text-display uppercase leading-none mb-6">
                            ¿Listo para <br />
                            <span className="text-acid-lime">romperla?</span>
                        </h2>
                        <Link
                            href="mailto:hola@vainaweb.com"
                            className="inline-block px-8 py-4 border-2 border-acid-white text-acid-white font-sans text-xl uppercase tracking-widest hover:bg-acid-lime hover:border-acid-lime hover:text-acid-black transition-all duration-300"
                        >
                            Hablemos
                        </Link>
                    </div>

                    <div className="flex flex-col justify-end items-start md:items-end">
                        <p className="font-sans text-acid-grey text-sm uppercase tracking-widest mb-4">
                            Santo Domingo, República Dominicana
                        </p>
                        <p className="font-sans text-acid-grey text-sm uppercase tracking-widest">
                            © {new Date().getFullYear()} VainaWeb. All Rights Reserved.
                        </p>
                    </div>
                </div>

                {/* Big Footer Logo */}
                <div className="w-full border-t border-acid-grid pt-10">
                    <h1 className="font-display text-[15vw] leading-none text-center opacity-10 uppercase tracking-tighter">
                        VainaWeb
                    </h1>
                </div>
            </div>
        </footer>
    );
}
