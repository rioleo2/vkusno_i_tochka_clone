import './header.css'
import Logo from "./logo";
import NavList from "./navList";
import logoPath from '../images/logo.png'





export default function Header() {
    return (
        <header className="page-header">
        <header className="fixed-header">
          <div className="page-header__top">
            <Logo logoUrl={logoPath}></Logo>
          </div>
          <div className="page-header__bottom">
            <NavList></NavList>
          </div>
        </header>
      </header>
    )
}

