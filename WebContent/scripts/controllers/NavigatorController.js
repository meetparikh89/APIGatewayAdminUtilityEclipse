/**
 * 
 */
AdminUtilityApp.controller('NavigatorController', function($scope,$cookies,$rootScope) {
		$scope.oneAtATime = true;
		$rootScope.loginstatus = $cookies.loginCookie;

		$scope.clientOptions = [ {
			name : "Get Client",
			hrefValue:"#getClient"
		}, {
			name : "Create Client",
			hrefValue:"#createClient"
		}, {
			name : "Delete Client",
			hrefValue:"#deleteClient"
		} ];
		
		$scope.providerOptions = [ {
			name : "Get Providers",
			hrefValue:"#getProvider"
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