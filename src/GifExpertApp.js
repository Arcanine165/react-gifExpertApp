import {useState} from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    // const handleAdd = ()=>{
    //     setCategories([...categories,'Avatar']);
    // }
    
    return  (
            <>
                <h1>GifExpertApp</h1>
                <AddCategory setCategories = {setCategories} />
                <hr/>
                
                    {categories.map((category)=>
                        
                            <GifGrid 
                                key = {category}
                                category = { category }
                            />
                        
                    )}
              
                
            </>
    )
   
}