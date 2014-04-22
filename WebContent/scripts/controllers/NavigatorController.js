/**
 * 
 */
AdminUtilityApp.controller('NavigatorController', function($scope,$cookies,$rootScope) {
		$scope.oneAtATime = true;
		$rootScope.loginstatus = $cookies.loginCookie;

		$scope.clientOptions = [ {
			name : "Manage Client",
			hrefValue:"#manageClient"
		}, {
			name : "Create Client",
			hrefValue:"#createClient"
		}];
		
		$scope.providerOptions = [ {
			name : "Manage Provider",
			hrefValue:"#manageProvider"
		}, {
			name : "Create Providers",
			hrefValue:"#createProvider"
		} ];
		
		
		$scope.capabilityOptions= [ {
			name : "Get Cabalities",
			hrefValue:"#getCapabilities"
		}, {
			name : "Create Prioritries",
			hrefValue:"#createCapabilities"
		} ];
});