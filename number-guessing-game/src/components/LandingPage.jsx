import React from "react";
import { useNavigate } from "react-router-dom";
import "../LandingPage.css";
import { Vortex } from './ui/background-beams-with-collision';
import { TextGenerateEffect } from "./ui/text-generate-effect";

const LandingPage = () => {
    const navigate = useNavigate();

    const mainTitle = "Welcome to the Number Guessing Game! 🎯";
    const description = "Test your intuition and logical thinking in this exciting number guessing challenge!";
    const howToPlaySteps = [
        "Think of a number between 1 and 100",
        "Enter your guess in the input field",
        "Get hints if your guess is too high or too low",
        "Try to guess the number in as few attempts as possible!"
    ];

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <Vortex className="wavy-container" showRadialGradient={true} />
            <div className="landing-page">
                <div className="main-title">
                    <h1 className="text-gradient">
                        <TextGenerateEffect words={mainTitle} />
                    </h1>
                </div>
                <p className="main-description">
                    <TextGenerateEffect words={description} />
                </p>

                <div className="features-section">
                    <h2><TextGenerateEffect words="Game Features" /></h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <span className="feature-emoji">🎮</span>
                            <h3><TextGenerateEffect words="Simple to Play" /></h3>
                            <p><TextGenerateEffect words="Easy to understand, challenging to master" /></p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-emoji">🏆</span>
                            <h3><TextGenerateEffect words="Track Your Score" /></h3>
                            <p><TextGenerateEffect words="See how many attempts it takes to win" /></p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-emoji">💡</span>
                            <h3><TextGenerateEffect words="Smart Hints" /></h3>
                            <p><TextGenerateEffect words="Get helpful feedback after each guess" /></p>
                        </div>
                    </div>
                </div>

                <div className="how-to-play">
                    <h2><TextGenerateEffect words="How to Play" /></h2>
                    <ol>
                        {howToPlaySteps.map((step, index) => (
                            <li key={index}>
                                <TextGenerateEffect words={step} />
                            </li>
                        ))}
                    </ol>
                </div>

                <button className="start-button" onClick={() => navigate("/game")}>
                    Play Now ✨
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
