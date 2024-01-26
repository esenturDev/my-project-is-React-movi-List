import { Header } from '../header/Header';
import { NewData } from '../newData/NewData';
import scss from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header/>
      <NewData/>
    </div>
  )
}
