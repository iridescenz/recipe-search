import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RecipeSearch from './RecipeSearch'

export const RecipeSearchComponent = () => {
  return (
    <div className='app'>
      <Header />
      <RecipeSearch />
      <Footer />
    </div>
  )
}
