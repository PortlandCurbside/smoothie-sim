import Image from 'next/image'

import { useActiveIngredientContext } from "./ActiveIngredientProvider"

export default function IngredientThumb(props){

    const { activeIngredients, setActiveIngredients } = useActiveIngredientContext();

    const { _id, thumbnail, description } = props

    const addSelf = () => {
        console.log(`Adding ${_id} to active ingredients`)
        setActiveIngredients([...activeIngredients, _id])
    }
    
    return (
        <div onClick={ addSelf } className={`
            flex flex-row
            transition-all
            w-30 h-30

            rounded-xl
            drop-shadow-md hover:drop-shadow-xl
            bg-white
            overflow-hidden
            items-center
        `}>
            <div className={`h-[60px] flex items-center`}>
                <Image
                    width={60}
                    height={60}
                    src={ thumbnail }
                    alt={ description }
                />
            </div>
        </div>

    )

}
