import React from 'react'
import { Link } from 'react-router-dom'


const backgroungImage = {
    backgroundImage: `url('error.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh', 
}

const Error = () => {
    return (
        <div className='error' style={backgroungImage}>
            <p className='error404'>404</p>
            <div> <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Go home</Link></div>
        </div>
    )
}

export default Error
