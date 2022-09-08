import INavBarItem from '@interfaces/INavBarItem'

const NavBarItem = ({title, url}:INavBarItem) => {
  return (
    <a className="navbar-item" href={url}>
      {title}
    </a>
  )
}

export default NavBarItem