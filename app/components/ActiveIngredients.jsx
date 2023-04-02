"use client"

import { Suspense } from "react"
import { IngredientCard, IngredientCardLoading }  from "./IngredientCard"


export default function ActiveIngredients(props){
    
    const ingredients = [
        (<IngredientCard id={1} key={1}/>)
    ]
    

    return <div className={`
            transition-all
            rounded-lg

            px-2
            h-64
            w-full
            md:w-3/4
            xl:w-full
            xl:grow
            
            ${props.className}
        `}>
            { ingredients }
        </div>
    
}
