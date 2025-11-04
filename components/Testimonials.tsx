import React from 'react';
import { testimonialsData } from '../constants';

interface TestimonialCardProps {
    initials: string;
    bgColor: string;
    name: string;
    location: string;
    quote: string;
    delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ initials, bgColor, name, location, quote, delay }) => (
    <div className="testimonial-card glass-effect p-8 fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
        <div className="flex items-center mb-6">
            <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                {initials}
            </div>
            <div className="ml-4">
                <h4 className="font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-600 text-sm">{location}</p>
            </div>
        </div>
        <p className="text-gray-700 mb-4 italic">"{quote}"</p>
        <div className="flex text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Don't just take our word for it
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from agents who have transformed their business with
                        <span className="text-violet-500 font-semibold"> MOPAY AGENT</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                   {testimonialsData.map((testimonial, index) => (
                       <TestimonialCard key={index} {...testimonial} delay={index * 100}/>
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;