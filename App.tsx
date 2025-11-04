import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Monitoring from './components/Monitoring';
import AIAssistant from './components/AIAssistant';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Security from './components/Security';

const useFadeInUp = () => {
    const elementsRef = useRef<Set<Element>>(new Set());

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(el => {
            if (!elementsRef.current.has(el)) {
                observer.observe(el);
                elementsRef.current.add(el);
            }
        });

        return () => {
            elementsRef.current.forEach(el => observer.unobserve(el));
        };
    }, []);
};

const useParallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const target = document.getElementById('hero-background');
            if (target) {
                const scrollPosition = window.scrollY;
                target.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};


const App: React.FC = () => {
    useFadeInUp();
    useParallax();

    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Gallery />
                <Monitoring />
                <Security />
                <AIAssistant />
                <Testimonials />
                <Demo />
            </main>
            <Footer />
        </div>
    );
};

export default App;