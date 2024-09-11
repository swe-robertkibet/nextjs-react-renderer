import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">
                        We are a cutting-edge technology company dedicated to revolutionizing the way businesses handle their data and applications. With our innovative platform, we empower developers and companies to build, scale, and manage their projects with unprecedented ease and efficiency.
                    </p>
                    <button className="about-cta">Learn More</button>
                </div>
                <div className="about-stats">
                    <div className="stat-item">
                        <h3 className="stat-number">1M+</h3>
                        <p className="stat-label">Users</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">100+</h3>
                        <p className="stat-label">Countries</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">99.99%</h3>
                        <p className="stat-label">Uptime</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">24/7</h3>
                        <p className="stat-label">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;