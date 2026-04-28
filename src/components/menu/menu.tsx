import { Link } from 'react-router';
import { checkMobile } from '../../utils/checkMobile';
import { Logo } from '../icons/logo';
import './menu.css';
import { useEffect, useState } from 'react';
import { RootLogics } from './rootLogics';

export const Menu = () => {
    const [root, setRoot] = useState("");
    const [subRoot, setSubRoot] = useState("");
    const [subMenu, setSubMenu] = useState<any>(null);
    const { isMobile } = checkMobile();
    const OnReloadRoot = () => {
      const event = new CustomEvent("ReloadRoot");
      window.dispatchEvent(event);
    }
    useEffect(()=>{
      const mainRoot = window.location.href.split(`${import.meta.env.VITE_MY_FE_HOST}/`)[1].split('/');
      setRoot(mainRoot[0]);
      setSubRoot(mainRoot[1]);
      window.addEventListener("ReloadRoot", ()=>{
        setTimeout(()=>{
          const mainRoot = window.location.href.split(`${import.meta.env.VITE_MY_FE_HOST}/`)[1].split('/');
          setRoot(mainRoot[0]);
          setSubRoot(mainRoot[1]);
        },100);
      });
    },[]);
    useEffect(()=>{
      setSubMenu(RootLogics({ root, subRoot, OnClick:OnReloadRoot }))
    },[root, subRoot]);
  return (
    <div className='menu-container'>
        {(!isMobile) && <Link className='menu-head' to={"/"} onClick={OnReloadRoot}>
            <Logo />
        </Link>}
        <div className='menu-body'>
          {subMenu}
        </div>
    </div>
  )
}
