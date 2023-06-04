"use client"


import IngredientSearch from '@/components/IngredientSearch'
import ActiveIngredients from '@/components/ActiveIngredients'
import SmoothieStatsDashboard from '@/components/SmoothieStatsDashboard'
import Stage from '@/components/Stage'

import { ActiveIngredientProvider } from './components/ActiveIngredientProvider'


export default function Home() {
    
    return (
        <main className='
            transition-all
            flex space-y-2 p-x-1 flex-col
            w-full grow items-center
            xl:flex-row
            xl:px-2
            xl:items-start
            xl:space-y-0
            xl:space-x-2
            xl:h-full
        '>

            <ActiveIngredientProvider>
                <div className='
                transition-all
                        flex flex-col h-fit
                        space-y-2 w-full items-center
                        xl:w-5/12
                        xl:h-full
                '>
                        <IngredientSearch />
                        <ActiveIngredients />
                </div>
                {/*<Smoothie />*/}
                <div className='
                    flex-col
                    grow
                    h-full
                '>
                    <Stage className={""} />
                    <SmoothieStatsDashboard />
                </div>
            </ActiveIngredientProvider>
            
        </main>
    )
}
