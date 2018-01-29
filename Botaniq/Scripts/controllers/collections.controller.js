app.controller("CollectionController", ["$scope", "$http", "botaniqService",
    function ($scope, $http, botaniqService) {

        var ctrl = this;

        ctrl.mySplit = function (string) {
            var array = string.split('.');
            return array[0];
        }

        $scope.getData = function () {
            botaniqService.getPlants()
                .then(function (response) {
                        $scope.data = response.data;
                    },
                    function (error) {
                        $scope.error = JSON.stringify(error);
                    });
        };
        $scope.getData();

    }]);