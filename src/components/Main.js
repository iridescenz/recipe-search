import React from 'react';
import RecipeSearch from './RecipeSearch'

const backgroungImage = {
  backgroundImage: `url('food.jpeg')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw' }

const Main = () => {
  return (
      <div className="container" 
        style={backgroungImage}
      >
        <RecipeSearch />
    </div>
  )
}
export default Main