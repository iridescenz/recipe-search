import React from 'react'
 const NutritionCard = ({
    label,
    weight,
    calories,
    nutrients,
    img
 }) => {
    return (
        <div className='nutrition-card'>
        <p>{label}</p> 
        <div>{calories}</div>
        <div>{weight}</div>
        <ul>{nutrients}</ul>
        </div>
    )
}
 export default NutritionCard