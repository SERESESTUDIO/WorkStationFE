import { Link } from "react-router";

export const RootLogics = ({root="", subRoot="", OnClick=()=>{}}):any => {
    //Configuration
    if(root == "configuration") return(<>
      <Link onClick={OnClick} to={"/configuration/users"} className={`menu-button ${(subRoot == "users") ? "menu-button-active": "menu-button-inactive"}`}>Usuarios</Link>
      <Link onClick={OnClick} to={"/configuration/departments"} className={`menu-button ${(subRoot == "departments") ? "menu-button-active": "menu-button-inactive"}`}>Departamentos</Link>
      <Link onClick={OnClick} to={"/configuration/process"} className={`menu-button ${(subRoot == "process") ? "menu-button-active": "menu-button-inactive"}`}>Procesos</Link>
    </>)
    
    //Account
    if(root == "account") return(<>
      <h2>Cuenta</h2>
    </>)
    return null;
}