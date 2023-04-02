"use client"
import { Suspense, useState } from 'react'

import IngredientMenu from './IngredientMenu'

export default function IngredientSearch(props){
    // search field value
    const [ name, setName ] = useState('')


    return (
        <div className={`
            transition-all
            rounded-lg
            h-64
            w-full
            md:w-3/4
            xl:w-full
            xl:grow
        `}>
            <div>
                <input
                type="search"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Search for ingredients"
                />
            </div>
            
            {/*The choosing of ingredients will likely be drilled later or a context*/}
            <IngredientMenu term={name}/>

        </div>
    )
}
