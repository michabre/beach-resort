function handleOnClick() {
  console.log('Hello, Astro!');
}

const Button = () => {
  return (
    <button className="button is-primary" onClick={handleOnClick}>
      Download
    </button>
  )
}

export default Button;