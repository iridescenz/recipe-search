import React from 'react'
import SearchForm from './SearchForm'

const Header = () => {
    return (
        <div className="site-header">
           <div>Home</div>
           <div>About</div>
           <div>Low-carb recipes</div>
           <div>Nutrition facts</div>
           <SearchForm />
        </div>
    )
}

export default Header
