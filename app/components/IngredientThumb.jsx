import Image from 'next/image'

export default function IngredientThumb(props){

    const { thumbnail, description } = props
    
    return (
        <div className={`
            flex flex-row
            transition-all
            w-30 h-30

            rounded-xl
            drop-shadow-md hover:drop-shadow-xl
            bg-white
            overflow-hidden
            items-center
        `}>
            <Image
                width={60}
                height={60}
                src={ thumbnail }
                alt={ description }
            />
        </div>

    )

}
