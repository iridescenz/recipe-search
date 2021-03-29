import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = { color: 'inherit', textDecoration: 'inherit'};
const Header = () => {
    return (
        <div className="site-header">
           <div><Link to='/home' style={headerStyle}> Home</Link></div>
           <div><Link to='/about' style={headerStyle}> About</Link></div>
           <div><Link to='/low-carb-recipes' style={headerStyle}> Low-carb recipes</Link></div>
           <div><Link to='/nutrition-facts' style={headerStyle}> Nutrition facts</Link></div>
           <div><Link to='/' style={headerStyle}> Recipe search</Link></div>
        </div>
    )
}

export default Header
