// (function(app) {
//   	app.AppComponent =
//     	ng.core.Component({
//       		selector: 'my-app',
//       		templateUrl: '../src/partials/hey.html'
//     	})
//     	.Class({
//       		constructor: function() {}
//     	});

// })(window.app || (window.app = {}));

import {Component, View, Input} from 'angular2/core';


@Component({
  selector: 'my-app',
  templateUrl: '../src/partials/hey.html'
})



export class MyApp {
  constructor() {

  }

  getRandomUser() {
    console.log('hey');
  }

}

bootstrap(MyApp);
