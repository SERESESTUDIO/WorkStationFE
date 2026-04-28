import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImgResources } from '../../resources/imgResources';
import { emptyUser } from '../../queries/useGetUser';
import { ProfileMenu } from '../profileMenu/profileMenu';
import { Link } from 'react-router';
import './header.css';

export const Header = ({user=emptyUser}) => {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const userRef = useRef(null);
    useEffect(()=>{
        window.addEventListener("ReloadRoot", ()=>{setIndex(0)})
        const root = window.location.href.split(`${import.meta.env.VITE_MY_FE_HOST}/`)[1].split('/')[0];
        switch(root) {
            case "panel":
                setIndex(1);
                break;
            case "board":
                setIndex(2);
                break;
            case "management":
                setIndex(3);
                break;
        }
    },[]);
    useEffect(()=>{
        if(userRef.current) {
            const divHtml: HTMLDivElement = userRef.current;
            divHtml.style.setProperty("--header-user-icon", `url("${(user.img) ? user.img : ImgResources.userIcon}")`);
        }
    },[userRef, user]);
    const OnReloadRoot = (ind:number) => {
        const event = new CustomEvent("ReloadRoot");
        window.dispatchEvent(event);
        setIndex(ind);
    }
  return (
    <div className='header'>
        <div className='header-menu'>
            <Link to={"/panel"} onClick={()=>OnReloadRoot(1)} className={`${(index == 1) ? "header-button-active" : "header-button-inactive"}`}>{t('header.panel')}</Link>
            <Link to={"/board"} onClick={()=>OnReloadRoot(2)} className={`${(index == 2) ? "header-button-active" : "header-button-inactive"}`}>{t('header.board')}</Link>
            <Link to={"/management"} onClick={()=>OnReloadRoot(3)} className={`${(index == 3) ? "header-button-active" : "header-button-inactive"}`}>{t('header.management')}</Link>
        </div>
        <div className='header-profile'>
            <div className='header-profile-button' ref={userRef} onClick={()=>setOpenProfileMenu(!openProfileMenu)}></div>
        </div>
        {(openProfileMenu) && <ProfileMenu onClose={()=>setOpenProfileMenu(false)}/>}
    </div>
  )
}
