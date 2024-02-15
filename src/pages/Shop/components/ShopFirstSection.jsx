import React, { useContext, useState, useEffect } from 'react';
import bannerImg from "../../../assets/img/workout-supplements-that-work_lead.avif";
import { MyContext } from '../../../utils/contextProvider';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Label, Radio } from 'flowbite-react';

export const ShopFirstSection = () => {
    const [allProducts] = useContext(MyContext);
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

    return (
        <>
            <div className="bg-blue-gray-300 h-[35vh]" style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="w-full h-full flex items-center justify-center text-5xl bg-[#00000092] text-white">Products</div>
            </div>
            <div className="flex p-7 gap-7">
                <div className="lg:w-[25vw]">
                    <div className="flex flex-col bg-blue-gray-400 lg:items-center lg:ps-0 ps-10 pt-10 gap-y-16">
                        <div className="flex flex-col lg:me-8 lg:py-4 w-40">
                            <h1 className='pb-4 font-semibold text-xl'>Categories</h1>
                            <button onClick={() => { showProduct("protein") }} className='w-fit'>Protein</button>
                            <button onClick={() => { showProduct("energy") }} className='w-fit'>Energy boosters</button>
                            <button onClick={() => { showProduct("health") }} className='w-fit'>Health and wellness</button>
                            <button onClick={() => { showProduct("snacks") }} className='w-fit'>Snacks</button>
                            <button onClick={() => { showProduct("gymWear") }} className='w-fit'>Gym Wear</button>
                            <button onClick={() => { showProduct("workoutGear") }} className='w-fit'>Workout Gear</button>
                        </div>
                        <div className="flex flex-col lg:me-8 lg:py-4 w-40">
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
                <div className="flex flex-wrap">
                    {showedProducts.map((item, index) => (
                        <div className="flex" key={index}>
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
        </>
    );
};
