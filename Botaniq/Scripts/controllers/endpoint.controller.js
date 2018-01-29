app.controller("EndpointController", ["$scope", "$http", "botaniqService",
    function ($scope, $http, botaniqService) {

        var ctrl = this;

        ctrl.save = function () {
            var submitValue = {
                query: $scope.query,
                responseType: "application/sparql-results+json"
            };
            var promisePost = botaniqService.postQuery(submitValue.query, submitValue.responseType);
                promisePost.then(function (response) {
                    $scope.queryData = response.data;
                    $("#content").text(JSON.stringify($scope.queryData, undefined, 2));
                    },
                    function (error) {
                        console.log("Error" + error);
                    });
        };

    }]);