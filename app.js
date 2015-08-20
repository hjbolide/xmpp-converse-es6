import {converse} from 'jcbrand/converse.js';


class App {
  constructor () {
    this.name = 'xmpp';
    this.ver = '1.3';
  }

  get info () {
    return this.name + '-' + this.ver;
  }

}


let app = new App();
console.log(app.info);
