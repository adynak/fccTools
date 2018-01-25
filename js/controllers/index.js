ffcFilters.controller('titleCaseController', 
    [
        '$scope',
        '$filter',

    function($scope,$filter,titlecaseFilter) {

		document.title = txtPrompts.brandName;

		$scope.prompts = txtPrompts;
		$scope.messages = txtMessages;
		$scope.name="";
		$scope.dashFI="";
		$scope.formNumber="";

		if ($scope.name != ''){
			$scope.readyToTest = txtMessages.readyToTest.replace("CUSTOMER",$scope.name);	
		}

		$scope.change = function(){
			var message;
			var temp = $filter('titlecase')($scope.name);
			message = txtMessages.readyToTest.replace("CUSTOMER",temp);	
			message = message.replace('DASHFI', $scope.dashFI);
			message = message.replace('FORM_NUMBER', $scope.formNumber);			
			$scope.readyToTest = message;
		}
		

    }

]);