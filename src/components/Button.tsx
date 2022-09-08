import IButton from '@interfaces/IButton'

const Button = ({text, type, action}:IButton) => {
  let buttonClass = `button ${type}`
  return (
    <button className={buttonClass} onClick={action}>
      {text}
    </button>
  )
}

export default Button;