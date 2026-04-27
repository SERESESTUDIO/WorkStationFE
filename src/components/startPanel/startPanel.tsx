import { useEffect, useState } from 'react';
import { useGetAllComunityItems } from '../../queries/useGetAllComunityItems';
import { ImgResources } from '../../resources/imgResources';
import { checkMobile } from '../../utils/checkMobile';
import { Logo } from '../icons/logo';
import './startPanel.css';

export const StartPanel = ({insert=<></>, conected=true}) => {
  const [communityItems, setCommunityItems] = useState<any[]>([]);
  const { isMobile } = checkMobile();
  const { data } = useGetAllComunityItems();
  useEffect(()=>{
    if(data) {
      const dat:any = data;
      const { success, communityItems } = dat.getAllCommunityItems;
      if(success) {
        setCommunityItems(communityItems);
      }
    }
  },[data]);
  return (
    <div className='start-panel-container'>
        {(!isMobile) && <div className='start-panel-image-container'>
          {(!conected) && <img src={ImgResources.startPanel}/>}
          {(conected) && <></>}
        </div>}
        <div className='start-panel-body'>
          <div/>
          <Logo />
          <div className='start-panel-viewport'>
            {insert}
          </div>
        </div>
    </div>
  )
}
