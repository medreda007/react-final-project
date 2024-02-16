import React from 'react';
import "../components/AccountFirstSection.scss";
import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const AccountFirstSection = () => {

    const navigate = useNavigate()
    return (
        <>
            <section className='flex justify-center'>
                <div className="w-[75vw] flex gap-5 p-10">
                    <div className="lg:w-1/2 h-fit border p-6">
                        <h1 className='text-4xl'>New Customer</h1>
                        <p className='p-1'>Register Account</p>
                        <p className='p-1 opacity-50 py-5'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <Button onClick={() => navigate(`/SignUp`)} className="w-1/4 p-4 rounded-none bg-black" >continue</Button>
                    </div>
                    <div className="lg:w-1/2 border p-6">
                        <h1 className='text-4xl'>Returning Customer</h1>
                        <p>I am a returning customer</p>
                        <Card color="transparent" shadow={false}>
                            <form className=" mb-2 w-80 max-w-screen-lg sm:w-96 py-5">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Your Email
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
                                        labelProps={{
                                            className: "before:content-none after:content-none" ,
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
                                        labelProps={{
                                            className: "before:content-none after:content-none" ,
                                        }}
                                    />
                                </div>
                                <Checkbox
                                    label={
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                        >
                                            I agree the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-gray-900"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    }
                                    containerProps={{ className: "-ml-2.5" }}
                                />
                                <Button className="w-1/3 p-4 rounded-none bg-black" fullWidth>
                                    sign up
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

