angular.module('main',['RecursionHelper'])
.controller('bulletCtrl', function($scope){
	$scope.rootBullet = testBulletRoot;
	$scope.currentBullet = daddy2.children[0];
	$scope.getAncestry = function(){
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
		template:
			`<button class="btn btn-default" ng-click="node.toggleExpanded()" ng-show="node.children.length != 0">
				<span ng-show="!node.expanded" ng-click="node.expand()" class="glyphicon glyphicon-plus" aria-hidden="true"></span>
				<span ng-show="node.expanded" ng-click="node.contract()" class="glyphicon glyphicon-minus" aria-hidden="true"></span>
			</button>
			{{node.content}}{{bulletCtrl.testme}}
			<ul class="list-group-sm" ng-show="node.expanded">
				<li class="list-group-item" ng-repeat="child in node.children">
					<bullet node="child"></bullet>
				</li>
			</ul>`,
	  compile: function(element) {
	      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){

	      });
	  }
	}
})
;
