import React, { useState } from 'react';
import ProductNFSeFree from './products/ProductNFSeFree';
import ProductPatrimonial from './products/ProductPatrimonial';

const ProductsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        <ProductNFSeFree key="free" />,
        <ProductPatrimonial key="patrimonial" />
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div id="products-carousel" className="carousel-container relative">
            <div className="carousel-wrapper">
                {slides[currentSlide]}
            </div>

            <button
                className="carousel-arrow prev"
                onClick={prevSlide}
                aria-label="Previous Product"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <button
                className="carousel-arrow next"
                onClick={nextSlide}
                aria-label="Next Product"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ProductsCarousel;
