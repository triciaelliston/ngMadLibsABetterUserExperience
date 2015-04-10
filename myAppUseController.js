angular.module('myAppUseController', [])
	.controller('MyCtrl', function($scope,$attrs) {
		$scope.myform = { submitted:false };

		/*$scope.submit = function() {
			if( $scope.myInputView.$valid ) {
				alert("Inside if - true");
				$scope.myform.submitted = true;
			} else {
				alert("Inside else - false");
				$scope.myform.submitted = false;
			}
			console.log($scope.myform.submitted);
		}*/
	})