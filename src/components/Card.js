import React, { useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsChevronDoubleUp } from 'react-icons/bs';


const Card = ({
    label,
    ingredientLines,
    image,
    url
}) => { 
      const [showIngr, setShowIngr] = useState(false);
    return (
        <div className='card'>
            <a href={url} className='label'>{label}</a>
             <img src={image} alt={label} />
             <br/>
            <div className='caret' onClick={() => { setShowIngr(!showIngr)}}> 
            {!showIngr ? (<><div>Show ingredients</div> <BsChevronDoubleDown /> </>): <BsChevronDoubleUp />} </div>
            {showIngr && <ul className='ingr'>{ingredientLines}</ul>}
        </div>
    )
}
export default Card;