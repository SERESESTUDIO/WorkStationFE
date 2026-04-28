import { useEffect, useState } from "react";
import { Advert } from "../components/advert/advert";
import { DontLookIcon } from "../components/icons/dontLook.icon";
import { LookIcon } from "../components/icons/look.icon";
import { PasswordIcon } from "../components/icons/password.icon";
import { StartPanel } from "../components/startPanel/startPanel";
import { useConected } from "../queries/useConected";
import { useTranslation } from "react-i18next";
import { UpdateGraphics } from "../utils/updateGraphics";

export const ResetPassword = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [conect, setConect] = useState(true);
    const [allow, setAllow] = useState(false);
    const { data, active } = useConected();
    const { t } = useTranslation();

    useEffect(()=>{
        UpdateGraphics(null);
    },[])
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
              <form onSubmit={()=>{}}>
                <h1>{t('resetPassword.title')}</h1>
                <fieldset className="input-01" disabled={allow}>
                  <PasswordIcon />
                  <input name="password" type={show ? "text" : "password"} placeholder={t('resetPassword.pass01')}/> 
                  <div onClick={()=>setShow(!show)}>
                    {(!show) && <DontLookIcon />}
                    {(show) && <LookIcon />}
                  </div>
                </fieldset>
                <fieldset className="input-01" disabled={allow}>
                  <PasswordIcon />
                  <input name="password" type={show2 ? "text" : "password"} placeholder={t('resetPassword.pass02')}/> 
                  <div onClick={()=>setShow2(!show2)}>
                    {(!show2) && <DontLookIcon />}
                    {(show2) && <LookIcon />}
                  </div>
                </fieldset>
                <div />
                <button className="button-01" disabled={allow}>{t('resetPassword.submit')}</button>
                <ul>
                    <li>{t('resetPassword.legent01')}</li>
                    <li>{t('resetPassword.legent02')}</li>
                    <li>{t('resetPassword.legent03')}</li>
                </ul>
              </form>
            </>}/>
        </div>
        {(!conect) && <Advert msg={t('db.disconected')} positive={false}/>}
    </>
  )
}
