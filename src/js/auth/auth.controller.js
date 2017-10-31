class AuthCtrl {
  constructor($state) {
    'nginject';

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
  }
}

export default AuthCtrl;