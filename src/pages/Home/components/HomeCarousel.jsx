import React from 'react';
import './HomeCarousel.scss'
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const HomeCarousel = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="pt-5 pb-12 lg:block hidden">

            <div className="carousel-wrapper">
                <span id="target-item-1"></span>
                <span id="target-item-2"></span>
                <span id="target-item-3"></span>
                <span id="target-item-4"></span>
                <span id="target-item-5"></span>

                <div className="carousel-item item-1 lg:relative">
                    <a className="arrow arrow-prev" href="#target-item-3"></a>
                    <div className="lg:absolute left-48 top-64 ">
                        <h1 className=' text-5xl lg:w-72 lg:text-white pb-4'>Our Premium Products</h1>
                        <Button onClick={() => navigate("/Shop/")} className='bg-black rounded-none w-44'>Go Shop</Button>
                    </div>
                    <a className="arrow arrow-next" href="#target-item-2"></a>
                </div>

                <div className="carousel-item item-2 lg:relative">

                    <a className="arrow arrow-prev" href="#target-item-1"></a>
                    <div className="lg:absolute left-48 top-64">
                        <h1 className=' text-5xl lg:w-[26rem] text-gray-800  pb-4'>Check Our Health Friendly Products</h1>
                        <Button onClick={() => navigate("/Shop/")} className='bg-white text-black rounded-none w-44'>Go Shop</Button>
                    </div>
                    <a className="arrow arrow-next" href="#target-item-3"></a>
                </div>

                <div className="carousel-item item-3 lg:relative">

                    <a className="arrow arrow-prev" href="#target-item-2"></a>
                    <div className="lg:absolute left-48 top-64">
                        <h1 className=' text-5xl lg:w-[27rem]  pb-4'> Check Our New Gym Wear Collection</h1>
                        <Button onClick={() => navigate("/Shop/")} className='bg-white text-black rounded-none w-44'>Go Shop</Button>
                    </div>
                    <a className="arrow arrow-next" href="#target-item-4"></a>
                </div>
            </div>
        </div>
        </>
    );
};

