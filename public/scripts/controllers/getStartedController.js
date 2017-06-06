myApp.controller('getStartedController', ['$scope', '$http', '$window', 'workoutFactory',
    function($scope, $http, $window, $workoutFactory) {
        console.log('in getStartedController');

        $scope.username = function() {
            $http({
                method: 'GET',
                url: '/username',
            }).then(function successCallback(response) {
                console.log("response:", response);
                $scope.username = response.data.username;
                console.log("$scope.username:", response.data.username);
            });

            function errorCallback(error) {
                console.log('error', error);
            }
        };

        $scope.createWorkout = function() {
            $window.location.href = '/workout';
        };

        $scope.createExercise = function() {
            $window.location.href = '/exercise';
        };

        $scope.viewWorkout = function() {
            $scope.workouts = [];
            $http({
                method: 'GET',
                url: '/getWorkout',
            }).then(function successCallback(response) {
                console.log("response:", response);
                $scope.workouts = response.data;
                console.log("$scope.workouts:", $scope.workouts);
            });

            function errorCallback(error) {
                console.log('error', error);
            }
        };

        $scope.setActive = function(index) {
            console.log('this.workout:', this.workout);
            sessionStorage.setItem("selectedWorkoutId", this.workout._id);
            $window.location.href = '/viewWorkout';
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

        $scope.searchForExercise = function() {
            $window.location.href = '/searchAPI';
        };

        $scope.logout = function() {
            $http({
                method: 'GET',
                url: '/logout',
            }).then(function successCallback(response) {
                console.log("response:", response);
                $window.location.href = '/';
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

    }
]); //end getStartedController
