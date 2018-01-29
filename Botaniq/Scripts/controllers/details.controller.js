app.controller("DetailsController", ["$scope", "$http", "botaniqService", "$location",
    function ($scope, $http, botaniqService, $location) {

        var ctrl = this;
        var searchObject = $location.absUrl();

        function mySplit(string) {
            var array = string.split('/');
            return array[array.length-1];
        }

        $scope.getPlantDetails = function () {
            ctrl.plantName = mySplit(searchObject);
            botaniqService.getPlantsByName(ctrl.plantName)
                .then(function (response) {
                        $scope.plantDetails = response.data;
                    },
                    function (error) {
                        $scope.error = JSON.stringify(error);
                    });
        };
           $scope.getPlantDetails();


        ctrl.postComment = function () {
            var submitValue = {
                comment: $scope.commentText,
                plant: $scope.plantDetails.plant
            };
            var promisePost = botaniqService.postAddedComment(submitValue.comment, submitValue.plant);
            promisePost.then(function (response) {
                $scope.queryData = response.data;
                $("#comment-area").val('');
                $scope.getPlantDetails();
                },
                function (error) {
                    console.log("Error" + error);
                    $("#comment-area").val('');
                    $scope.getPlantDetails();
                });
        };

        ctrl.postRelation = function () {
            var submitValue = {
                relation: $scope.relation,
                plant: $scope.plantDetails.plant
            };
            var promisePost = botaniqService.postAddedRelation(submitValue.relation, submitValue.plant);
            promisePost.then(function (response) {
                $scope.queryData = response.data;
                $("#relation-area").val('');
                $scope.getPlantDetails();
                },
                function (error) {
                    console.log("Error" + error);
                    $("#relation-area").val('');
                    $scope.getPlantDetails();
                });
        };

        ctrl.postImage = function () {
            var submitValue = {
                image: $scope.imageUrl,
                plant: $scope.plantDetails.plant
            };
            var promisePost = botaniqService.postImageUrl(submitValue.image, submitValue.plant);
            promisePost.then(function (response) {
                $scope.queryData = response.data;
                $("#image-area").val('');
                $scope.getPlantDetails();
                },
                function (error) {
                    console.log("Error" + error);
                    $("#image-area").val('');
                    $scope.getPlantDetails();
                });
        };

    }]);