export default function SocialSidebar() {
    return (
        <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8 mix-blend-difference">
            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a
                    key={social}
                    href="#"
                    className="font-mono text-[10px] uppercase text-acid-lime tracking-widest -rotate-90 origin-center whitespace-nowrap hover:text-white transition-colors"
                >
                    {social}
                </a>
            ))}
            <div className="w-[1px] h-20 bg-acid-lime mx-auto mt-4" />
        </div>
    );
}
