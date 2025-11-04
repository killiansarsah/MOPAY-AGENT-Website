import React from 'react';

const Security: React.FC = () => {

    const securityFeatures = [
        {
            icon: 'fas fa-lock',
            title: 'End-to-End Encryption',
            description: 'All your transaction data is encrypted, both in transit and at rest, ensuring it remains private and secure.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Secure PIN & Biometrics',
            description: 'Protect your account with a secure PIN or use your fingerprint for an extra layer of security.'
        },
        {
            icon: 'fas fa-cloud-slash',
            title: 'Offline Data Protection',
            description: 'Your data is securely stored on your device when offline and safely synced when you reconnect.'
        },
        {
            icon: 'fas fa-user-secret',
            title: 'Privacy First',
            description: 'We are committed to protecting your privacy. We never share your personal or business data with third parties.'
        }
    ];

    return (
        <section id="security" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative fade-in-up text-center lg:text-left">
                        <i className="fas fa-shield-alt text-violet-200 text-9xl absolute -top-8 -left-8 transform rotate-[-15deg] opacity-50 z-0 security-icon-float"></i>
                         <div className="relative z-10">
                             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Your Safety and Security is Our
                                <span className="text-violet-500"> Priority</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We employ robust, industry-standard security measures to protect your account, your data, and your business, giving you complete peace of mind.
                            </p>
                        </div>
                    </div>
                    <div className="fade-in-up" style={{ transitionDelay: '200ms' }}>
                       <div className="space-y-8">
                           {securityFeatures.map((feature, index) => (
                               <div key={index} className="flex items-start space-x-6">
                                   <div className="bg-violet-100 text-violet-500 rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                                       <i className={`${feature.icon} text-2xl`}></i>
                                   </div>
                                   <div>
                                       <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                                       <p className="text-gray-600">{feature.description}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;