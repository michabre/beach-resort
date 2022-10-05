import IButton from '@interfaces/IButton'
import Iicons from '@interfaces/IIcons'

import { FaBeer, FaPhone, FaRegClock } from 'react-icons/fa';

import './button.css'

const iconOptions:Iicons = {
  'beer': <FaBeer />,
  'phone': <FaPhone />,
  'clock': <FaRegClock />
}

const Button = ({text, icon, type, action}:IButton) => {
  let buttonClass = `button ${type}`
  let buttonIcon = icon ?? ''
  return (
    <button className={buttonClass} onClick={action}>
       {text} {iconOptions[buttonIcon]}
    </button>
  )
}

export default Button