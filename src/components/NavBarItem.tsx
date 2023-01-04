import INavBarItem from '@interfaces/INavBarItem'
import './navbar-item.css'

const NavBarItem = ({title, url}:INavBarItem) => {
  return (
    <a className="navbar-item" aria-label='aria-label' href={url}>
      {title}
    </a>
  )
}

export default NavBarItem