myApp.controller('viewWorkoutController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        // can also use $index here to grab index
        console.log('viewWorkoutController, selected workout id:', sessionStorage.getItem('selectedWorkoutId'));

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.selectedWorkout = function() {
            $scope.workouts = [];
            $http({
                method: 'GET',
                url: '/getWorkout/' + sessionStorage.getItem('selectedWorkoutId'),
            }).then(function successCallback(response) {
                console.log("response:", response);
                $scope.workouts = response.data;
                console.log("$scope.workouts:", $scope.workouts);
            });

            function errorCallback(error) {
                console.log('error', error);
            }
        };

        $scope.createExercise = function() {
            $window.location.href = '/exercise';
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

        $scope.addToWorkout = function(exercise) {
            console.log("in addExercise");
            console.log("$scope.workouts", $scope.workouts);
            $window.location.reload();
            var addExercise = {
                exercise: exercise,
                workout_id: $scope.workouts[0]._id
            };
            console.log("addExercise:", addExercise);
            $http({
                method: 'PUT',
                url: '/addExerciseToWorkout',
                data: addExercise
            }).then(function successCallback(response) {
                console.log('success', response);
                alert("Exercise Added To Workout");
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        };
    }
]);
