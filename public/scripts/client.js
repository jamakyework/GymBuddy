var myApp = angular.module('myApp', []);
console.log("NG");


myApp.factory('workoutFactory', function() {
    var workoutFactory = {};
    workoutFactory.workouts = [];
    // workoutFactory.users = [];
    workoutFactory.addWorkout = function(newWorkout) {
        this.workouts.push(newWorkout);
        return (this.workouts);
    };
    return workoutFactory;
});


myApp.controller('mainController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in main controller');

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


myApp.controller('getStartedController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in getStartedController');

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.submit = function() {
            var selected = $scope.getStarted;
            console.log('selected:', selected);

            if (selected === "createNewWorkout") {
                $window.location.href = '/workout';
            } else if (selected === "viewExistingWorkout") {
                $window.location.href = '/selectWorkout';
            } else if (selected === "searchForExercise") {
                $window.location.href = '/searchAPI';
            } else if (selected === "addCustomExercise") {
                $window.location.href = '/exercise';
            } else if (selected === "viewExistingExercise") {
                $window.location.href = '/viewExercise';
            }
        };
    }
]);


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
            workoutFactory.addWorkout(addWorkout);
            console.log("workouts:", addWorkout);
            console.log("workoutFactory.workout:", workoutFactory.workout);
            $http({
                method: 'POST',
                url: '/addWorkout',
                data: addWorkout
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
      console.log('viewWorkoutController');

      $scope.home = function() {
          $window.location.href = '/getStarted';
      };

        // $scope.selectWorkoutFunc = function() {
        //     var selected = $scope.selectWorkout;
        //     console.log('selected:', selected);
        // };

        $scope.workouts = [];
        $scope.viewWorkoutFunc = function() {
            $http({
                method: 'GET',
                url: '/getWorkout',
            }).then(function successCallback(response) {
                console.log("response:", response);
                $scope.workouts = response.data;
                console.log("$scope.workouts:", $scope.workouts);
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };
        // $scope.setActive = function(index) {
        //   factory.activeWorkout = $scope.workouts[index];
        // };
        // $scope.selectWorkoutFunc = function() {
        //
        //     //add selected workout to scope.workouts
        // };
    }
]);


myApp.controller('createExerciseController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in createExerciseController');

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.addExerciseFunc = function() {
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


myApp.controller('viewExerciseController', ['$scope', '$http',
function($scope, $http) {
        $scope.exercises = [];
        console.log('viewExerciseController');
        $scope.viewExerciseFunc = function() {
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
}]);


// //need select workoutFunc which will take you to the specific workout page
// myApp.controller('viewWorkoutController', ['$scope', '$http',
//     function($scope, $http) {
//         $scope.workouts = [];
//         console.log('viewWorkoutController');
//         $scope.viewWorkoutFunc = function() {
//             $http({
//                 method: 'GET',
//                 url: '/getWorkout',
//             }).then(function successCallback(response) {
//                 console.log("response:", response);
//                 $scope.workouts = response.data;
//                 console.log("$scope.workouts:", $scope.workouts);
//             }, function errorCallback(error) {
//                 console.log('error', error);
//             });
//         };
//         $scope.selectWorkoutFunc = function() {
//
//             //add selected workout to scope.workouts
//         };
//     }
// ]);
