angular.module('MainController', [])
	.controller('MainController', ($scope, $location) => {
		$scope.currentNavItem = $location.path() === '/' 
		? 'home' : 
		$location.path() === '/share'
		? 'share' :
		$location.path() === '/discover'
		? 'discover' :
		$location.path() === '/profile'
		? 'profile' : 'discover';

		$scope.$on('$locationChangeStart', event => {
			$scope.currentNavItem = 
				$location.path() === '/' ? 'home' : $location.path().substr(1);
		});
	});

