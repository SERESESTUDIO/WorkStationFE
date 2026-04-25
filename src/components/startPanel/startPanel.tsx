import { ImgResources } from '../../resources/imgResources';
import { Logo } from '../icons/logo';
import './startPanel.css';

export const StartPanel = ({insert=<></>}) => {
  return (
    <div className='start-panel-container'>
        <div className='start-panel-image-container'>
          <img src={ImgResources.startPanel}/>
        </div>
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
