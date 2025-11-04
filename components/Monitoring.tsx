import React from 'react';

const Monitoring: React.FC = () => {
    const steps = [
        { icon: 'fas fa-download', title: '1. Download The App', description: 'Get the MOPAY AGENT app from the Google Play Store for free.' },
        { icon: 'fas fa-user-plus', title: '2. Register Your Account', description: 'Sign up in minutes with your agent details.' },
        { icon: 'fas fa-exchange-alt', title: '3. Start Transacting', description: 'Begin processing transactions faster and more efficiently.' }
    ];

    return (
        <section id="how-it-works" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Get started in 
                        <span className="text-violet-500"> 3 simple steps</span>
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="fade-in-up">
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-6">
                                    <div className="bg-violet-100 text-violet-500 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                                        <i className={`${step.icon} text-2xl`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-lg">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative fade-in-up" style={{ transitionDelay: '200ms' }}>
                        <img src="https://images.unsplash.com/photo-1580974928064-7f23a7d4551c?q=80&w=1887&auto=format&fit=crop" alt="Mobile money agent" className="rounded-2xl shadow-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Monitoring;