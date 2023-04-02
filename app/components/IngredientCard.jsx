"use client"
import RangeSlider from './RangeSlider';

import { useState } from 'react';

import Image from 'next/image';

async function getIngredientData(id){
    const res = await fetch(`/api/ingredient/${id}`)
    return res.json();
}

export async function IngredientCard(props){
    /* Used to display ingredients that are added to a smoothie */

    const { id, className } = props;

    const data = await getIngredientData(id);

    const [slideValue, setSlideValue] = useState(1); 

    return <div className={`
            flex flex-row
            transition-all
            rounded-xl
            drop-shadow-md hover:drop-shadow-xl
            bg-white
            overflow-hidden
            h-20
            items-center
            ${ className }
        `}>
            <Image
                width={60}
                height={60}
                src={data.thumbnail}
                alt={data.description}
            />
            <div className={`
                px-2
                flex
                flex-col
                h-full
                justify-center
            `}>
                <h2 className='text-3xl'> {data.name} </h2>
                <p className='max-w-prose xl:text-xs'> {data.description} </p>
            </div>
            <form className='px-2 flex flex-row justify-self-end'>
                <RangeSlider
                    value={slideValue} 
                    setValue={setSlideValue}
                    isLiquid={data.isLiquid} max={6}/>
            </form>
        </div>
}


export function IngredientCardLoading(prop){

    return ( 
        <div className={`
            rounded
            w-full
            ${props.className}
        `}>
        </div>
    )
}
