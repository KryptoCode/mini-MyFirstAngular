angular.module('friendsList').controller('mainCtrl', function($scope) {
	
	$scope.name = "Robert";

	$scope.friends = [];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';

	};
});