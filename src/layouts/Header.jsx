import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import "./Header.scss";
import profilImg from "../assets/img/icon-header-01.png"
import bagImg from "../assets/img/icon-header-02.png"


import { Button, Modal, Select } from 'flowbite-react';




const Header = () => {


    
    return (
        <>
            <Navbar fluid rounded className={"p-5  navbar w-full  shadow-xl "}>
                <Navbar.Brand as={Link}  className={""}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">LION<span className='text-red-700'>s</span>TORE</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className={"navbar-inner"}>
                    <Link className='mt-2' to={"/"} active>
                        Home
                    </Link>
                    <Link className='mt-2' to={"/Shop"}>Shop</Link>
                    <Link className='mt-2' href=""></Link>
                    <Link className='mt-2' as={Link} to={"/About"}>
                        About
                    </Link>
                    <Link className='mt-2' to={'/Contact'}>Contact</Link>
                    <div className="navbar-end flex lg:gap-0 gap-x-4">
                        <Link to={"/Account"}><img src={profilImg} className='h-8 mt-1' alt="" /></Link>
                        <Link to={"/Cart"}  className='z-30' ><img src={bagImg} className='h-8' alt="" /></Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    );
};

export default Header;