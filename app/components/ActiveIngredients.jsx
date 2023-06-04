"use client"

import { Suspense } from "react"
import { IngredientCard, IngredientCardLoading }  from "@/components/IngredientCard"
import { useActiveIngredientContext } from "@/components/ActiveIngredientProvider"
import IngredientMenu from "@/components/IngredientMenu";


export default function ActiveIngredients(props){

    const { activeIngredients, setActiveIngredients } = useActiveIngredientContext();
    
    const ingredients = activeIngredients.map(id => <IngredientCard _id={id}/>);

    console.log(activeIngredients)
    console.log(ingredients)

 
    return (
        <div className={`
            transition-all
            rounded-lg
            flex-col
            space-y-1

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
    )
    
}
