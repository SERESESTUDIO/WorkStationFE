import { useEffect, useState } from 'react';
import { useGetAllComunityItems } from '../../queries/useGetAllComunityItems';
import { ImgResources } from '../../resources/imgResources';
import { checkMobile } from '../../utils/checkMobile';
import { Logo } from '../icons/logo';
import ImageGallery from "react-image-gallery";
import type { GalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import './startPanel.css';

export const StartPanel = ({insert=<></>, conected=true}) => {
  const [communityItems, setCommunityItems] = useState<GalleryItem[]>([]);
  const { isMobile } = checkMobile();
  const { data } = useGetAllComunityItems();
  useEffect(()=>{
    if (data) {
    const dat: any = data;
    const { success, communityItems: rawItems } = dat.getAllCommunityItems;

    if (success) {
        const finalItems: GalleryItem[] = rawItems.map((item: any) => ({
          original: item.img,
        }));

        setCommunityItems(finalItems); // <-- Aquí usamos el array procesado
      }
    }
  },[data]);
  return (
    <div className='start-panel-container'>
        {(!isMobile) && <div className='start-panel-image-container'>
          {(!conected) && <img src={ImgResources.startPanel}/>}
          {(conected) && <div className='start-panel-carousel-container'>
            <ImageGallery 
              showFullscreenButton={false} 
              showPlayButton={false} 
              showNav={false} 
              showBullets={true}
              autoPlay={true} 
              infinite={true} 
              items={communityItems}
              slideInterval={5000}
              additionalClass="custom-fit-gallery"
            />
          </div>}
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
