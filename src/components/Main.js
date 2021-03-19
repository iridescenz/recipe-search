import React from 'react';
import RecipeSearch from './RecipeSearch'
import Api from './Api'

const Main = () => {
  return (

        <div className="container">
        <h1 className="title">This is main</h1>
        <RecipeSearch />
        <Api />
    </div>
  )
}
export default Main