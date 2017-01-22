var myApp = angular.module('myApp', []);
console.log("NG");


myApp.factory('workoutFactory', function() {
    var workoutFactory = {};
    workoutFactory.workouts = [];
    // workoutFactory.users = [];
    workoutFactory.addWorkout = function(newWorkout) {
        this.workouts.push(newWorkout);
        console.log("this.workouts:", this.workouts);
        return (this.workouts);
    };
    console.log('workoutFactory:', workoutFactory);
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


myApp.controller('getStartedController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in getStartedController');

        $scope.createWorkout = function() {
            $window.location.href = '/workout';
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
                $scope.selectWorkout = function() {
                    console.log('this.workout:', this.workout);
                };
            }, function errorCallback(error) {
                console.log('error', error);
            });
        };

        $scope.createExercise = function() {
            $window.location.href = '/exercise';
        };

        $scope.viewExercise = function() {
            // $window.location.href = '/viewExercise';
            $scope.exercises = [];
                $http({
                    method: 'GET',
                    url: '/getExercise',
                }).then(function successCallback(response) {
                    console.log("response:", response);
                    $scope.exercises = response.data;
                    console.log("$scope.exercises:", $scope.exercises);
                    $scope.selectExercise = function() {
                        console.log('this.exercise:', this.exercise);
                    };
                }, function errorCallback(error) {
                    console.log('error', error);
                });
        };

        $scope.searchForExercise = function() {
            $window.location.href = '/searchAPI';
        };

        // $scope.selectWorkoutFunc = function() {
        //     console.log('this.workout:', this.workout);
        //
        // };

        // $scope.submit = function() {
        //     var selected = $scope.getStarted;
        //     console.log('selected:', selected);
        //
        //     if (selected === "createWorkout") {
        //         $window.location.href = '/workout';
        //     } else if (selected === "viewWorkout") {
        //         $window.location.href = '/selectWorkout';
        //     } else if (selected === "createExercise") {
        //         $window.location.href = '/exercise';
        //     } else if (selected === "viewExercise") {
        //         $window.location.href = '/viewExercise';
        //     } else if (selected === "searchForExercise") {
        //         $window.location.href = '/searchAPI';
        //     }
        // };

        // $scope.logout = function() {
        //   $http({
        //       method: 'GET',
        //       url: '/logout',
        //   }).then(function successCallback(response) {
        //       console.log("response:", response);
        //   }, function errorCallback(error) {
        //       console.log('error', error);
        //   });
        // };


    }]);//end getStartedController


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
    }
]);


myApp.controller('viewWorkoutController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('viewWorkoutController');

        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

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
        //need selectWorkoutFunc to take user to the specific workout page
        //need page that will be updated with this when this is clicked
        //stub page that will simply be populated with info depending on what is clicked
        $scope.selectWorkoutFunc = function() {
            console.log('this.workout:', this.workout);

        };

        // $scope.setActive = function(index) {
        //   factory.activeWorkout = $scope.workouts[index];
        // };
        // $scope.selectWorkoutFunc = function() {
        // //add selected workout to scope.workouts
        // };

        // $scope.selectWorkoutFunc = function() {
        //     var selected = $scope.selectWorkout;
        //     console.log('selected:', selected);
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


myApp.controller('viewExerciseController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

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
    }
]);
