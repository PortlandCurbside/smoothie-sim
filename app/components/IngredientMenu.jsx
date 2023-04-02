"use client"

async function getAllIngredients(){
    const res = await fetch(/*<TODO: insert route here>*/)
    return res.json()
}


export default function IngredientMenu(props){

    const { term } = props;

    const bal = getAllIngredients(); // TODO: Route Handler
    const allIngredients = [
        {
            _id: 1,
            name: "Banana",
            isLiquid: "false",
            liquidProps:{
                volume: 2, // random number
                colors: [
                    "#F5E8D5"
                ],
                viscocity: .7 // 0-1 
            },
            description: "A nice delicious curved fruit, perfect for a velvety smoothie.",
            thumbnail: "/fruit/bananga.png"
        },
        {
            _id: 2,
            name: "Ganana",
            isLiquid: "false",
            liquidProps:{
                volume: 2, // random number
                colors: [
                    "#F5E8D5"
                ],
                viscocity: .7 // 0-1 
            },
            description: "A not delicious curved fruit, inperfect for a velvety smoothie.",
            thumbnail: "/fruit/bananga.png"
        },
        {
            _id: 3,
            name: "Ranana",
            isLiquid: "false",
            liquidProps:{
                volume: 2, // random number
                colors: [
                    "#F5E8D5"
                ],
                viscocity: .7 // 0-1 
            },
            description: "Not a food at all, but a sound",
            thumbnail: "/fruit/bananga.png"
        }

    ]



    const filter = (term) => {

        if (term !== '') {
            return allIngredients.filter((ing) => {
                // TODO: match text at any location in ingredient name (e.g., 'ANA' -> 'BANANA')
                return ing.name.toLowerCase().startsWith(term.toLowerCase())
            })
        } else {
            // if search bar is empty, show all
            return allIngredients
        }
    }

    const foundIngredients = filter(term);

    return  <ul>
                { foundIngredients?.length > 0 ? (
                    foundIngredients.map( (ing) => (
                        <li key={ing._id}>
                            <span>{ing.name}</span>
                        </li> 
                    ))
                ) : (
                    <h1>No results found.</h1>
                )}
            </ul>

}
