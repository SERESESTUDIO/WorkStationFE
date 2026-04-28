import type { IUser } from "../queries/useGetUser";

export const UpdateGraphics = (user: IUser | null) => {
  setTimeout(()=>{
    if(user) SetOnUser(user);
    else SetWithOutUser();
  },500);
};

const SetOnUser = (user: IUser) => {
  //background
  const backgroundContent =
    user.graphicConfiguration.background.split("#").length > 1 ? user.graphicConfiguration.background : `url("${user.graphicConfiguration.background}")`;
  window.document.body.style.setProperty("--background",`${backgroundContent}`);
  //header
  const head:HTMLDivElement = document.getElementById("head") as HTMLDivElement;
  if(head) head.style.setProperty("--head-background", `${(user.graphicConfiguration.header.split('#').length > 1) ? user.graphicConfiguration.header : `url("${user.graphicConfiguration.header}")`}`);
};
const SetWithOutUser = () => {
  //background
  window.document.body.style.setProperty("--background", `#3D4449`);
  //header
  const head:HTMLDivElement = document.getElementById("head") as HTMLDivElement;
  if(head) head.style.setProperty("--head-background", `#fff`);
};
