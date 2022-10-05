import INavBarItem from '@interfaces/INavBarItem'
import './navbar-item.css'

const NavBarItem = ({title, url}:INavBarItem) => {
  return (
    <a className="navbar-item" href={url}>
      {title}
    </a>
  )
}

export default NavBarItem