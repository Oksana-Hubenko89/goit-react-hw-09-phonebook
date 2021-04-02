const getIsAuthenticated = store =>store.auth.isAuthenticated;
//const getLoadingAuth = state => state.contacts.loadingAuth;
const getUserName = store => store.auth.user.name;
const getToken = store => store.auth.token;

export default {
  getIsAuthenticated,
  getUserName,
  //getLoadingAuth,
  getToken
};