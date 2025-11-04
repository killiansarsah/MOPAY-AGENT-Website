import React from 'react';

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


const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="mb-4">
                           <Logo colorClass="text-white" />
                        </div>
                        <p className="text-gray-400 mb-6">
                           Modern Mobile Banking For Agents.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-violet-500 transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-violet-500 transition-colors">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                             <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                             <li><a href="mailto:support@mopayagent.com" className="hover:text-white transition-colors">support@mopayagent.com</a></li>
                            <li><a href="tel:+233123456789" className="hover:text-white transition-colors">+233 12 345 6789</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">© 2024 MOPAY AGENT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;