import React from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export const SignUpSection = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='lg:ps-48 ps-10 font-thin'>
                <h1 className='text-4xl'>Create Account</h1>
                <p className='text-xl'>Your Personal Details</p>
                <Card color="transparent" shadow={false}>
                    <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 px-5">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h7" color="blue-gray" className="-mb-4">
                                First Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter your first name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none lg:w-[50vw]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h7" color="blue-gray" className="-mb-4">
                                Second Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter your second name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none lg:w-[50vw]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h7" color="blue-gray" className="-mb-4">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none lg:w-[50vw]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h7" color="blue-gray" className="-mb-4">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none lg:w-[50vw]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
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
                        <Button className="mt-6 bg-black rounded-none w-1/3" fullWidth>
                            sign up
                        </Button>
                    </form>
                </Card>
                <Typography  onClick={() => navigate(`/Shop`)} color="gray" className="font-normal ps-5 cursor-pointer">
                    or back to store
                </Typography>
            </section>
        </>
    );
};

