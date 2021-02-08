const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getInFetchingCurrent = state => state.auth.isRefreshUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getInFetchingCurrent,
};

export default authSelectors;
