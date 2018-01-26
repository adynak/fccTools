var ffcTools = angular.module('ffcTools', []);

var ffcTools = angular.module('ffcTools', 
        [
            'ngRoute'
        ]);

ffcTools.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $locationProvider.hashPrefix(''); 

    document.title = txtNavigation.brandName;

    $routeProvider.
		when('/clarifyTools', {
			templateUrl: 'views/clarifyTools.html',
			controller: 'clarifyToolsController'
		}).
			otherwise({
			redirectTo: '/clarifyTools'
		}
	);

	}]).run(function($rootScope, $location) {
		$rootScope.$on("$routeChangeStart", function(event, next, current) {
			// thre is nothing special that we need to do here for this application
		});
	}
);

