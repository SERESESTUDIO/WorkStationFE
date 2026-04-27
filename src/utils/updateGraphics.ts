import type { IUser } from "../queries/useGetUser";

export const UpdateGraphics = (user: IUser | null) => {
    if(user) SetOnUser(user);
    else SetWithOutUser();
};

const SetOnUser = (user: IUser) => {
  const backgroundContent =
    user.graphicConfiguration.background.split("#").length > 1
      ? user.graphicConfiguration.background
      : `url("${user.graphicConfiguration.background}")`;
  window.document.body.style.setProperty(
    "--background",
    `${backgroundContent}`,
  );
};
const SetWithOutUser = () => {
  window.document.body.style.setProperty("--background", `#3D4449`);
};
