"use client"

import { Suspense } from "react"
import { IngredientCard, IngredientCardLoading }  from "./IngredientCard"


export default function ActiveIngredients(props){
    
    const ingredients = [
        (<Suspense key={1} fallback={<IngredientCardLoading/>}>
           <IngredientCard id={1}/>
        </Suspense>)
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