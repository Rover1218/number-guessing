import React, { useState } from "react";
import "../GamePage.css";
import { Vortex } from './ui/background-beams-with-collision';

const GamePage = () => {
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("Guess a number between 1 and 100!");
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [attempts, setAttempts] = useState(0);
    const [isShaking, setIsShaking] = useState(false);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleGuess = () => {
        const userGuess = parseInt(guess, 10);
        if (isNaN(userGuess)) {
            setMessage("Please enter a valid number!");
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
            return;
        }

        setAttempts(attempts + 1);

        if (userGuess < randomNumber || userGuess > randomNumber) {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }

        if (userGuess < randomNumber) {
            setMessage("Too low! Try again.");
        } else if (userGuess > randomNumber) {
            setMessage("Too high! Try again.");
        } else {
            setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts!`);
        }

        setGuess("");
    };

    const restartGame = () => {
        setRandomNumber(generateRandomNumber());
        setMessage("Guess a number between 1 and 100!");
        setAttempts(0);
        setGuess("");
    };

    return (
        <Vortex className="wavy-container" showRadialGradient={true}>
            <div className="game-content">
                <p className={message.includes("Correct") ? "celebration" : ""}>
                    {message}
                </p>
                <div className={`input-container ${isShaking ? 'shake' : ''}`}>
                    <input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="Enter your guess"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && !message.includes("Correct")) {
                                handleGuess();
                            }
                        }}
                    />
                    <button
                        onClick={handleGuess}
                        disabled={message.includes("Correct")}
                        className="guess-button"
                    >
                        Guess
                    </button>
                </div>
                {message.includes("Correct") && (
                    <button className="restart-button" onClick={restartGame}>
                        Play Again 🎮
                    </button>
                )}
                <p>Attempts: {attempts}</p>
            </div>
        </Vortex>
    );
};

export default GamePage;
