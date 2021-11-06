import React,{useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Escribe Algo')
    const handleInputChange = (e)=>{
       
        setInputValue(e.target.value);
    }
    const handleOnFocus = (e)=>{
       
        setInputValue('')
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length>2){

            setCategories(cats=>[inputValue,...cats])
            setInputValue('')
            
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    value = {inputValue}
                    onChange = {handleInputChange}
                    onFocus = {handleOnFocus}
                />

            </form>
        </div>
    )
    
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}