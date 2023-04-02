"use client"

export default function IngredientSearch(props){
    // search field value
    const [ name, setName ] = useState('')

    // search result
    const [ foundIngredients, setFoundIngredients ] = useState(props.ingredients)

    const filter = (e) => {
        const targetString = e.target.value

        if (targetString !== '') {
            const results = props.ingredients.filter((ing) => {
                // TODO: match text at any location in ingredient name (e.g., 'ANA' -> 'BANANA')
                return ing.name.toLowerCase().startsWith(targetString.toLowerCase())
            })
            setFoundIngredients(results)
        } else {
            // if search bar is empty, show all
            setFoundIngredients(props.ingredients)
        }
        setName(targetString)
    }

    return (
        <div className={`
            transition-all
            h-64
            w-full
            md:w-3/4
            xl:w-full
            xl:grow
            bg-amber-400 text-center
        `}>
            <div>
                <input
                type="search"
                value={name}
                onChange={filter}
                placeholder="Search for ingredients"
                />
            </div>
            <div>
                { foundIngredients?.length > 0 ? (
                    foundIngredients.map( (ing) => (
                        <li key={ing._id}>
                            <span>{ing.name}</span>
                        </li> 
                    ))
                ) : (
                    <h1>No results found.</h1>
                )}
            </div>
        </div>
    )
}
