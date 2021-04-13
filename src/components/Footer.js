import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { SiCodewars } from 'react-icons/si'
import { AiOutlineFileText } from 'react-icons/ai'
import { RiWhatsappLine } from 'react-icons/ri'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='site-footer'>
        <div className='iri'>
         <div> © Irina Turenko, 2021 </div>
         <div> turenko7irina@mail.ru </div>
         </div>
        <div className='icons'>
           <a href='https://github.com/iridescenz'> <GoMarkGithub /> </a>
           <a href='https://wa.me/79777866763'> <RiWhatsappLine /> </a>
           <a href='https://t.me/iridescenz'> <FaTelegramPlane /> </a>
           <a href='https://hh.ru/resume/e19e7e87ff08dd67d20039ed1f6e794d624546'> <AiOutlineFileText /> </a>
           <a href='https://www.codewars.com/users/iridescens'> <SiCodewars /> </a>
           </div>
        </footer>
    )
}
export default React.memo(Footer)
