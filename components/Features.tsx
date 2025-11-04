import React from 'react';
import { featuresData } from '../constants';

interface FeatureCardProps {
    icon: string;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconBg, iconColor, title, description, delay }) => (
    <div className="feature-card glass-effect p-8 text-center fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
            <i className={`${icon} text-2xl ${iconColor}`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="features" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Feature
                        <span className="text-violet-500"> Highlights</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        MOPAY AGENT is packed with features to help you work faster, smarter, and grow your agency banking business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} delay={index * 50} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;