export function tokenToLogin(token) {
  return {
    ...JSON.parse(atob(token.split('.')[1])),
    isLogin: true,
  }
}
