angular.module('main',['RecursionHelper'])
.controller('bulletCtrl', function($scope){
	$scope.rootBullet = testBulletRoot;
	this.testme = "TEST"
})
.directive('bullet',function(RecursionHelper){
	return {
		restrict: "E",
		scope: {
						node: '=node',
						},
		// templateUrl:'./bullet-template.html',
		template:  `<p>{{node.content}}{{bulletCtrl.testme}}{{test}}</p>
								<ul class="list-group-sm">
									<li class="list-group-item" ng-repeat="child in node.children">
										<bullet node="child"></bullet>
									</li>
								</ul>`,
        // template: '<p>{{ node.content }}{{test}}</p>'+
        // '<div class="children-container">' +
        //   '<div ng-repeat="child in node.children">' +
        //     '<bullet node="child"></bullet>' +
        //   '</div>' +
        // '</div>',
  compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
            // Define your normal link function here.
            // Alternative: instead of passing a function,
            // you can also pass an object with
            // a 'pre'- and 'post'-link function.
        });
    }
	}
});



