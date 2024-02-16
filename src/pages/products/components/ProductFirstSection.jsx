import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';

export const ProductFirstSection = () => {
    const [allProducts, setAllProducts, newProd, setNewProd, onSales, setOnSales, bestSeller, setBestSeller, cart, setCart] = useContext(MyContext)


    const { product } = useParams()

    console.log(product);


    let foundProduct = allProducts.find(p => p.name === product)

    console.log(foundProduct);

    const addQty = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            foundProduct.quantity++;
            return updatedCart;
        });
    }
    const removeQty = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            foundProduct.quantity--;
            return updatedCart;
        });
    }

    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);


    const addToCart2 = () => {
        let prodAdded
        prodAdded = foundProduct

        const isAlreadyInCart = cart.some(item => item.name === prodAdded.name);

        if (!isAlreadyInCart) {
            prodAdded.quantity++
            cart.push(prodAdded)
        } else {
            prodAdded.quantity++
        }
        handleOpen("xs")
    }

    return (
        <>
            <section className='lg:h-[50vh] flex justify-center pt-10'>
                <div className="flex w-[75vw] h-full lg:flex-row flex-col items-center gap-5 justify-center">
                    <div className="lg:w-1/2 w-full lg:h-full h-[30vh] " style={{ backgroundImage: `url(${foundProduct.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "70%" }}>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-between items-start ">
                        <div className="pt-2">
                            <h1 className='text-3xl'>{foundProduct.name}</h1>
                            <h1 className='text-3xl'>{foundProduct.price}</h1>
                            <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....</p>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:w-1/2 w-36 gap-4 py-9 pt-3">
                            <div className="border w-full h-12 text-xl font-bold  flex items-center ">
                                <button className='w-full px-2 me-1 border-r-2 bg-blue-gray-50 h-full ' onClick={() => addQty()}>+</button>
                                <span className=' px-4  me-1'>{foundProduct.quantity}</span>
                                <button className='w-full px-2 border-l-2 bg-blue-gray-50 h-full ' onClick={() => removeQty()}>-</button>
                            </div>
                            <Button onClick={() => addToCart2()} className="bg-black rounded-full py-5" >Add to cart</Button>
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
    );
};

