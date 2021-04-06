import React from 'react'
 const NutritionCard = (
    label,
    weight,
    calories,
    nutrients
) => {
    return (
        <div className='card'>
        <p>{label}</p> 
        <span>{calories}</span>
        <span>{weight}</span>
        <div>{nutrients}</div>
        </div>
    )
}
 export default NutritionCard