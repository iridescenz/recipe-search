import React from 'react';

const NutritionCard = ({
    label,
    weight,
    calories,
    nutrients,
 }) => {

    return (
        <div className='nutrition-card'>
            <p>Nutrition facts for: {label}</p> 
            <div>{calories}</div>
            <div>{weight}</div>
            <ul className='nutrition'>{nutrients} </ul>
        </div>
    )
}
export default NutritionCard;