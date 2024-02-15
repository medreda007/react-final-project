import React, { useContext, useEffect, useState } from 'react';
import "../Home/home.scss"
import { FirstSection } from './components/HomeFirstSection';
import { HomeCarousel } from './components/HomeCarousel';
import { HomeSecondSection } from './components/HomeSecondSection';
import { HomeThirdSection } from './components/HomeThirdSection';



export const HomePage = () => {

    return (
        <>
            <HomeCarousel/>
            <FirstSection/>
            <HomeSecondSection/>
            <HomeThirdSection/>
        </>
    );
}
