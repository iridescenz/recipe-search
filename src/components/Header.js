import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = { color: 'inherit', textDecoration: 'inherit'};
const Header = () => {
	return (
		<div className='site-header'>
			<div><Link to='/' style={headerStyle}> Home</Link></div>
			<div><Link to='/low-carb-recipes' style={headerStyle}> Low-carb recipes</Link></div>
			<div><Link to='/nutrition-facts' style={headerStyle}> Nutrition facts</Link></div>
			<div><Link to='/recipe-search' style={headerStyle}> Recipe search</Link></div>
		</div>
	)
}

export default React.memo(Header);
