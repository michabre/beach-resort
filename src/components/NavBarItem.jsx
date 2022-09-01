const NavBarItem = ({title, url}) => {
  return (
    <a className="navbar-item" href={url}>
      {title}
    </a>
  )
}

export default NavBarItem