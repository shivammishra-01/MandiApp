export const isLoggedIn = () => {
  let data = localStorage.getItem('farmer');
  if (data) return true; return false;
};
export const FarmerData = () => {
  let data= JSON.parse(localStorage.getItem('farmer'));
  return data;
};
