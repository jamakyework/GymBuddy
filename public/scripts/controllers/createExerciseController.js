myApp.controller('createExerciseController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in createExerciseController');

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.addExercise = function() {
            var addExercise = {
                name: $scope.name,
                description: $scope.description,
                imageUrl: $scope.imageUrl
            };
            console.log("exercises:", addExercise);
            $http({
                method: 'POST',
                url: '/addExercise',
                data: addExercise
            }).then(function successCallback(response) {
                console.log('success', response);
                $window.location.reload();
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        };

        $scope.viewExercise = function() {
            $scope.exercises = [];
            $http({
                method: 'GET',
                url: '/getExercise',
            }).then(function successCallback(response) {
                console.log("response:", response);
                $scope.exercises = response.data;
                console.log("$scope.exercises:", $scope.exercises);
            });

            function errorCallback(error) {
                console.log('error', error);
            }
        };

        $scope.setActiveExercise = function(index) {
            console.log('this.exercise:', this.exercise);
            sessionStorage.setItem("selectedExerciseId", this.exercise._id);
            $window.location.href = '/viewExercise';
        };

    }
]);
