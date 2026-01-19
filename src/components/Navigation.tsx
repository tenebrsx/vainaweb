import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="relative w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 text-acid-white">
            <div className="font-display font-bold text-xl tracking-tighter uppercase">
                VainaWeb
            </div>

            <div className="hidden md:flex gap-12 font-sans text-sm tracking-widest uppercase">
                <Link href="#inicio" className="hover:text-acid-lime transition-colors duration-300">
                    Inicio
                </Link>
                <Link href="#agencia" className="hover:text-acid-lime transition-colors duration-300">
                    Agencia
                </Link>
                <Link href="#servicios" className="hover:text-acid-lime transition-colors duration-300">
                    Servicios
                </Link>
                <Link href="#proyectos" className="hover:text-acid-lime transition-colors duration-300">
                    Proyectos
                </Link>
            </div>

            <div>
                <Link
                    href="#contacto"
                    className="px-6 py-2 border border-acid-white rounded-full font-sans text-xs uppercase tracking-widest hover:bg-acid-lime hover:border-acid-lime hover:text-acid-black transition-all duration-300"
                >
                    Contratar
                </Link>
            </div>
        </nav>
    );
}
