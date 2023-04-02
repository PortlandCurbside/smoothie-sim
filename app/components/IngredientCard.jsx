"use client"
import RangeSlider from './RangeSlider';

import { useEffect, useState } from 'react';

import Image from 'next/image';

async function getIngredientData(id){
    const res = await fetch(`/api/ingredient/${id}`)
    return res.json();
}

export function IngredientCard(props){
    /* Used to display ingredients that are added to a smoothie */

    const { _id, className } = props;
    const [loaded, setLoaded ] = useState(false)
    const [data, setData] = useState({})

    getIngredientData(id)
        .then((data) => {
            setData(data);
            loaded(true)
        })
        .catch((err) => err)


    const [slideValue, setSlideValue] = useState(1); 
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        console.log("loaded")
        // TODO loaded will actually be controlled by when fetch gets the ing
        setLoaded(true)
    }, [])


    return <div className={`
            flex flex-row
            transition-all
            opacity-0
        
            ${loaded? 'opacity-100': 'opactiy-0'}

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
