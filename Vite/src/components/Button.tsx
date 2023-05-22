import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return <button> Your Text: {text}</button>;
};

export default Button;