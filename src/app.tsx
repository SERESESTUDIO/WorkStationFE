import { useEffect, useState } from "react";
import { useConected } from "./queries/useConected";
import { LogIn } from "./pages/logIn";
import { Advert } from "./components/advert/advert";
import { useTranslation } from "react-i18next";
import { useGetUser, type IUser } from "./queries/useGetUser";
import { UpdateGraphics } from "./utils/updateGraphics";
import { ReloadOnFailAuth } from "./utils/reloadOnFailAuth";
import { Header } from "./components/header/header";

export const App = () => {
  const [conect, setConect] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [advert, setAdvert] = useState<any>(null);
  const { data, active } = useConected();
  const { data: userData } = useGetUser();
  const { t } = useTranslation();
  useEffect(()=>{
    if(userData) {
      const dat:any = userData;
      const { success, user } = dat.getUser;
      if(success) {
        setUser(user);
      }
      else {
        setAdvert(ReloadOnFailAuth(t));
        setTimeout(()=>setAdvert(null),10000);
        UpdateGraphics(null);
      }
    }
  },[userData]);
  useEffect(()=>{
    if(user) {
      UpdateGraphics(user);
    }
  },[user]);
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
      {(!user && active) && <LogIn conected={conect}/>}
      {(user && active) && <div className="container">
        <section className="head">
          <div></div>
          <Header  user={user}/>
        </section>
        <section className="sub-body"></section>  
      </div>}
      {(!conect) && <Advert msg={t('db.disconected')} positive={false}/>}
      {(advert) && <Advert msg={advert.msg} positive={advert.success}/>}
    </>
  );
};
