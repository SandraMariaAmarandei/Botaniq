app.service('botaniqService', ["$http", function ($http) {
    var service = {};
    var baseUrl = "http://localhost:8080/";

    service.getPlants = function () {
        return $http.get(baseUrl + "fetchDbpediaData");
    };

    service.getPlantsByName = function (plantName) {
        return $http.get(baseUrl + "findOneFromDbpedia/" + plantName);
    };

    service.postQuery = function (querySubmitValue, responseSubmitValue) {
        var data = { "query": querySubmitValue, "responseType": responseSubmitValue }
        return $http.post(baseUrl + "caca", data);
    };

    service.postAddedComment = function (commentSubmitValue, plantSubmitValue) {
        var data = { "comment": commentSubmitValue, "plant": plantSubmitValue }
        return $http.post(baseUrl + "addComments", data);
    };

    service.postAddedRelation = function (relationSubmitValue, plantSubmitValue) {
        var data = { "comment": relationSubmitValue, "plant": plantSubmitValue }
        return $http.post(baseUrl + "addRelation", data);
    };

    service.postImageUrl = function (imageSubmitValue, plantSubmitValue) {
        var data = { "comment": imageSubmitValue, "plant": plantSubmitValue }
        return $http.post(baseUrl + "addImage", data);
    };

    return service;

}]);