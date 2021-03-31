import React from 'react';
import RecipeSearch from './RecipeSearch'


const Main = () => {
  return (
      <div className="container" 
        style={{
          backgroundImage: `url('food.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw' }}
      >
        <RecipeSearch />
    </div>
  )
}
export default Main