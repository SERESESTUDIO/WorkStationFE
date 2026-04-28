import { useEffect, useState } from "react";
import { StartPanel } from "../components/startPanel/startPanel"
import { EmailIcon } from "../components/icons/email.icon";
import { useTranslation } from "react-i18next";
import { UpdateGraphics } from "../utils/updateGraphics";
import { Advert } from "../components/advert/advert";
import { useConected } from "../queries/useConected";
import { Link } from "react-router";

export const ForgetPassword = () => {
    const [allow, setAllow] = useState(true);
    const [conect, setConect] = useState(true);
    const { data, active } = useConected();
    const { t } = useTranslation();
    useEffect(()=>{
        UpdateGraphics(null);
    },[]);
    useEffect(()=>{
      if(conect) setAllow(false);
      else setAllow(true);
    },[conect]);
    useEffect(() => {
      if(active)
      {
        if (data) {
          const dat: any = data;
          const { conected } = dat;
          setConect(conected);
        }
        else {
          setConect(false);
        }
      }
    }, [data, active]);
  return (
    <>
        <div>
            <StartPanel conected={conect} insert={<>
              {(!allow) && <Link to={"/"} className="redirect-02">{t('forgetPassword.goBack')}</Link>}
              <form onSubmit={()=>{}}>
                <h1>{t('forgetPassword.title')}</h1> 
                <p>{t('forgetPassword.message')}</p>
                <fieldset className="input-01" disabled={allow}>
                  <EmailIcon />
                  <input name="email" type="email" placeholder={t('logIn.email')}/> 
                  <div></div>
                </fieldset>
                <div />
                <button className="button-01" disabled={allow}>{t('forgetPassword.submit')}</button>
              </form>
            </>}/>
        </div>
        {(!conect) && <Advert msg={t('db.disconected')} positive={false}/>}
    </>
  )
}
