import React from 'react';
import './HomeCarousel.scss'

export const HomeCarousel = () => {
    return (
        <>
            <div className="carousel-wrapper">
                <span id="target-item-1"></span>
                <span id="target-item-2"></span>
                <span id="target-item-3"></span>
                <span id="target-item-4"></span>
                <span id="target-item-5"></span>

                <div className="carousel-item item-1">
                    
                    <a className="arrow arrow-prev" href="#target-item-3"></a>
                    <a className="arrow arrow-next" href="#target-item-2"></a>
                </div>

                <div className="carousel-item item-2">
                    
                    <a className="arrow arrow-prev" href="#target-item-1"></a>
                    <a className="arrow arrow-next" href="#target-item-3"></a>
                </div>

                <div className="carousel-item item-3">
                    
                    <a className="arrow arrow-prev" href="#target-item-2"></a>
                    <a className="arrow arrow-next" href="#target-item-4"></a>
                </div>

                <div className="carousel-item item-4">
                    
                    <a className="arrow arrow-prev" href="#target-item-3"></a>
                    <a className="arrow arrow-next" href="#target-item-5"></a>
                </div>

                <div className="carousel-item item-5">
                    <a className="arrow arrow-prev" href="#target-item-4"></a>
                    <a className="arrow arrow-next" href="#target-item-1"></a>
                </div>
                
            </div>
        </>
    );
};

