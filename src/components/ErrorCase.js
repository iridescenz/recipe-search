import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
    return (
        <div className='error' style={{backgroundImage: `url('error.png')`}}>
            <p className='error404'>404</p>
            <div> <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Go home</Link></div>
        </div>
    )
}

export default Error
