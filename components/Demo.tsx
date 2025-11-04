import React from 'react';

const Demo: React.FC = () => {
    return (
        <section id="download" className="section-padding bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Take your business to the 
                        <span className="text-violet-500"> next level</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                       Download the MOPAY AGENT app today and join thousands of agents growing their business.
                    </p>

                    <div className="flex justify-center">
                        <a href="#" className="hover-scale inline-block">
                            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-20"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;