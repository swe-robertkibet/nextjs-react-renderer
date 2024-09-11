import React from 'react';
import './SocialProof.css';

const testimonials = [
    {
        quote: "This product has completely transformed our workflow. It's intuitive, powerful, and incredibly fast.",
        author: "Jane Doe",
        position: "CEO, Tech Innovators"
    },
    {
        quote: "The level of customer support is unparalleled. They're always there when you need them.",
        author: "John Smith",
        position: "CTO, Global Solutions"
    },
    {
        quote: "I can't imagine running our business without this tool. It's become an integral part of our daily operations.",
        author: "Emily Chen",
        position: "Founder, StartUp Success"
    }
];

const clientLogos = [
    { name: 'Company A', logo: '🏢' },
    { name: 'Company B', logo: '🏭' },
    { name: 'Company C', logo: '🏗️' },
    { name: 'Company D', logo: '🏛️' },
    { name: 'Company E', logo: '🏠' }
];

const SocialProof = () => {
    return (
        <section className="social-proof">
            <div className="social-proof-container">
                <h2 className="social-proof-title">Trusted by Industry Leaders</h2>

                <div className="testimonials">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <p className="author-name">{testimonial.author}</p>
                                <p className="author-position">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="client-logos">
                    {clientLogos.map((client, index) => (
                        <div key={index} className="client-logo">
                            <span className="logo">{client.logo}</span>
                            <span className="company-name">{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;