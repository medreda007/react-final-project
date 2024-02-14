import { logDOM } from "@testing-library/react";
import { createContext, useState } from "react";



export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    return (
        <>
            <MyContext.Provider>
                {children}
            </MyContext.Provider>
        </>
    )
}

