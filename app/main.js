angular.module('main',['RecursionHelper'])
.controller('bulletCtrl', function($scope){
	$scope.rootBullet = testBulletRoot;
	$scope.currentBullet = daddy2.children[0];
	$scope.getAncestry = function(){
		console.log($scope.currentBullet.getAncestry());
		return $scope.currentBullet.getAncestry();
	};
})
.directive('bullet',function(RecursionHelper){
	return {
		restrict: "E",
		scope:
			{
				node: '=node',
			},
		// templateUrl:'./bullet-template.html',
		template:
			`<p>{{node.content}}{{bulletCtrl.testme}}{{test}}</p>
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

	      });
	  }
	}
})
// .directive('ancestor',function(RecursionHelper){
// 	return {
// 		restrict: "E",
// 		scope: {
// 			node: "=node",
// 		},
// 		template:
// 			`<li
// 			`
// 		compile: function(element){
//       return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){

//       });
// 		}
// 	}
// })
;
