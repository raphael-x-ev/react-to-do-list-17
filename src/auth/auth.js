class Auth {
  constructor() {
    this.Authenticated = false;
  }

  login(cb) {
    this.Authenticated = true;
    cb();
  }

  logout(cb) {
    this.Authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.Authenticated;
  }
}

export default new Auth();
