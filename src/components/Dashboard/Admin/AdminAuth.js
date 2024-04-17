export const isAdminLoggedIn = () => {
  let data = localStorage.getItem("admin");
  if (data) return true;
  return false;
};
export const AdminrData = () => {
  let data = JSON.parse(localStorage.getItem("admin"));
  return data;
};
