
import React, { useContext, useEffect, useMemo, useState } from 'react';
import './HomeFirstSection.scss'
import gymWearImg from "../../../assets/img/the-best-nike-crossfit-clothing.jpg"
import proteinProdImg from "../../../assets/img/istockphoto-1015345458-612x612.jpg"
import energyProdImg from "../../../assets/img/360_F_168424497_Jx54f2sJuyaBUuNds69LD4NKkr42qRR0.jpg"
import snacksProdImg from "../../../assets/img/nutrition-bar.webp"
import workoutGearImg from "../../../assets/img/gettyimages-175454010-612x612.jpg"
import healthProdImg from "../../../assets/img/herbal-vitamin.jpg"
import { Button } from '@material-tailwind/react';

export const FirstSection = () => {


    return (
        <>
            <div class="lg:flex lg:flex-row justify-center items-center lg:gap-8 p-4">
                <div className="flex flex-col lg:w-[22vw] gap-7 lg:pb-0 pb-4">
                    <div>
                        <div className="h-[420px] " style={{ backgroundImage: `url(${proteinProdImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}>
                            <div className="bg-[#00000068] h-full w-full flex items-end justify-center">
                            <Button className='bg-gray-50 text-gray-600 mb-5 rounded-none px-14 text-[14px] bg-opacity-95'>PROTEIN</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[320px] " style={{ backgroundImage: `url(${energyProdImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}>
                            <div className="bg-[#00000068] h-full w-full flex items-end justify-center">
                                <Button className='bg-gray-50 text-gray-600 mb-5 rounded-none px-14 text-[14px] bg-opacity-95'>ENERY BOOSTERS</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[20vw] gap-7 lg:pb-0 pb-4">
                    <div>
                        <div className="h-[320px] " style={{ backgroundImage: `url(${healthProdImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}>
                            <div className="bg-[#00000068] h-full w-full flex items-end justify-center">
                                <Button className='bg-gray-50 text-gray-600 mb-5 rounded-none  text-[14px] bg-opacity-95'>HEALTH AND WELLNESS</Button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="h-[420px] " style={{ backgroundImage: `url(${snacksProdImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}>
                            <div className="bg-[#00000068] h-full w-full flex items-end justify-center">
                                <Button className='bg-gray-50 text-gray-600 mb-5 rounded-none px-14 text-[14px] bg-opacity-95'>SNACKS</Button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[20vw] gap-7 lg:pb-0 pb-4">
                    <div>
                        <div className="h-[420px] " style={{ backgroundImage: `url(${gymWearImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}>
                            <div className="bg-[#00000068] h-full w-full flex items-end justify-center">
                                <Button className='bg-gray-50 text-gray-600 mb-5 rounded-none px-14 text-[14px] bg-opacity-95'>GYM WEAR</Button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="h-[320px] " style={{ backgroundImage: `url(${workoutGearImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}>
                            <div className="bg-[#00000068] h-full w-full flex items-end justify-center">
                                <Button className='bg-gray-50 text-gray-600 mb-5 rounded-none px-12 text-[14px] bg-opacity-95'>WORKOUT GEAR</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
