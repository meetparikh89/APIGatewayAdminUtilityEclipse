AdminUtilityApp
		.controller(
				'ConfirmationPageController',
				function($scope, $location,$http, ConfirmationDataFactory) {
					console.log('Called the Confirmation Page Controller');
					$scope.submitMessage='';
					$scope.clientName = ConfirmationDataFactory.getClientName();
					$scope.validityTimeSpan = ConfirmationDataFactory
							.getValidityPeriod();
					TimeUnitPatt = ConfirmationDataFactory.getValidityUnit();
					var validityValue = 'P' + $scope.validityTimeSpan
							+ TimeUnitPatt;
					var password = ConfirmationDataFactory.getPassword();

					if (TimeUnitPatt == 'M') {
						$scope.validityTimeUnit = "Months";
					} else if (TimeUnitPatt == 'D') {
						$scope.validityTimeUnit = "Days";
					} else if (TimeUnitPatt == 'Y') {
						$scope.validityTimeUnit = "Years";
					} else {
						$scope.validityTimeUnit = "Invalid";
					}
					$scope.allIPRanges = ConfirmationDataFactory
							.getAllIPRanges();

					console.log("All IP Ranges"
							+ JSON.stringify($scope.allIPRanges));

					$scope.deleteIPRanges = ConfirmationDataFactory
							.getIPRangesToBeDeleted();

					$scope.addIPRanges = ConfirmationDataFactory
							.getIPRangesToBeAdded();

					console.log("Deleted ranges"
							+ JSON.stringify($scope.deleteIPRanges));
					console.log("Adding range"
							+ JSON.stringify($scope.addIPRanges));

					$scope.back = function() {
						window.history.back();
					};

					$scope.submit = function() {
						

						if (!ConfirmationDataFactory.getUpdateRequest()) {
							$http({
								method : 'PUT',
								url : 'admin/client/' + $scope.clientName,
							})
									.success(
											function(data) {
												console.log('Client is created');
												$scope.submitMessage=$scope.submitMessage+"Client is created";
												if ((password != '' && password != undefined && password != null)) {
													console
															.log("Inside Password request");
													$http(
															{
																method : 'POST',
																url : 'admin/client/'
																		+ $scope.clientName
																		+ '/credentials',
																data : {
																	"password" : password,
																	"validity_period" : validityValue
																}
															})
															.success(
																	function(
																			data) {
																		console
																				.log("Post password Successfully");
																		$scope.clientName = $scope.name;
																		$scope.submitMessage=$scope.submitMessage+" Password is Updated";

																	})
															.error(
																	function(
																			data,
																			status) {
																		console
																				.log("Post password failed");
																		$scope.submitMessage=$scope.submitMessage+" But, Password Updation fails";
																	});
												}
												for(var i=0;i<$scope.addIPRanges.length;i++) {
													
													console
															.log(" Inside Iprange");
													$http(
															{
																method : 'PUT',
																url : 'admin/client/'
																		+ $scope.clientName
																		+ '/iprange/'+$scope.addIPRanges[i].name,
																data : {
																	"from" : $scope.addIPRanges[i].from,
																	"to" : $scope.addIPRanges[i].to
																}
															})
															.success(
																	function(
																			data) {
																		console
																				.log("Ip added Successfully");
																		console
																				.log(JSON
																						.stringify(data));
																	})
															.error(
																	function(
																			data) {
																		console
																				.log('error');
																	});
												}

											})

									.error(
											function(data) {
												$scope.createclient_message = data.error_description;
											});

						}
						;

						if ((password != '' || password != undefined || password !=null)
								&& ConfirmationDataFactory.getUpdateRequest()) {
							console.log("Inside Password request");
							$http(
									{
										method : 'POST',
										url : 'admin/client/'
												+ $scope.clientName
												+ '/credentials',
										data : {
											"password" : password,
											"validity_period" : validityValue
										}
									})
									.success(
											function(data) {
												console
														.log("Added password Successfully");
												$scope.submitMessage=$scope.submitMessage+" Password is Updated";

											})
									.error(
											function(data, status) {
												console
														.log("Post password failed");
												$scope.submitMessage=$scope.submitMessage+" Password Updation fails";

											});
						}
						console.log("Ip " + $scope.IPRangeCheckBox);
						if (ConfirmationDataFactory.getUpdateRequest()) {
							console.log(" Inside Iprange");
							for(var i=0;i<$scope.deleteIPRanges.length;i++){
								$http(
										{
											method : 'DELETE',
											url : 'admin/client/'
													+ $scope.clientName
													+ '/iprange/'
													+ $scope.deleteIPRanges[i].name
										}).success(function(data) {
									console.log("Ip Deleted Successfully");
									console.log(JSON.stringify(data));
									$scope.clients = data;
								}).error(function(data) {
									console.log('error');
								});
							}
							
							
							
							for(var i=0;i<$scope.addIPRanges.length;i++){
								
								console.log("Adding IP Ranges");
								var from=$scope.addIPRanges[i].from.toString();
								var to = $scope.addIPRanges[i].to.toString();
								var name = $scope.addIPRanges[i].name;								
								$http(
									{
										method : 'PUT',
										url : 'admin/client/'
												+ $scope.clientName
												+ '/iprange/'
												+ name,
										data : {
											"from" : from,
											"to" : to
										}
									}).success(function(data) {
								console.log("Ip added Successfully");
								console.log(JSON.stringify(data));
								$scope.clients = data;
							}).error(function(data) {
								console.log('error');
							});
							}
							alert($scope.submitMessage);
						}
						else{
							$scope.submitMessage=$scope.submitMessage+" Updation Failed";
							alert($scope.submitMessage);
						}
						
					};
					
				});
