import { useEffect, useState } from "react";
import { EmailIcon } from "../components/icons/email.icon";
import { PasswordIcon } from "../components/icons/password.icon";
import { StartPanel } from "../components/startPanel/startPanel";
import { LookIcon } from "../components/icons/look.icon";
import { DontLookIcon } from "../components/icons/dontLook.icon";

export const LogIn = ({conected=true}) => {
  const [show, setShow] = useState(false);
  const [allow, setAllow] = useState(false);
  useEffect(()=>{
    setAllow(!conected);
  },[conected])
  const LogInHandle = (event:any) => {
    event.preventDefault();
    console.log(event.target);
  }
  return (
    <div>
        <StartPanel insert={<>
          <form onSubmit={LogInHandle}>
            <h1>Log In</h1> 
            <fieldset className="input-01" disabled={allow}>
              <EmailIcon />
              <input type="email" placeholder="Email"/> 
              <div></div>
            </fieldset>
            <fieldset className="input-01" disabled={allow}>
              <PasswordIcon />
              <input type={show ? "text" : "password"} placeholder="Password"/> 
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
  );
};
