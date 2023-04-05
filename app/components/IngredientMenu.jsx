"use client"

import IngredientThumb from "@/components/IngredientThumb";
import { useEffect, useState } from 'react'

// This function gets called on each render, but is cached
async function getAllIngredients(){
    const res = await fetch('/api/ingredient')
    return res.json()
}


export default function IngredientMenu(props){
    
    const [isFetching, setFetching] = useState(true)
    const [allIngredients, setIngredients] = useState([])


    useEffect(() => {
        const menu = getAllIngredients()
            .then((res) => {
                console.log(res)
                setFetching(false)
                setIngredients(res.ingredients)
            })
    }, [])


    const { term } = props;

    const filter = (term) => {
        if (term !== '') {
            return allIngredients.filter((ing) => {
                // TODO: match text at any location in ingredient name (e.g., 'ANA' -> 'BANANA')
                return ing.name.toLowerCase().startsWith(term.toLowerCase())
            })
        } else {
            // if search bar is empty, show all
            return allIngredients
        }
    }

    const foundIngredients = filter(term);

    
    if(!isFetching){
        return (
            <ul class='p-4 flex flex-row space-x-2'>
                { foundIngredients?.length > 0 ? (
                    foundIngredients.map( (ing) => (
                        <li key={ing._id}>
                            <IngredientThumb {...ing}> </IngredientThumb>
                        </li> 
                    ))
                ) : (
                    <h1>No results found.</h1>
                )}
            </ul>
        )
    }else{
        return (
            <h1> Loading </h1>
        )
    }

}
