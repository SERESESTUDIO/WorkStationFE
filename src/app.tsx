import { useEffect, useState } from "react";
import { useConected } from "./queries/useConected";
import { LogIn } from "./pages/logIn";
import { Advert } from "./components/advert/advert";
import { useTranslation } from "react-i18next";

export const App = () => {
  const [conect, setConect] = useState(true);
  const { data, active } = useConected();
  const { t, i18n } = useTranslation();
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
    <div>
      <LogIn conected={conect}/>
      {(!conect) && <Advert msg={t('db.disconected')} positive={false}/>}
    </div>
  );
};
