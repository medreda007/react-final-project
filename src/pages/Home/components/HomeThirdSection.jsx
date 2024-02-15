import React from 'react';
import "./HomeThirdSection.scss"
import blog1 from "../../../assets/img/clean-bulking_600x.webp"
import blog2 from "../../../assets/img/HIIT_Workouts_2_600x.webp"
import blog3 from "../../../assets/img/cozar-deadlift_600x.webp"

export const HomeThirdSection = () => {
    return (
        <>
            <section className='py-5 flex flex-col items-center justify-center'>
                <div className=" text-3xl font-bold pb-4">
                    <h1>OUR BLOG</h1>
                </div>
                <div className="flex lg:flex-row flex-col h-fit w-[75%] gap-5 justify-center py-7">
                    <div className="h-fit lg:w-1/3">
                        <div className="h-96 lg:w-full bg-black" style={{ backgroundImage: `url(${blog1})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                        <div className="pt-4">
                            <p className='opacity-45 text-xs'>
                                NUTRITION
                            </p>
                            <h1 className='font-semibold '>CLEAN BULKING - HOW TO CLEAN BULK THE EASY WAY?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repellat itaque qui nisi non officiis.</p>
                        </div>
                    </div>
                    <div className="h-fit lg:w-1/3">
                        <div className="h-96 lgw-full" style={{ backgroundImage: `url(${blog2})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                        <div className="pt-4">
                            <p className='opacity-45 text-xs'>TRAINING</p>
                            <h1 className='font-semibold '>27 HIIT WORKOUTS TO BUILD MUSCLE & MELT FAT</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repellat itaque qui nisi non officiis.</p>
                        </div>
                    </div>
                    <div className="h-fit lg:w-1/3">
                        <div className="h-96 lg:w-full" style={{ backgroundImage: `url(${blog3})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                        <div className="pt-4">
                            <p className='opacity-45 text-xs'>
                                NUTRITION
                            </p>
                            <h1 className='font-semibold '>WHAT DOES CREATINE DO FOR WOMEN?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repellat itaque qui nisi non officiis. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-20 flex flex-col items-center justify-center '>
                <div className="text-3xl font-bold pb-4 flex justify-center w-full text-center">
                    <h1>@ FOLLOW US ON INSTAGRAM</h1>
                </div>
                <div className="flex lg:flex-row flex-col justify-between gap-y-6 lg:w-full w-[90vw] lg:p-24 py-10  pb-20">
                    <div className="lg:border-r-2 py-5 lg:pr-20 flex flex-col text-center items-center">
                        <h1 className='text-xl opacity-80'>Free Delivery Worldwide</h1>
                        <p className='opacity-55'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="border-r-2 lg:border-l-0 border-l-2 py-5 lg:pr-20 flex flex-col text-center justify-center items-center">
                        <h1 className='text-xl opacity-80'>30 Days Return</h1>
                        <p className='opacity-55'>Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className="py-5 lg:pr-20 flex flex-col text-center items-center">
                        <h1 className='text-xl opacity-80'>Store Opening</h1>
                        <p className='opacity-55'>Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </section>
        </>
    );
};

