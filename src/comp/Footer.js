import React, { useState } from 'react';

const Footer = ({ language, onLanguageChange }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleLanguageSelection = (newLanguage) => {
        onLanguageChange(newLanguage);
        setMenuOpen(false); // Close the menu after selection
    };

    return (
        <div className="footerContainer">
            <div className="footer">
                <button
                    className="languageButton"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    {language} ▲
                </button>

                {isMenuOpen && (
                    <div className="dropUpMenu">
                        <button onClick={() => handleLanguageSelection('DE')}>DE</button>
                        <button onClick={() => handleLanguageSelection('FR')}>FR</button>
                        <button onClick={() => handleLanguageSelection('IT')}>IT</button>
                        <button onClick={() => handleLanguageSelection('EN')}>EN</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Footer;
