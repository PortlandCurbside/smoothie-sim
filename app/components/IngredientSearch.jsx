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
            min-h-fit
            h-64
            w-full
            md:w-3/4
            xl:w-full
            xl:grow
        `}>
            <div className='h-20 w-full p-2'>
                <label >
                    <input
                        type="search"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Search for ingredients"
                        className={`
                            transition-shadow
                            focus:transition-all
                            h-12 w-full rounded px-3
                            drop-shadow-md
                            outline-offset-0
                            focus:ring-0 focus:outline-none focus:border-0
                            focus:drop-shadow-2xl
                        `}
                    />
                </label>
            </div>
            
            {/*The choosing of ingredients will likely be drilled later or a context*/}
            <IngredientMenu term={name}/>

        </div>
    )
}
