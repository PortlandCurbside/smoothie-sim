"use client"

import { createContext, useState, useContext } from "react"

export const ActiveIngredientContext = createContext();

export const useActiveIngredientContext = () => useContext(ActiveIngredientContext);

export function ActiveIngredientProvider({ children }){

    const [ activeIngredients, setActiveIngredients ] = useState([]);

    return (

        <ActiveIngredientContext.Provider value={{ activeIngredients, setActiveIngredients }}>
            {children}
        </ActiveIngredientContext.Provider>

    )
}
