import { CloseSessionIcon } from '../icons/closeSession.icon';
import './profileMenu.css';

export const ProfileMenu = () => {
    const OnCloseSessionHandler = () => {
        window.localStorage.removeItem('token');
        window.location.href = "/";
    }
  return (
    <div className='profile-menu-container'>
        <div className='profile-menu-item' onClick={OnCloseSessionHandler}>
            <div className='profile-menu-icon'>
                <CloseSessionIcon />
            </div>
            <a>Close session</a>
        </div>
    </div>
  )
}
