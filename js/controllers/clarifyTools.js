ffcTools.controller('clarifyToolsController', 
    [
        '$scope',
        '$filter',
    	'ffcServices',

    function($scope,$filter,ffcServices,titlecaseFilter) {

		$scope.prompts  = txtPrompts;
		$scope.cta      = txtCTA.name;
    	$scope.deadline = ffcServices.deadline(30);
    	$scope.eFormsIP = '';
    	$scope.addressError = '';

		$scope.selectText = function(divID){
			var someText = document.getElementById(divID);
			someText = someText.innerHTML.replace(/(\r\n|\n|\r)/gm,"");
			someText = someText.replace(/<br>/gm,"\n");
			ffcServices.copyToClipboard(someText);
		}

		$scope.btnRedirect = function(){
			var url = "http://" + $scope.eFormsIP + "/fi/Tools/eForm-Inspector.html";
			$scope.eFormsIP = '';
			$scope.addressError = '';
			window.open(url, '_blank');
		}

	 }

]);