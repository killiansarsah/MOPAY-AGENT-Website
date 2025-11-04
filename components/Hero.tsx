import React, { useState, useEffect, useRef } from 'react';

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


const screens = [
    {
        type: 'home',
        title: 'Dashboard',
        balance: 'GHS 1,250.75',
    },
    {
        type: 'transaction',
        title: 'Cash Out',
        recipient: '024 123 4567',
        amount: 'GHS 50.00'
    },
    {
        type: 'success',
        title: 'Success!',
        message: 'Transaction complete.'
    }
];

const PhoneScreenContent = ({ screenData }: { screenData: typeof screens[0] }) => {
    if (screenData.type === 'home') {
        return (
            <div className="flex-grow flex flex-col justify-between text-left">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <LogoIcon className="h-10 w-10" />
                        <h3 className="text-lg font-bold">MOPAY AGENT</h3>
                    </div>
                    <p className="text-sm text-gray-500">Available Balance</p>
                    <p className="text-3xl font-bold text-gray-800">{screenData.balance}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <button className="bg-sky-100 text-sky-600 p-3 rounded-lg screen-content-button"><i className="fas fa-paper-plane"></i><span className="block text-xs mt-1">Send</span></button>
                    <button className="bg-emerald-100 text-emerald-600 p-3 rounded-lg screen-content-button"><i className="fas fa-wallet"></i><span className="block text-xs mt-1">Withdraw</span></button>
                    <button className="bg-violet-100 text-violet-500 p-3 rounded-lg screen-content-button"><i className="fas fa-file-invoice-dollar"></i><span className="block text-xs mt-1">Pay Bill</span></button>
                </div>
            </div>
        );
    }

    if (screenData.type === 'transaction') {
        const { title, recipient, amount } = screenData as { title: string, recipient: string, amount: string };
        return (
            <div className="flex-grow flex flex-col text-left">
                <h3 className="text-xl font-bold mb-6">{title}</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-xs text-gray-500">Recipient</label>
                        <p className="text-lg font-semibold border-b-2 pb-1">{recipient}</p>
                    </div>
                    <div>
                        <label className="text-xs text-gray-500">Amount</label>
                        <p className="text-lg font-semibold border-b-2 pb-1">{amount}</p>
                    </div>
                </div>
                <button className="w-full bg-violet-500 text-white py-3 rounded-lg mt-auto cta-button screen-content-button">Confirm</button>
            </div>
        );
    }
    
    if (screenData.type === 'success') {
        return (
            <div className="flex-grow flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-check text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{screenData.title}</h3>
                <p className="text-gray-600">{screenData.message}</p>
            </div>
        );
    }

    return null;
}

const FloatingShapes = () => (
    <div className="floating-shapes-container" aria-hidden="true">
        <div className="floating-shape" style={{ left: '25%', width: '80px', height: '80px', animationDelay: '0s' }}></div>
        <div className="floating-shape" style={{ left: '10%', width: '20px', height: '20px', animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="floating-shape" style={{ left: '70%', width: '20px', height: '20px', animationDelay: '4s' }}></div>
        <div className="floating-shape" style={{ left: '40%', width: '60px', height: '60px', animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="floating-shape" style={{ left: '65%', width: '20px', height: '20px', animationDelay: '0s' }}></div>
        <div className="floating-shape" style={{ left: '75%', width: '110px', height: '110px', animationDelay: '3s' }}></div>
        <div className="floating-shape" style={{ left: '35%', width: '150px', height: '150px', animationDelay: '7s' }}></div>
        <div className="floating-shape" style={{ left: '50%', width: '25px', height: '25px', animationDelay: '15s', animationDuration: '45s' }}></div>
        <div className="floating-shape" style={{ left: '20%', width: '15px', height: '15px', animationDelay: '2s', animationDuration: '35s' }}></div>
        <div className="floating-shape" style={{ left: '85%', width: '150px', height: '150px', animationDelay: '0s', animationDuration: '11s' }}></div>
    </div>
);


const Hero: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const prevScreenRef = useRef<number>(screens.length - 1);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


    useEffect(() => {
        const setNextScreen = () => {
            setCurrentScreen(prev => {
                prevScreenRef.current = prev;
                return (prev + 1) % screens.length;
            });
        };

        if (!isHovered) {
            timeoutRef.current = setTimeout(setNextScreen, 3000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentScreen, isHovered]);

    return (
        <section className="relative section-padding pt-32 pb-20 lg:pt-40">
            <div id="hero-background" className="absolute top-0 left-0 w-full h-full animated-gradient-bg z-0">
                <FloatingShapes />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white text-center lg:text-left fade-in-up">
                        <div className="glass-effect p-8 !bg-black !bg-opacity-10 !border-white !border-opacity-20">
                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                                Modern Mobile Banking For Agents
                            </h1>
                            <p className="text-lg mb-8 text-violet-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                               MOPAY AGENT brings automation to let mobile money agents complete transactions in seconds. No more re-dialing long USSD codes. No more pen and paper records. Work faster and earn more with MOPAY AGENT!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                               <a href="#" className="app-store-btn">
                                    <i className="fab fa-apple"></i>
                                    <div className="btn-text">
                                        <span>Download on the</span>
                                        <strong>App Store</strong>
                                    </div>
                                </a>
                                <a href="#" className="app-store-btn">
                                    <i className="fab fa-google-play"></i>
                                    <div className="btn-text">
                                        <span>GET IT ON</span>
                                        <strong>Google Play</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="relative fade-in-up floating-animation hero-phone-mockup-wrapper" 
                        style={{ animationDelay: '0.2s' }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="phone-mockup-new">
                            <div className="phone-screen">
                                <div className="absolute top-4 left-0 right-0 flex justify-between items-center text-xs text-gray-500 px-6 z-20">
                                    <span>9:51</span>
                                    <div className="flex items-center space-x-1">
                                        <i className="fas fa-signal"></i>
                                        <i className="fas fa-wifi"></i>
                                        <i className="fas fa-battery-full"></i>
                                    </div>
                                </div>
                                {screens.map((screen, index) => {
                                    const isCurrent = currentScreen === index;
                                    const isPrev = prevScreenRef.current === index;
                                    
                                    let transformClass = 'translate-x-full';
                                    if (isCurrent) {
                                        transformClass = 'translate-x-0 z-10';
                                    } else if (isPrev) {
                                        transformClass = '-translate-x-full';
                                    }

                                    return (
                                        <div
                                            key={index}
                                            className={`screen-content pt-10 ${isCurrent ? 'opacity-100' : 'opacity-0'} ${transformClass}`}
                                        >
                                            <PhoneScreenContent screenData={screen} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;