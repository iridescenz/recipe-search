import React, { useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { BsLink45Deg } from 'react-icons/bs';

const Card = ({
    label,
    ingredientLines,
    image,
    url
}) => { 
    const [showIngr, setShowIngr] = useState(false);
    return (
        <div className='card'>
            <div className='label'>{label}</div>
            <img src={image} alt={label} />
            <br/>
            <div className='caret' onClick={() => { setShowIngr(!showIngr)}}> 
            {!showIngr ? (<><div></div> <BsChevronDoubleDown /> </>): <BsChevronDoubleUp />} </div>
            {showIngr && <ul className='ingr'>{ingredientLines}</ul>}
            <a href={url} style={{fontSize:'2rem', color:'black'}}> <BsLink45Deg /></a>
        </div>
    )
}
export default Card;