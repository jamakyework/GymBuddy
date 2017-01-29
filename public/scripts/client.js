var myApp = angular.module('myApp', []);
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
                alert("Incorrect password or username, Please try again or register ");
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
                alert("Thanks for registering");
                $window.location.href = '/';
            }, function errorCallback(error) {
                console.log('error occurred!');
                alert("Unsuccesful registration please try again");
            });

        };
    }
]);


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
                // confirm("Workout added successfully"); //
                //   $window.location.reload(); //
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        }; // end addWorkout

        // $scope.showConfirm = function() {
        //
        //     var confirmPopup = confirm({
        //         title: 'Select Option',
        //         template: 'Please select your next step'
        //     });
        //
        //     confirmPopup.then(function(res) {
        //             if (res) {
        //                 // Code to be executed on pressing ok or positive response
        //                 // Something like remove item from list
        //                 $scope.viewWorkout();
        //             }
        //         }
        //         else
        //         {
        //           // Code to be executed on pressing cancel or negative response
        //           $window.location.reload();
        //         }
        //       }
        //     );



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
        }; //end viewWorkout

        $scope.setActive = function(index) {
            console.log('this.workout:', this.workout);
            sessionStorage.setItem("selectedWorkoutId", this.workout._id);
            $window.location.href = '/viewWorkout';
        };
    }
]);


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


myApp.controller('viewWorkoutController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        // can also use $index here to grab index
        console.log('viewWorkoutController, selected workout id:', sessionStorage.getItem('selectedWorkoutId'));
        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.createExercise = function() {
            $window.location.href = '/exercise';
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
            var addExercise = {
                exercise: exercise,
                workout_id: $scope.workouts[0]._id
            };
            console.log("addExercise:", addExercise);
            // var exercise = {exercise};
            // workoutFactory.addExercise(exercise);
            $http({
                method: 'PUT',
                url: '/addExerciseToWorkout',
                data: addExercise
            }).then(function successCallback(response) {
                console.log('success', response);
                $window.location.reload();
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        };

        //   $scope.addToWorkout = function() {
        //   console.log("in addExercise");
        //   console.log("$scope.workouts", $scope.workouts );
        //   console.log("$scope.exercises", $scope.exercises );
        //   var exercise = sessionStorage.getItem('selectedExerciseId');
        //   workoutFactory.addExercise(exercise);
        //   $http({
        //       method: 'POST',
        //       url: '/addWorkout',
        //       data: exercise
        //   }).then(function successCallback(response) {
        //       console.log('success', response);
        //       $window.location.reload();
        //   }, function errorCallback(error) {
        //       console.log('error occurred!');
        //   });
        // };
        //
        // $scope.addToWorkout = function() {
        //   console.log("in addExercise");
        //   var exercise = sessionStorage.getItem('selectedExerciseId');
        //   console.log("selectedExerciseId:", exercise);
        //     var addExercise = $scope.exercises.workout.push(exercise);
        //     console.log("$scope.workouts", $scope.workouts );
        //     console.log("$scope.exercises", $scope.exercises );
        //     console.log("$scope.exercises[0]", $scope.exercises[0].workout);
        //   $http({
        //       method: 'PUT',
        //       url: '/addExerciseToWorkout',
        //       data: addExercise
        //   }).then(function successCallback(response) {
        //       console.log('success', response);
        //       $window.location.reload();
        //   }, function errorCallback(error) {
        //       console.log('error occurred!');
        //   });
        // };
        //
        // $scope.addToExercise = function() {
        //   console.log("in addExercise");
        //   console.log("$scope.workouts", $scope.workouts );
        //   console.log("$scope.exercises", $scope.exercises );
        //   var exercise = sessionStorage.getItem('selectedExerciseId');
        //   console.log("selectedExerciseId:", exercise);
        //   $http({
        //       method: 'PUT',
        //       url: '/addWorkoutToExercise',
        //       data: exercise
        //   }).then(function successCallback(response) {
        //       console.log('success', response);
        //       $window.location.reload();
        //   }, function errorCallback(error) {
        //       console.log('error occurred!');
        //   });
        // };


    }
]);


myApp.controller('viewExerciseController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('viewExerciseController, selected workout id:', sessionStorage.getItem('selectedExerciseId'));
        $scope.home = function() {
            $window.location.href = '/getStarted';
        };

        $scope.selectedExercise = function() {
            $scope.exercises = [];
            $http({
                method: 'GET',
                url: '/getExercise/' + sessionStorage.getItem('selectedExerciseId'),
            }).then(function successCallback(response) {
                console.log("response:", response);
                $scope.exercises = response.data;
                console.log("$scope.exercises:", $scope.exercises);
            });

            function errorCallback(error) {
                console.log('error', error);
            }
        };

    }
]); //end view exercise conroller


//connect to API
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
