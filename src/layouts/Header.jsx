import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import "./Header.scss";
import profilImg from "../assets/img/icon-header-01.png"
import bagImg from "../assets/img/icon-header-02.png"





const Header = () => {



    return (
        <>
            <Navbar fluid rounded className={"p-5 navbar w-full  "}>
                <Navbar.Brand as={Link} href="https://flowbite-react.com" className={""}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className={"navbar-inner"}>
                    <Link className='mt-2' to={"/"} active>
                        Home
                    </Link>
                    <Link className='mt-2' as={Link} to={"/About"}>
                        About
                    </Link>
                    <Link className='mt-2' href="#">Services</Link>
                    <Link className='mt-2' href="">Pricing</Link>
                    <Link className='mt-2' to={'/Contact'}>Contact</Link>
                    <div className="navbar-end">
                        <Navbar.Link href="#"><img src={profilImg} className='h-8 mt-1' alt="" /></Navbar.Link>
                        <Navbar.Link href="#"><img src={bagImg} className='h-8' alt="" /></Navbar.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;