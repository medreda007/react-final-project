import React, { useContext, useState, useEffect } from 'react';
import bannerImg from "../../../assets/img/workout-supplements-that-work_lead.avif";
import { MyContext } from '../../../utils/contextProvider';
import {
    Button,
    DialogHeader,
    Dialog,
    DialogBody,
    DialogFooter,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
} from "@material-tailwind/react";

import { Card, Label, Radio } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export const ShopFirstSection = () => {

    const [allProducts, setAllProducts, newProd, setNewProd, onSales, setOnSales, bestSeller, setBestSeller, cart, setCart] = useContext(MyContext)

    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);



    const [showedProducts, setShowedProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        setShowedProducts(allProducts);
    }, [allProducts]);

    const showProduct = (category) => {
        setSelectedCategory(category);
        const filteredArray = allProducts.filter(element => element.type === category);
        setShowedProducts(filteredArray);
    };

    const showProductPrice1 = (price) => {
        let filteredArray;
        if (!selectedCategory) {
            filteredArray = allProducts.filter(element => element.price < price);
        } else {
            filteredArray = allProducts.filter(element => element.price < price && element.type === selectedCategory);
        }
        setShowedProducts(filteredArray);
    };

    const showProductPrice2 = (price) => {
        let filteredArray;
        if (!selectedCategory) {
            filteredArray = allProducts.filter(element => element.price >= price);
        } else {
            filteredArray = allProducts.filter(element => element.price >= price && element.type === selectedCategory);
        }
        setShowedProducts(filteredArray);
    };


    const addToCart2 = (index) => {
        let prodAdded
        prodAdded = showedProducts[index]

        const isAlreadyInCart = cart.some(item => item.name === prodAdded.name);

        if (!isAlreadyInCart) {
            prodAdded.quantity++
            cart.push(prodAdded)
        } else {
            prodAdded.quantity++
        }
        handleOpen("xs")
    }


    const navigate = useNavigate()

    return (
        <>
            <div className="bg-blue-gray-300 h-[35vh]" style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="w-full h-full flex items-center justify-center text-5xl bg-[#00000092] text-white">Products</div>
            </div>
            <div className="flex p-7 gap-7 lg:flex-row flex-col">
                <div className="lg:w-[25vw]">
                    <div className="flex flex-col lg:items-center lg:ps-0 ps-10 pt-10 gap-y-16">
                        <div className="flex flex-col lg:me-8 lg:py-4 w-40 lg:gap-0 gap-5 ">
                            <h1 className='pb-4 font-semibold text-xl '>Categories</h1>
                            <div className="flex flex-col gap-y-5">
                                <button onClick={() => { showProduct("protein") }} className='w-fit'>Protein</button>
                                <button onClick={() => { showProduct("energy") }} className='w-fit'>Energy boosters</button>
                                <button onClick={() => { showProduct("health") }} className='w-fit'>Health and wellness</button>
                                <button onClick={() => { showProduct("snacks") }} className='w-fit'>Snacks</button>
                                <button onClick={() => { showProduct("gymWear") }} className='w-fit'>Gym Wear</button>
                                <button onClick={() => { showProduct("workoutGear") }} className='w-fit'>Workout Gear</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:me-8 lg:py-4 w-40 lg:gap-0 gap-5">
                            <h1 className='pb-4 font-semibold text-xl'>Price</h1>
                            <div className="flex items-center gap-2">
                                <Radio onClick={() => { showProductPrice1(3000) }} id="united-state" name="price" value="1000-3000" defaultChecked />
                                <Label onClick={() => { showProductPrice1(3000) }} htmlFor="united-state">1000-3000</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio onClick={() => { showProductPrice2(3000) }} id="germany" name="price" value="4000-5000" />
                                <Label onClick={() => { showProductPrice2(3000) }} htmlFor="germany">3000-5000</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:w-[75vw] gap-5 justify-center py-14   ">
                    {showedProducts.map((item, index) => (
                        <div className="flex" key={index}>
                            <Card className="w-80 h-96">
                                <CardHeader shadow={false} floated={false} className="h-96">
                                    <div onClick={() => navigate(`/Products/${item.name}`)} className="h-full w-full object-cover cursor-pointer" style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}></div>
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography onClick={() => navigate(`/Products/${item.name}`)} color="blue-gray" className="font-medium cursor-pointer">
                                            {item.name}
                                        </Typography>
                                        <Typography onClick={() => navigate(`/Products/${item.name}`)} color="blue-gray" className="font-medium cursor-pointer">
                                            {item.price}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal opacity-75"
                                    >

                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button
                                        onClick={() => addToCart2(index)}
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    >
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Dialog
                open={
                    size === "xs"
                }
                size={size || "md"}
                handler={handleOpen}
            >
                <DialogHeader className='flex text-center'>Product added to cart successfuly</DialogHeader>
                <DialogBody className='flex justify-center pb-20'>
                    <div class="svg-container">
                        <svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                            <circle class="circle" fill="#5bb543" cx="24" cy="24" r="22" />
                            <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17" />
                        </svg>
                    </div>
                </DialogBody>
                <DialogFooter className='flex justify-center'>
                    <Button onClick={() => handleOpen(null)} className='bg-black w-1/2 rounded-full py-4 text-[14px]'>OK</Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};
