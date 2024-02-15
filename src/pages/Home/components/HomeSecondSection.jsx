import React, { useContext } from 'react';
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
} from "@material-tailwind/react";


export const HomeSecondSection = () => {
    const [allProducts, setAllProducts, proteinProducts, setProteinProducts, energyProducts, setEnergyProducts, healthProducts, setHealthProducts, snacksProducts, setSnacksProducts, gymWearProducts, setGymWearProducts, workoutGearProducts, setWorkoutGearProducts, newProd, setNewProd, onSales, setOnSales, bestSeller, setBestSeller, cart, setCart] = useContext(MyContext)

    return (
        <>
            <div className="flex justify-center pt-5">
                <Tabs aria-label="Default tabs " className='flex justify-center  ' style="default">
                    <Tabs.Item className='' active title="New Products" >
                        <div className="flex lg:flex-row flex-col gap-3 justify-center items-center">

                            {
                                newProd.map((item, index) => (
                                    <div className="flex ">
                                        <Card className="w-80 h-96">
                                            <CardHeader shadow={false} floated={false} className="h-96">
                                            <div className="h-full w-full object-cover" style={{backgroundImage:`url(${item.image})` , backgroundRepeat : "no-repeat" , backgroundPosition:"center" , backgroundSize:"contain"}}></div>
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
                    <Tabs.Item title="On sales" className='text-xl'>
                        <div className="flex lg:flex-row flex-col gap-3 justify-center items-center">
                            {
                                onSales.map((item, index) => (
                                    <div className="flex ">
                                        <Card className="w-80 h-96">
                                            <CardHeader shadow={false} floated={false} className="h-96">
                                            <div className="h-full w-full object-cover" style={{backgroundImage:`url(${item.image})` , backgroundRepeat : "no-repeat" , backgroundPosition:"center" , backgroundSize:"contain"}}></div>
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
                                                <div className="h-full w-full object-cover" style={{backgroundImage:`url(${item.image})` , backgroundRepeat : "no-repeat" , backgroundPosition:"center" , backgroundSize:"contain"}}></div>
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
            </div>
        </>
    )
};

