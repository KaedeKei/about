import { useState } from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-block">
            <div className='d-flex flex-column justify-content-center h-100 p-4'>
            <h1 className="fw-bold text-light w-15">Вот тут</h1>
            <h1 className="fw-bold text-light w-15">приветствие!</h1>
            </div>
        </div>
    )
}

export default Banner;