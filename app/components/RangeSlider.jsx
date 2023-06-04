"use client"

import { useEffect, useRef, useState } from "react"

export default function RangeSlider(props){
    const {value, setValue, isLiquid, max, unit } = props;


    const inputRef = useRef()

    // whether this should this be a step wise slider or not
    useEffect(() => {
        if(!isLiquid){
            inputRef.step = unit;
        }
    })

    const Slider = (
        <label for="steps-range" className="px-2 h-full max-w-sm block text-sm font-medium text-gray-900 dark:text-white">
            <input id="steps-range" ref={inputRef} type="range" min="0"
                    max={max} value={value} onChange={(e)=>setValue(e.target.value)} 
                    className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-701`}/>
        </label>
    )

    return [value, Slider]
}
