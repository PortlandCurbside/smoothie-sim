import { Inter } from 'next/font/google'
import { getIngredients } from '@/api/ingredient'
import IngredientSearch from '@/components/IngredientSearch'
import ActiveIngredients from '@/components/ActiveIngredients'
import SmoothieStatsDashboard from '@/components/SmoothieStatsDashboard'

const inter = Inter({ subsets: ['latin'] })

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

            <div className='
            transition-all
                    flex flex-col h-fit
                    space-y-2 w-full items-center
                    xl:w-5/12
                    xl:h-full
            '>
                <IngredientSearch ingredients= {ingredients}/>
                <ActiveIngredients />
            </div>
            {/*<Smoothie />*/}
            <SmoothieStatsDashboard />
            
        </main>
    )
}
