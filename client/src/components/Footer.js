import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='footer'>
      Creado Por Yoel Preza
      <a target="_blank" rel="noreferrer" href='https://wa.me/5532900759'>
        <WhatsAppIcon className='icon' />
      </a>

      <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/yoel-preza-8031b51a6/'>
        <LinkedInIcon className='icon' />
      </a>
      
    </div>
  )
}

export default Footer