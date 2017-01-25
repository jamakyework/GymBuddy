var myApp = angular.module('myApp', [ ]);
console.log("NG");


myApp.factory('workoutFactory', function() {
    var workoutFactory = {};
    workoutFactory.workouts = [];
    workoutFactory.activeWorkout = {};
    workoutFactory.addWorkout = function(newWorkout) {
        this.workouts.push(newWorkout);
        console.log("this.workouts:", this.workouts);
        return (this.workouts);
    };
    console.log('workoutFactory:', workoutFactory);
    return workoutFactory;
});


myApp.controller('indexController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in index controller');

        $scope.login = function() {

            var userInfo = {
                username: $scope.username,
                password: $scope.password
            };

            $http({
                method: 'POST',
                url: '/',
                data: userInfo
            }).then(function successCallback(response) {
                console.log(response);
                $window.location.href = '/getStarted';
            }, function errorCallback(error) {
                console.log('error', error);
                $window.location.href = '/';
            });
        };
    }
]);


myApp.controller('registerController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in register controller');
        $scope.cancel = function() {
            $window.location.href = '/';
        };

        $scope.register = function() {
            var userInfo = {
                username: $scope.username,
                password: $scope.password
            };

            $http({
                method: 'POST',
                url: '/register',
                data: userInfo
            }).then(function successCallback(response) {
                console.log('success', response);
                $window.location.href = '/';
            }, function errorCallback(error) {
                console.log('error occurred!');
            });

        };
    }
]);


myApp.controller('getStartedController', ['$scope', '$http', '$window', 'workoutFactory',
  function($scope, $http, $window, $workoutFactory) {
        console.log('in getStartedController');

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
          sessionStorage.setItem("selectedWorkoutId", this.workout._id );
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
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.selectExercise = function() {
            console.log('this.exercise:', this.exercise);
            $window.location.href = '/viewExercise';
        };

        $scope.searchForExercise = function() {
            $window.location.href = '/searchAPI';
        };

        //future logout button
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
  }]); //end getStartedController


myApp.controller('createWorkoutController', ['$scope', '$http', '$window', 'workoutFactory',
    function($scope, $http, $window, workoutFactory) {
        console.log('in createWorkoutController');

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.addWorkout = function() {
            console.log("in add workout");
            var newWorkout = {
                name: $scope.name,
                description: $scope.description,
                imageUrl: $scope.imageUrl
                    // user: need to attach user to workout;
            };
            workoutFactory.addWorkout(newWorkout);
            $http({
                method: 'POST',
                url: '/addWorkout',
                data: newWorkout
            }).then(function successCallback(response) {
                console.log('success', response);
                $window.location.reload();
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        };
    }]);


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
    }
]);


myApp.controller('viewWorkoutController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('viewWorkoutController, selected workout id:', sessionStorage.getItem( 'selectedWorkoutId' ) );
        // run a find for this workout
        $scope.home = function() {
            $window.location.href = '/getStarted';
            };

            $scope.selectedWorkout = function() {
                $scope.workouts = [];
                $http({
                    method: 'GET',
                    url: '/getWorkout/' + sessionStorage.getItem( 'selectedWorkoutId' ),
                }).then(function successCallback(response) {
                    console.log("response:", response);
                    $scope.workouts = response.data;
                    console.log("$scope.workouts:", $scope.workouts);
                  });
                    function errorCallback(error) {
                    console.log('error', error);
                }
            };
    }
]);


myApp.controller('viewExerciseController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
      $scope.home = function() {
          $window.location.href = '/getStarted';
      };
    }
]);


//connect to API
myApp.controller("searchExerciseController", ["$scope", '$http', '$window',
    function($scope, $http, $window) {
        console.log("exerciseController..its working....");

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.searchExerciseFunc = function() {
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";//
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/";
            // var exerciseURL = "https://wger.de/api/v2/exercise.json/?";
            // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";

            var searchExercise = $scope.searchExercise;
            var exerciseURL = "https://wger.de/api/v2/exercise.json/"; //pulls data from API

            $scope.exercises = [];
            $http({
                method: 'GET',
                url: exerciseURL,
                dataType: "JSON",
            }).then(function successCallback(response) {
                console.log("This is response:", response);
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
