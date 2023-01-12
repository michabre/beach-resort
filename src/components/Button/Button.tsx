import IButton from '@interfaces/IButton'
import Iicons from '@interfaces/IIcons'

import { FaBeer, FaPhone, FaRegClock, FaTripadvisor, FaBars } from 'react-icons/fa';

import './button.css'

const iconOptions:Iicons = {
  'beer': <FaBeer />,
  'phone': <FaPhone />,
  'clock': <FaRegClock />,
  'tripAdvisor': <FaTripadvisor />,
  'menu': <FaBars />
}

const Button = ({text, icon, type, handler, url}:IButton) => {
  let buttonClass = `button ${type}`
  let buttonIcon = icon ?? ''

  function buttonHandler(a:any) {
    console.log('click: ', a)
  }

  return (
    <a className={buttonClass} href={url} onClick={() => buttonHandler('test')}>
       {text} {iconOptions[buttonIcon]}
    </a>
  )
}

export default Button