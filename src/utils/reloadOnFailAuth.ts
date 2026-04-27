export const ReloadOnFailAuth = (t:Function):any => {
  const token = window.localStorage.getItem("token");
  if (token) {
    window.localStorage.removeItem("token");
    return {
      success: false,
      msg: t("db.outOfSession"),
    };
  }
};
