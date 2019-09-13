import React, {useState} from 'react'
import { Logo } from './Logo';
import '../assets/scss/components/Header.scss'



export const Header = () => {
  const [active, setActive] = useState(false)


  window.addEventListener('scroll', function() {
    var lastScrollTop = 0;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
      setActive(true)
    } else {
      setActive(false)
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
  
  return (
    <header className={active ? 'header active' : 'header'}>
        <div className="header__logo">
          Money
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="#">Calcula</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">Contacto</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">Como Funciona</a>
            </li>
          </ul>
        </nav>
      </header>

  )
}