import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-title-main">Build in a weekend</span>
                    <span className="hero-title-sub">Scale to billions</span>
                </h1>
                <p className="hero-description">
                    Your app is an open source Firebase alternative.
                    Start your project with a Postgres database, Authentication, instant APIs, Edge
                    Functions, Realtime subscriptions, Storage, and Vector embeddings.
                </p>
                <div className="hero-buttons">
                    <button className="button button-primary">Start your project</button>
                    <button className="button button-secondary">Documentation</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;