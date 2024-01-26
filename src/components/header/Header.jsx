import { Button } from '../ul/button/Button';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <nav className={scss.nav}>
          <ul>
            <p>ТВ-каналы</p>
            <p>Каталог</p>
            <p>Моё Кино</p>
            <p>Фильмы</p>
            <p>Сериалы</p>
          </ul>
          <Button>Вход</Button>
        </nav>
      </div>
    </header>
  )
}
