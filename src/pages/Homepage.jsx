import React, { useState, useEffect } from 'react';
import Background from './Background';
import Navigation from './Navigation';
import Typewriter from './Typewriter';

const Homepage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {isLoaded && (
                <>
                    <Background style={{ zIndex: -1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <Navigation /> 
                        <Typewriter />
                    </div>
                </>
            )}
        </div>
    );
};

export default Homepage;
