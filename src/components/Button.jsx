function handleOnClick() {
  console.log('Hello, Astro!');
}

const Button = ({text, type}) => {
  let buttonClass = `button ${type}`
  return (
    <button className={buttonClass} onClick={handleOnClick}>
      {text}
    </button>
  )
}

export default Button;