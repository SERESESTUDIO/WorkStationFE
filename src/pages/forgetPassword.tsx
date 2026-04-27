import { useEffect, useState } from "react";
import { StartPanel } from "../components/startPanel/startPanel"
import { EmailIcon } from "../components/icons/email.icon";
import { useConected } from "../queries/useConected";
import { useTranslation } from "react-i18next";
import { UpdateGraphics } from "../utils/updateGraphics";
import { Advert } from "../components/advert/advert";

export const ForgetPassword = () => {
    const [show, setShow] = useState(false);
    const [conect, setConect] = useState(true);
    const [allow, setAllow] = useState(false);
    const { data, active } = useConected();
    const { t } = useTranslation();
    useEffect(()=>{
        UpdateGraphics(null);
    },[])
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
              <fieldset className="redirect-02" disabled={allow}>
                <a onClick={()=>window.location.href = "/"}>{t('forgetPassword.goBack')}</a>
              </fieldset>
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
