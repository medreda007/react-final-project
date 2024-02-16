import React, { useContext, useState } from 'react';
import "./HomeSecondSection.scss"
import { MyContext } from '../../../utils/contextProvider';
import { Tabs } from 'flowbite-react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    DialogHeader,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

import grafitti from "../../../assets/img/seamless-background-fitness-theme-graffiti-style-seamless-background-fitness-theme-graffiti-style-barbells-137876077.webp"


export const HomeSecondSection = () => {
    const [allProducts, setAllProducts, newProd, setNewProd, onSales, setOnSales, bestSeller, setBestSeller, cart, setCart] = useContext(MyContext)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let theRandomProd = allProducts[getRandomInt(20)]
    console.log(theRandomProd);

    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);

    const addToCart = (arrayType, index) => {
        let prodAdded
        if (arrayType === "newProd") {
            prodAdded = newProd[index]
        } else if (arrayType === "onSales") {
            prodAdded = onSales[index]
        } else if (arrayType === "bestSeller") {
            prodAdded = bestSeller[index]
        }

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


    let advice = [
        {
            advice:"Start Slowly and Progress Gradually:",
            desc:"It's essential to begin with light weights and low-intensity exercises to allow your body to adapt and prevent injuries. Gradually increase the weight or intensity as you become more comfortable and stronger."
        },
        {
            advice:"Don't Compare Yourself to Others:",
            desc:"Everyone's fitness journey is unique, and progress varies from person to person. Avoid comparing yourself to others in the gym. Focus on your own goals, celebrate your achievements, and stay motivated by your own progress."
        },
        {
            advice:"Consistency is Key:",
            desc:"Consistency is more important than intensity when it comes to achieving fitness goals. Aim for regular workouts, even if they're shorter or less intense. Establishing a routine will help you stay on track and see progress over time."
        },
        {
            advice:"Listen to Your Body:",
            desc:"Pay attention to how your body feels during and after workouts. If you experience pain beyond normal muscle soreness, it's a sign to stop and reassess your approach. Rest when needed, and don't push yourself too hard too quickly."
        },
        {
            advice:"Focus on Proper Form:",
            desc:"Proper form is crucial for maximizing results and preventing injuries. Take the time to learn the correct form for each exercise. Consider working with a personal trainer, at least initially, to ensure you're performing exercises correctly."
        },
    ]

    function getRandomInt2(max) {
        return Math.floor(Math.random() * max);
    }
    let theRandomadvice = advice[getRandomInt(5)]


    return (
        <>
            <section className="flex justify-center pt-5">
                <Tabs aria-label="Default tabs " className='flex justify-center  ' style="default">
                    <Tabs.Item className='' active title="New Products" >
                        <div className="flex lg:flex-row flex-col gap-3 justify-center items-center">
                            {
                                newProd.map((item, index) => (
                                    <div  className="flex ">
                                        <Card className="w-80 h-96">
                                            <CardHeader shadow={false} floated={false} className="h-96">
                                                <div onClick={() => navigate(`/Products/${item.name}`)} className="cursor-pointer h-full w-full object-cover" style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}></div>
                                            </CardHeader>
                                            <CardBody>
                                                <div className="mb-2 flex items-center justify-between">
                                                    <Typography onClick={() => navigate(`/Products/${item.name}`)} color="blue-gray" className="cursor-pointer font-medium">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography color="blue-gray" className="font-medium">
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
                                                    onClick={() => addToCart("newProd", index)}
                                                    fullWidth={true}
                                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                                >
                                                    Add to Cart
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                        {/* <div className="">{item.name}</div> */}
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="On sales" className='text-xl'>
                        <div className="flex lg:flex-row flex-col gap-3 justify-center items-center">
                            {
                                onSales.map((item, index) => (
                                    <div className="flex ">
                                        <Card className="w-80 h-96">
                                            <CardHeader shadow={false} floated={false} className="h-96">
                                                <div className="h-full w-full object-cover" style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}></div>
                                            </CardHeader>
                                            <CardBody>
                                                <div className="mb-2 flex items-center justify-between">
                                                    <Typography color="blue-gray" className="font-medium">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography color="blue-gray" className="font-medium">
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
                                                    onClick={() => addToCart("onSales", index)}
                                                    ripple={false}
                                                    fullWidth={true}
                                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                                >
                                                    Add to Cart
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                        {/* <div className="">{item.name}</div> */}
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Best seller" className='text-xl'>
                        <div className="flex lg:flex-row flex-col gap-3 justify-center items-center">
                            {
                                bestSeller.map((item, index) => (
                                    <div className="flex ">
                                        <Card className="w-80 h-96">
                                            <CardHeader shadow={false} floated={false} className="h-96">
                                                <div className="h-full w-full object-cover" style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}></div>
                                            </CardHeader>
                                            <CardBody>
                                                <div className="mb-2 flex items-center justify-between">
                                                    <Typography color="blue-gray" className="font-medium">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography color="blue-gray" className="font-medium">
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
                                                    onClick={() => addToCart("bestSeller", index)}
                                                    ripple={false}
                                                    fullWidth={true}
                                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                                >
                                                    Add to Cart
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                        {/* <div className="">{item.name}</div> */}
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.Item>

                </Tabs>
            </section>
            <section className="flex  justify-center p-5 bg-brown-50 py-10 my-8 ">
                <div className="w-[75vw] flex lg:flex-row justify-center items-center flex-col gap-5">
                    <div className="lg:w-1/2 w-[90vw] bg-blue-gray-300 h-96" style={{ backgroundImage: `url(${grafitti})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                        <div className="h-full text-center w-full text-white font-serif font-extrabold flex justify-center items-center text-5xl bg-[#00000080]">
                            Advice Of The Day
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-[90vw] bg-white h-96 flex flex-col items-center pt-3">
                        {/* <div className="h-[68%] w-[68%]" style={{ backgroundImage: `url(${theRandomProd.image})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div> */}
                        <div className="flex flex-col justify-center items-center mt-7">
                            <h1 className='text-4xl text-center font-semibold'>{theRandomadvice.advice}</h1>
                            {/* <p className='text-lg'>{theRandomProd.name} uygug iukhi</p> */}
                            {/* <span className=''>${theRandomProd.price}</span> */}
                            <p className='pt-10 px-5 font-semibold text-gray-600'>{theRandomadvice.desc}</p>
                        </div>
                    </div>
                </div>
            </section>

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
    )
};

