import React, { useContext } from 'react';
import "./CartFirstSection.scss";
import bannerImg from "../../../assets/img/workout-supplements-that-work_lead.avif";
import { Button, Input } from '@material-tailwind/react';
import { MyContext } from '../../../utils/contextProvider';


export const CartFirstSection = () => {

    const [allProducts, setAllProducts, newProd, setNewProd, onSales, setOnSales, bestSeller, setBestSeller, cart, setCart] = useContext(MyContext)


    const addQty = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity++;
            return updatedCart;
        });
    }
    const removeQty = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity--;
            return updatedCart;
        });
    }

    const TotalPrice = (index) => {
        return cart[index].price * cart[index].quantity
    }

    const deleteProd = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart.splice(index, 1);
            return updatedCart;
        });
    }

    return (
        <>
            <section>
                <div className="bg-blue-gray-300 h-[35vh]" style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className="w-full h-full flex items-center justify-center text-5xl bg-[#00000092] text-white">YOUR CART</div>
                </div>
                <div className="py-7 flex justify-center flex-col items-center">
                    <div className="flex justify-evenly lg:ms-32 p-8 lg:w-[75%]">
                        <p>PRODUCT NAME</p>
                        <p>UNIT PRICE</p>
                        <p>QUANTITY</p>
                        <p>TOTAL</p>
                    </div>
                    {
                        cart.map((item, index) => (
                            <div className="h-[25vh] border w-[75%] flex justify-around items-center gap-8 ">
                                <div className=" h-32 w-32 " style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}></div>
                                <div className="flex justify-between items-center w-[63%] lg:relative">
                                    <p className=' lg:absolute'>{item.name}</p>
                                    <p className=' lg:absolute lg:left-[17rem]'>{item.price}</p>
                                    <div className="flex gap-x-4 border p-2 lg:absolute lg:right-36">
                                        <p className=' '> {item.quantity}
                                        </p>
                                        <div className="">
                                            <button className='border px-2 me-1' onClick={() => addQty(index)}>+</button>
                                            <button className='border px-2 ' onClick={() => removeQty(index)}>-</button>
                                        </div>
                                    </div>
                                    <p className=' lg:absolute lg:-right-8'>{TotalPrice(index)}</p>
                                </div>
                                <button onClick={()=>deleteProd(index)}>X</button>
                            </div>
                        ))
                    }
                    <div className="p-8 ps-16 border lg:w-[75%] border-t-0 flex lg:flex-row flex-col items-center justify-between">
                        <input placeholder='  Coupon Code' className='lg:w-[15vw] py-2 border'></input>
                        <Button className='lg:w-[14vw] py-4 bg-black rounded-full'>UPDATE CART</Button>
                    </div>
                </div>
            </section>
            <section className='flex justify-end px-[11.9rem] pb-24'>
                <div className="border w-[30vw] p-8">
                    <h1 className='font-bold text-[22px] pb-5'>CART TOTALS</h1>
                    <div className="flex justify-around w-full py-5 gap-x-14 border-b-2 border-t-2 border-dotted pb-20">
                        <h1>Shipping:</h1>
                        <div className="flex flex-col gap-4 px-8" >
                            <p className='opacity-50 pb-5'>Enter your destination to get a shipping estimate.</p>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <Button className='w-fit py-3 bg-black rounded-full text-[14px]'>CALCULATE SHIPPING</Button>
                        </div>
                    </div>
                    <div className="flex gap-x-5 text-xl py-9">
                        <p className='font-bold'>Subtotale:</p>
                        <p>$80.00</p>
                    </div>
                    <Button className='bg-black w-full rounded-full py-4 text-[14px]'>PROCEED TO CHECK OUT</Button>
                </div>
            </section>
        </>
    );
};

