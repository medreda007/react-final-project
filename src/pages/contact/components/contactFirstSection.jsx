import React from 'react';
import "./contactFirstSection.scss";
import { Button } from '@material-tailwind/react';
import bannerImg from "../../../assets/img/workout-supplements-that-work_lead.avif"


export const ContactFirstSection = () => {
    return (
        <>
            <div className="bg-blue-gray-300 h-[35vh]" style={{ backgroundImage: `url(${bannerImg})` , backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
                <div className="w-full h-full flex items-center justify-center text-5xl bg-[#00000092] text-white">Contact</div>
            </div>
            <div className="flex lg:justify-center lg:flex-row flex-col gap-10 lg:py-16 p-3"  >
                <div className="">
                    <iframe className='rounded-md lg:w-[500px] lg:h-[500px] w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212753.67440117247!2d-7.751805827694918!3d33.572178282583415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1707912039810!5m2!1sfr!2sma"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col lg:w-1/3 gap-5 ">
                    <h2 className='text-[25px] opacity-90 font-semibold'>Send us your message</h2>
                    <input className='rounded border border-black border-opacity-25' placeholder=' Name' type="text" />
                    <input className='rounded border border-black border-opacity-25' placeholder=' Email' type="email" />
                    <input className='rounded border border-black border-opacity-25' placeholder=' Phone' type="number" />
                    <textarea className='rounded border border-black border-opacity-25 h-[]' placeholder=' Message' name="" id="" cols="30" rows="7"></textarea>
                    <Button className='bg-black rounded-full w-1/3'>SEND</Button>
                </div>
            </div>
        </>
    );
};

