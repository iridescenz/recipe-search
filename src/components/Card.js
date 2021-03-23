import React from 'react';
import { BsCaretDown } from 'react-icons/bs'

const Card = ({
    label,
    ingredientLines,
    image,
    url
}) => {
    return (
        <div className='card'>
            <a href={url} className='label'>{label}</a>
             <img src={image} alt={label} />
             <br/>
            <div className='caret'> <BsCaretDown /> </div>
             <ul className='ingr'>{ingredientLines}</ul>
            <hr/>
        </div>
    )
}
export default Card