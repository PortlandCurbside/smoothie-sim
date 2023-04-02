export default function ActiveIngredients(props){
    return (
        <div className={`
            transition-all
            h-64
            w-full
            md:w-3/4
            xl:w-full
            xl:grow
            
            text-center  bg-emerald-400
            ${props.className}
        `}>
            <p> Put Active Ingredients Here </p>
        </div>
    )
}
