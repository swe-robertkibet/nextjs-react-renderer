import React from 'react';
import './Features.css';

const featureData = [
    {
        icon: '🛠️',
        title: 'Easy Setup',
        description: 'Get started in minutes with our intuitive setup process.'
    },
    {
        icon: '🚀',
        title: 'Scalable',
        description: 'Built to handle millions of users and billions of requests.'
    },
    {
        icon: '🔒',
        title: 'Secure',
        description: 'Enterprise-grade security with end-to-end encryption.'
    },
    {
        icon: '⚡',
        title: 'Fast',
        description: 'Optimized for speed with global CDN and edge functions.'
    },
    {
        icon: '📊',
        title: 'Analytics',
        description: 'Powerful insights with real-time analytics and reporting.'
    },
    {
        icon: '🔌',
        title: 'Integrations',
        description: 'Seamlessly connect with your favorite tools and services.'
    }
];

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="features-container">
                <h2 className="features-title">Why Choose Us</h2>
                <div className="features-grid">
                    {featureData.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;