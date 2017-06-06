//connect to API/
myApp.controller("searchExerciseController", ["$scope", '$http', '$window',
    function($scope, $http, $window) {
        console.log("exerciseController..its working....");

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.searchExerciseFunc = function() {
            var searchExercise = $scope.searchExercise;
            console.log("searchExercise", searchExercise);

            // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";//
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/";
            // var exerciseURL = "https://wger.de/api/v2/exercise.json/?";
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";
            // var exerciseURL = "https://wger.de/api/v2/exercise.json/";
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/?name/" + searchExercise;
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/?name/";
            var exerciseURL = "https://wger.de/api/v2/exercise.json/";

            $scope.exercises = [];
            $http({
                method: 'GET',
                url: exerciseURL,
                dataType: "application/json",
            }).then(function successCallback(response) {
                console.log("response:", response);
                // console.log("This is in results:", response.data.results);
                // console.log("This is in results[0]:", response.data.results[0]);
                // console.log("This is in results:", response.results.name);
                $scope.exercises = response.data.results;
                console.log("$scope.exercises:", $scope.exercises);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };
    }
]);
