"use client"
import RangeSlider from '@/components/RangeSlider';

import { useEffect, useState } from 'react';

import Image from 'next/image';

async function getIngredientData(id){
    const res = await fetch(`/api/ingredient/${id}`)
    return res.json();
}

export function IngredientCard(props){
    /* Used to display ingredients that are added to a smoothie */

    const { _id, className } = props;
    const [isFetching, setFetching ] = useState(true)
    const [data, setData] = useState({})

    useEffect(()=>{
        // runs fetch once on load
        getIngredientData(_id)
            .then((data) => {
                setData(data);
                console.log(data)
                // TODO: success inside response object should be removed, and response codes should be used instead
                setFetching(false)
            })
            .catch((err) => console.error(err))

    },[])


    const [slideValue, setSlideValue] = useState(1); 

    const card = (<div className={`
            flex flex-row
            transition-all
            opacity-0
        
            ${!isFetching ? 'opacity-100 translate-x-0': 'opactiy-0 -translate-x-10 '}

            rounded-xl
            drop-shadow-md hover:drop-shadow-xl
            bg-white
            overflow-hidden
            h-20
            items-center
            px-2
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
                grow
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
        </div>)

    const cardLoading = IngredientCardLoading();

    if(isFetching){
        return cardLoading
    }else{
        return card
    }
}


export function IngredientCardLoading(prop){
    const [mounted, setMounted] = useState(false) 


    useEffect(()=>{
        // runs fetch once on load
        setMounted(true)

    },[])

    return (
        <div className={`
            transition-all

            bg-white
            overflow-hidden
            px-2

            opacity-0
            ${mounted ? 'opacity-100 translate-x-0': 'opacity-0 -translate-x-10 '}

            h-20
            rounded-xl
            drop-shadow-md p-4 max-w-lg w-full mx-auto">
        `}>
            <div className="w-full animate-pulse h-full flex flex-row items-center ">
                <div className="rounded bg-slate-200 h-[3.75rem] w-[3.75rem]"></div>
                <div className={`
                    px-2
                    grow
                    flex
                    flex-col
                    h-full
                    space-y-1
                    justify-center
                `}>
                    <div className="mb-4 h-3 bg-slate-200 rounded w-20"></div>
                    <div className="h-2 bg-slate-200 rounded w-54"></div>
                    <div className="h-2 bg-slate-200 rounded w-32"></div>
                </div>
                <form className='px-2 flex flex-row justify-self-end'>
                    <div className="h-2 bg-slate-200 rounded w-44"></div>
                </form>
            </div>
        </div>

    )
}
