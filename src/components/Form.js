import React from 'react'
import { GoSearch } from 'react-icons/go'

const Form = ({ handleSubmit, name, handleChange, value, placeholder }) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className='label' htmlFor='query'>search for a {name}</label>
            <div className='icon'> <GoSearch /></div>
                <input className='input' 
                    type='text' 
                    name='query'
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}/>
                <button className='button' type='submit'>Search</button>
        </form>
    )
}
export default Form