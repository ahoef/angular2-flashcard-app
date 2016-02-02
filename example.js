//angular 1.x

//controller
angular.module('foo')
    .controller('myMessage', function($scope) {
        $scope.message = 'Look out for that rock!';
    });

//view
<div ng-controller="myMessage">
    {{ message }}
</div>




//angular 2 component with typescript

import { Component } from 'angular2/angular2';

@Component({
    selector: 'message-widget',
    templateUrl: `{{ message }}`,
    inputs: ['message']
})

export class myMessage {
    constructor(public message: string) {}
}



//angular 2 es5

var myMessage = ng.
    Component({
        selector: 'message-widget',
    })
    .View({
        template: '{{ message }}'
    })
    .Class({
        constructor: function(message) {
        this.message = message;
    }
});


