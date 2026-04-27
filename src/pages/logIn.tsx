import { useEffect, useState } from "react";
import { EmailIcon } from "../components/icons/email.icon";
import { PasswordIcon } from "../components/icons/password.icon";
import { StartPanel } from "../components/startPanel/startPanel";
import { LookIcon } from "../components/icons/look.icon";
import { DontLookIcon } from "../components/icons/dontLook.icon";
import { useLogIn } from "../mutations/useLogIn";
import { Advert } from "../components/advert/advert";

export const LogIn = ({conected=true}) => {
  const [show, setShow] = useState(false);
  const [allow, setAllow] = useState(false);
  const [advert, setAdvert] = useState<any>();
  const {data, loading, setValues} = useLogIn();
  useEffect(()=>{
    if(conected) {
      if(loading) {
        setAllow(true);
      } else {
        setAllow(false);
      }
    }
    else setAllow(true);
  },[conected, loading]);
  useEffect(()=>{
    if(data) {
      const dat:any = data;
      const { message, success, token } = dat.authUser;
      if(success) {
        localStorage.setItem("token", token);
        window.location.href = "/";
        setAdvert({success:true, msg:message});
      }
      else {
        setAdvert({success:false, msg:message});
      }
      setTimeout(()=>{setAdvert({success:false, msg:""})},5000);
    }
  },[data]);
  const LogInHandle = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email:string = formData.get('email') as string;
    const password:string = formData.get('password') as string;
    setValues(email, password);
  }
  return (
    <>
      <div>
          <StartPanel conected={conected} insert={<>
            <form onSubmit={LogInHandle}>
              <h1>Log In</h1> 
              <fieldset className="input-01" disabled={allow}>
                <EmailIcon />
                <input name="email" type="email" placeholder="Email"/> 
                <div></div>
              </fieldset>
              <fieldset className="input-01" disabled={allow}>
                <PasswordIcon />
                <input name="password" type={show ? "text" : "password"} placeholder="Password"/> 
                <div onClick={()=>setShow(!show)}>
                  {(!show) && <DontLookIcon />}
                  {(show) && <LookIcon />}
                </div>
              </fieldset>
              <div />
              <button className="button-01" disabled={allow}>Log In</button>
              <fieldset className="redirect-01" disabled={allow}>
                <a>Forgot your password?</a>
              </fieldset>
            </form>
          </>}/>
      </div>
      {(advert && advert.msg != "") && <Advert msg={advert.msg} positive={advert.success} />}
    </>
  );
};
