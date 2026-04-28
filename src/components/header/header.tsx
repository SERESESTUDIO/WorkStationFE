import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImgResources } from '../../resources/imgResources';
import { emptyUser } from '../../queries/useGetUser';
import './header.css';

export const Header = ({user=emptyUser}) => {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();
    const userRef = useRef(null);
    useEffect(()=>{
        if(userRef.current) {
            const divHtml: HTMLDivElement = userRef.current;
            divHtml.style.setProperty("--header-user-icon", `url("${(user.img) ? user.img : ImgResources.userIcon}")`);
        }
    },[userRef, user]);
  return (
    <div className='header'>
        <div className='header-menu'>
            <a onClick={()=>setIndex(1)} className={`${(index == 1) ? "header-button-active" : "header-button-inactive"}`}>{t('header.panel')}</a>
            <a onClick={()=>setIndex(2)} className={`${(index == 2) ? "header-button-active" : "header-button-inactive"}`}>{t('header.board')}</a>
            <a onClick={()=>setIndex(3)} className={`${(index == 3) ? "header-button-active" : "header-button-inactive"}`}>{t('header.management')}</a>
        </div>
        <div className='header-profile'>
            <div className='header-profile-button' ref={userRef}></div>
        </div>
    </div>
  )
}
