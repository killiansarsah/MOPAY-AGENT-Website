import React, { useState } from 'react';

const screenshots = [
    "https://images.unsplash.com/photo-1598528236232-75d27c65b16e?q=80&w=1887&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616441313387-21a117b44788?q=80&w=1887&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600171249911-375f4a4d6?q=80&w=1887&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1770&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop"
];

interface ScreenshotCardProps {
    src: string;
    index: number;
}

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({ src, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex-shrink-0 mx-4 lg:mx-6 hover-scale">
            <div className="phone-mockup-new h-[500px] w-[250px] lg:h-[550px] lg:w-[275px]" style={{ borderWidth: '10px', borderRadius: '35px' }}>
                <div className="phone-screen p-0">
                    {!isLoaded && <div className="skeleton-loader"></div>}
                    <img 
                        src={src} 
                        alt={`App screenshot ${index + 1}`} 
                        className={`w-full h-full object-cover rounded-[25px] transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        See
                        <span className="text-violet-500"> MOPAY AGENT in Action</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore the clean and intuitive interface that makes managing your business a breeze.
                    </p>
                </div>
            </div>

            <div className="fade-in-up w-full overflow-hidden marquee-wrapper">
                 <div className="marquee-container">
                    {[...screenshots, ...screenshots].map((src, index) => (
                        <ScreenshotCard key={index} src={src} index={index % screenshots.length} />
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default Gallery;