myApp.controller('createWorkoutController', ['$scope', '$http', '$window', 'workoutFactory',
    function($scope, $http, $window, workoutFactory) {
        console.log('in createWorkoutController');

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.reload = function() {
            $scope.addWorkout();
            $window.location.reload();
        };

        $scope.addWorkout = function() {
            console.log("in add workout");
            var newWorkout = {
                name: $scope.name,
                description: $scope.description,
                imageUrl: $scope.imageUrl
            };
            workoutFactory.addWorkout(newWorkout);
            $http({
                method: 'POST',
                url: '/addWorkout',
                data: newWorkout
            }).then(function successCallback(response) {
                console.log('success', response);
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        }; // end addWorkout

        $scope.viewWorkout = function() {
            $scope.addWorkout();
            $scope.viewWorkoutBtn();
        }; //end viewWorkout

        $scope.viewWorkoutBtn = function() {
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

    }
]);
