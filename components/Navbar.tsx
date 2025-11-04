import React, { useState, useEffect } from 'react';

const LogoIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="#c4b5fd"/>
        <g fill="#4f46e5">
            {/* Phone */}
            <path d="M32 75 H50 V45 H32 A5 5 0 0 0 27 50 V70 A5 5 0 0 0 32 75 Z" />
            {/* Phone Screen */}
            <rect x="30" y="48" width="17" height="24" rx="2" fill="white"/>
            {/* User on screen */}
            <circle cx="38.5" cy="54" r="4" fill="#4f46e5"/>
            <path d="M34 63 C 36 58, 41 58, 43 63" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
            {/* Hand with phone */}
            <path d="M22 60 L40 78 L45 70 L28 53 Z" />
            {/* Banknote */}
            <path d="M55 20 L80 30 L75 50 L50 40 Z" />
            <circle cx="61" cy="34" r="3" fill="white" />
            <circle cx="71" cy="38" r="3" fill="white" />
            {/* Hand with cash */}
            <path d="M83 35 L60 18 L55 25 L78 42 Z" />
        </g>
    </svg>
);

const Logo = ({ colorClass }: { colorClass: string }) => (
    <a href="#" className="flex items-center space-x-2">
         <LogoIcon className="h-10 w-10" />
        <span className={`text-2xl font-bold ${colorClass}`}>MOPAY AGENT</span>
    </a>
);

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#', text: 'HOME' },
        { href: '#features', text: 'FEATURES' },
        { href: '#gallery', text: 'GALLERY' },
        { href: '#testimonials', text: 'TESTIMONIALS' },
        { href: '#security', text: 'SECURITY' },
        { href: '#contact', text: 'CONTACT' },
    ];

    const navClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect !bg-opacity-80 shadow-lg' : 'bg-transparent pt-4'}`;
    const textColor = scrolled ? 'text-gray-800' : 'text-white';
    const linkHoverColor = scrolled ? 'hover:text-violet-500' : 'hover:text-gray-200';
    const downloadBtnClasses = `border ${scrolled ? 'border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white' : 'border-white text-white hover:bg-white hover:text-violet-600'}`;

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Logo colorClass={scrolled ? 'text-violet-500' : 'text-white'} />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navLinks.map(link => (
                                <a key={link.text} href={link.href} className={`text-sm font-semibold tracking-wider ${textColor} ${linkHoverColor} transition-colors`}>{link.text}</a>
                            ))}
                            <a href="#download" className={`${downloadBtnClasses} px-5 py-2 rounded-md text-sm font-medium transition-colors cta-button`}>DOWNLOAD</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${textColor} ${linkHoverColor}`}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'} ${scrolled ? 'bg-white' : 'bg-violet-800 bg-opacity-90'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`${scrolled ? 'text-gray-800 hover:text-violet-500' : 'text-white hover:text-violet-200'} block px-3 py-2 rounded-md text-base font-medium`}>{link.text}</a>
                    ))}
                     <a href="#download" onClick={() => setIsMenuOpen(false)} className={`${downloadBtnClasses} block text-center mt-2 px-3 py-2 rounded-md text-base font-medium`}>DOWNLOAD</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;