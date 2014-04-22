// AdminUtilityApp.controller('CreateClientController',
// 		function($scope,$http) {
// 			$scope.createClient = function() {
// 				if($scope.createclient_name == undefined || $scope.createclient_name == ''){
// 					$scope.createclient_message = "Please enter client name.";
// 				} else {
// 					$http({
// 		        	    method: 'PUT',
// 		        	    url: 'admin/client/' + $scope.createclient_name,
// 		        	})
// 		        	.success(function(data){
// 		        		$scope.createclient_message = "Client " + $scope.createclient_name + " created.";
// 		        	})
// 		        	.error(function(data){
// 		        		$scope.createclient_message = data.error_description;
// 		        	});
// 				}
// 			};
// });
AdminUtilityApp
		.controller(
				'CreateClientController',
				function($scope, $http, $location, ConfirmationDataFactory) {
					
					$scope.IPranges = [ {
						'id' : "IP1"
					} ];
					
					$scope.addNewIPRange = function() {
						var newItemNo = $scope.IPranges[$scope.IPranges.length - 1].id + 1;
						$scope.IPranges.push({
							'id' : 'IP' + newItemNo,
						});
					};

					$scope.AddIPRange = function(IPrange) {
						return IPrange.id === $scope.IPranges[$scope.IPranges.length - 1].id;
					};

					$scope.DeleteIPRange = function(IPRange) {
						$scope.IPranges.splice(IPRange, 1);
					};

					$scope.Delete = function(IPrange) {
						return !(IPrange.id === $scope.IPranges[$scope.IPranges.length - 1].id);
					};

					// $scope.checkClient = function() {
					// 	$http({
					// 		method : 'GET',
					// 		url : 'admin/client/' + $scope.clientName
					// 	}).success(function(data) {
					// 		alert("Client is Already Present");
					// 		$scope.name = "";
					// 	}).error(function(data) {
					// 		console.log('error');

					// 	});
					// };
					$scope.createClient = function() {
						var addArray = [];
						console.log("IPRangeCheckBox" + $scope.IPRangeCheckBox);
						if ($scope.IPRangeCheckBox) {

							for (var i = 0; i < $scope.IPranges.length; i++) {
								addArray.push($scope.IPranges[i]);

							}
						}
						console.log("Adding elements " + addArray);
						var validity = document.getElementById("validityCombo");
						var timeSpan = $scope.validityPeriod;
						ConfirmationDataFactory.setAddValidityPeriod(timeSpan);

						var timeUnit = validity.value;
						ConfirmationDataFactory.setAddValidityUnit(timeUnit);
						ConfirmationDataFactory.setClientName($scope.clientName.toLowerCase());
						ConfirmationDataFactory.setPassword($scope.password);
						ConfirmationDataFactory.setAddIPRanges(addArray);
						ConfirmationDataFactory.setAllIPRanges(addArray);
						ConfirmationDataFactory.setUpdateRequest(false);
						$location.path("/confirmationPage");
					};
				});
