import React,{Fragment, useState} from 'react';
import { AddCategory } from './components/AddCategory';

const GifExepertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch'])
    /* const handleAdd=()=>{
        //setCategories(categories.concat('HunterXHunter'));
        //otra manera
        setCategories([...categories,'HunterXHunter'])
    } */
    
    return (
        <> 
            <h2>GifExepertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {categories.map((category)=> {
                    return <li key={category}> {category}</li>;
                })}
            </ol>
        </>
    )
}
export default GifExepertApp

