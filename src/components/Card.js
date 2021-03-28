import React, { useState } from 'react';
import { BsCaretDown } from 'react-icons/bs';

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
            <div className='caret' onClick={() => { setShowIngr(!showIngr)}}> <div>Show ingredients</div><BsCaretDown /> </div>
            {showIngr && <ul className='ingr'>{ingredientLines}</ul>}
            <hr/>
        </div>
    )
}
export default Card;