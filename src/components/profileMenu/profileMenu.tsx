import { Link } from 'react-router';
import { CloseSessionIcon } from '../icons/closeSession.icon';
import './profileMenu.css';
import { AccountIcon } from '../icons/account.icon';
import { ConfigIcon } from '../icons/config.icon';
import { useTranslation } from 'react-i18next';

export const ProfileMenu = ({onClose=()=>{}}) => {
    const { t } = useTranslation();
    const OnCloseSessionHandler = () => {
        window.localStorage.removeItem('token');
        window.location.href = "/";
    }
    const OnReloadRoot = () => {
        onClose();
        const event = new CustomEvent("ReloadRoot");
        window.dispatchEvent(event);
    }
  return (
    <div className='profile-menu-container'>
        <div className='profile-menu-item'>
            <div className='profile-menu-icon'>
                <ConfigIcon />
            </div>
            <Link to={"/configuration/users"} onClick={OnReloadRoot}>{t('subMenu.configuration')}</Link>
        </div>
        <div className='profile-menu-item'>
            <div className='profile-menu-icon'>
                <AccountIcon />
            </div>
            <Link to={"/account"} onClick={OnReloadRoot}>{t('subMenu.account')}</Link>
        </div>
        <div className='profile-menu-item' onClick={OnCloseSessionHandler}>
            <div className='profile-menu-icon'>
                <CloseSessionIcon />
            </div>
            <a>Close session</a>
        </div>
    </div>
  )
}
