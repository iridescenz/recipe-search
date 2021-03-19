import React from 'react';

const Card = ({
    label,
    ingredientLines,
    image,
    uri
}) => {
    return (
        <div className='card'>
            <p>{label}</p>
             <img src={image} />
             <br/>
             <ul className="ingr">{ingredientLines}</ul>
             <br />
             <a className="small" href={uri} > {label}</a>
            <hr/>
        </div>
    )
}
export default Card