import './advert.css';
export const Advert = ({msg="", positive=true}) => {
  return (
    <div className="advert-container">
        <div className={`advert-header ${(positive) ? "advert-positive" : "advert-negative"}`}></div>
        <div className='advert-body'>
            <p>{msg}</p>
        </div>
    </div>
  )
}
