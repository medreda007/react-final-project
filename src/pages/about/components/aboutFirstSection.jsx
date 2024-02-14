import React from 'react';
import bannerImg from "../../../assets/img/workout-supplements-that-work_lead.avif"
import portrait from "../../../assets/img/smiling-woman-sport-clothes-rolling-mat-yoga-studio_618663-8.avif"

export const AboutFirstSection = () => {
    return (
        <>
            <div className="bg-blue-gray-300 h-[35vh]" style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="w-full h-full flex items-center justify-center text-5xl bg-[#00000092] text-white">About</div>
            </div>
            <div className="lg:p-10 flex lg:justify-center  ">
                <div className="w-[75%] flex gap-x-10 py-9 lg:flex-row flex-col ">
                    <div className="h-[60vh] lg:w-[50vw] w-[90vw] lg:ms-0 ms-5" style={{ backgroundImage: `url(${portrait})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover" }}></div>
                    <div className="w-[100vw] lg:p-0 p-6">
                        <h2 className='text-3xl py-3'>Our story</h2>
                        <p className='text-[18px] opacity-60'>Embark on a journey to holistic wellness with our digital marketplace, where a plethora of supplements awaits to optimize your vitality. Dive into a realm of possibilities as we guide you through an extensive array of carefully curated products designed to support your well-being. From essential vitamins to specialized formulations, our platform empowers you to make informed choices that align with your health goals. Explore the transformative potential of natural remedies and unlock the path to enhanced vitality. With our comprehensive selection and expert guidance, achieving optimal wellness has never been more accessible. Join us on this transformative voyage and embrace a lifestyle of holistic health and vitality.</p>
                        <div className="border-l-2 border-black opacity-60 border-opacity-40 mt-5 ms-3 ps-8">
                        <p className=''>
                        "The body is not fashioned by wishing, but by doing. The key to bodybuilding is consistency, hard work, and never, ever giving up."                        </p>
                        <span className='opacity-45'>Lee Haney, 8-time Mr. Olympia champion.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

