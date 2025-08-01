import React, { useRef, useEffect } from 'react';

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
            <h2>Focus Input Example</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="I will be focused on mount and button click"
                style={{ padding: '8px', width: '300px' }}
            />
            <br />
            <button onClick={handleClick} style={{ marginTop: 10 }}>
                Focus Input
            </button>
        </div>
    );
};

export default FocusInput;
