import React from 'react';

const Card = ({
    label,
    ingredientLines,
    image,
    url
}) => {
    return (
        <div className='card'>
            <p className='label'>{label}</p>
             <img src={image} alt={label} />
             <br/>
             <ul className="ingr">{ingredientLines}</ul>
             <br />
             <a className="url" href={url} > {label}</a>
            <hr/>
        </div>
    )
}
export default Card