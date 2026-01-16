import { HeaderLogo, SunIcon } from '@/assets/icons';

import './header.scss';

function Header() {
  return (
    <header>
      <div className='container-medium header__wrapper'>
        <HeaderLogo className='header__logo' />
        <div className='header__button-group'>
          <button className='header__button-theme-switcher'>
            <SunIcon />
          </button>
          <button className='header__button-lang-switcher'>РУ</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
