import { useState } from "react"
import { AddCategorie } from "./components/addCategorie";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = ()=>{
    const [categories, setcategories] = useState(['One Punch']);
    const onAddCategorie = (onNewCategory) =>{
        if(categories.includes(onNewCategory)) return;
        setcategories([onNewCategory, ...categories]);
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategorie 
            //setCategories= {setcategories} 
            onNewCategory = {onAddCategorie}
            />
            <br />
            <br />
            <ol>
                {categories.map( (categoria) => (
                    <GifGrid key= {categoria} category={categoria}/>
                ))}
 
            </ol>
        </>
    )
}