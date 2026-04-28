import { Link } from 'react-router';
import { checkMobile } from '../../utils/checkMobile';
import { Logo } from '../icons/logo';
import './menu.css';

export const Menu = () => {
    const { isMobile } = checkMobile();
  return (
    <div className='menu-container'>
        {(!isMobile) && <Link className='menu-head' to={"/"} reloadDocument>
            <Logo />
        </Link>}
        <div className='menu-body'></div>
    </div>
  )
}
