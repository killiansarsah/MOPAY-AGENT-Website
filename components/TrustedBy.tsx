import React from 'react';

const partners = [
    { name: 'FintechOS' },
    { name: 'Solaris' },
    { name: 'nCino' },
    { name: 'Stripe' },
    { name: 'Plaid' },
];

const TrustedBy: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center fade-in-up">
                    <p className="text-gray-600 mb-8 text-lg">Trusted by innovative fintechs and banks</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-20">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex items-center space-x-3 hover-scale grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
                                <span className="text-2xl font-semibold text-gray-500">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;