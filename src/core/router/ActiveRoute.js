export class ActiveRoute {
  static get path() {
    return window.location.hash.slice(1);
  }

  static get params() {
    console.log(ActiveRoute.path.split('/')[1]);
    return ActiveRoute.path.split('/')[1];
  }

  static navigate(path) {
    window.location.hash = path;
  }
}
