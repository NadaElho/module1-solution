(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.message = "";
        $scope.color = "black";
        $scope.tooMuch = function(){
            if($scope.message.toLowerCase() === "too much!" || $scope.message.toLowerCase() === "enjoy!"){
                $scope.color = "green";
            }else if($scope.message.toLowerCase() === "please enter data first"){
                $scope.color = "red";
            }
        };
    }
})();
