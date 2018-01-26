ffcTools.controller('deadlineController', 
    [
        '$scope',
        '$filter',
    	'ffcServices',

    function($scope,$filter,ffcServices,titlecaseFilter) {

		$scope.prompts  = txtPrompts;
		$scope.cta      = txtCTA.name;
    	$scope.deadline = ffcServices.deadline(30);

		$scope.selectText = function(divID){
			var someText = document.getElementById(divID);
			someText = someText.innerHTML.replace(/(\r\n|\n|\r)/gm,"");
			someText = someText.replace(/<br>/gm,"\n");
			ffcServices.copyToClipboard(someText);
		}

	 }

]);