import React from 'react';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button } from '@material-tailwind/react';

export const TheFooter = () => {
    return (
        <>
            <Footer className='bg-gray-100 lg:p-24 ps-5 py-5'>
                <div className="w-full">
                    <div className="flex flex-col gap-5 items-start lg:justify-between lg:flex-row">
                        <div className=''>
                            <Footer.Title title="Get in touch" className='text-black' />
                            <p className='lg:w-[30vw] py-2'>
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                            </p>
                            <div className="mt-4 flex lg:justify-start space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon href="#" icon={BsFacebook} />
                                <Footer.Icon href="#" icon={BsInstagram} />
                                <Footer.Icon href="#" icon={BsTwitter} />
                                <Footer.Icon href="#" icon={BsGithub} />
                                <Footer.Icon href="#" icon={BsDribbble} />
                            </div>
                        </div>
                        <div className='w-fit'>
                            <Footer.Title title="help center" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Discord Server</Footer.Link>
                                <Footer.Link href="#">Twitter</Footer.Link>
                                <Footer.Link href="#">Facebook</Footer.Link>
                                <Footer.Link href="#">Contact Us</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className='w-fit'>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Licensing</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className='w-fit'>
                            <Footer.Title title="download" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">iOS</Footer.Link>
                                <Footer.Link href="#">Android</Footer.Link>
                                <Footer.Link href="#">Windows</Footer.Link>
                                <Footer.Link href="#">MacOS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title title="newsletter" />
                            <div className="flex flex-col h-full gap-5">
                                <input type="email" className='border border-t-0 border-l-0 border-r-0 p-0 bg-gray-100' placeholder='Email Adress' />
                                <Button className='bg-black rounded-full'>
                                    SUBSCRIBE
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 px-4 py-6  flex items-center justify-center lg:absolute lg:left-0 lg:bottom-1 ">
                        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                    </div>
                </div>
            </Footer>
        </>
    );
};

