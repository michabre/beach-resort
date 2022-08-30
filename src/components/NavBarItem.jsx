const NavBarItem = ({title, url}) => {
  return (
    <a class="navbar-item" href={url}>
      {title}
    </a>
  )
}

export default NavBarItem