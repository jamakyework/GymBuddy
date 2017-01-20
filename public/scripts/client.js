var myApp = angular.module('myApp', []);
console.log("NG");

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
                $window.location.href = '/home';
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

myApp.controller('createWorkoutController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('in createWorkoutController');
    $scope.addWorkoutFunc = function() {
      var addWorkout = {
            name: $scope.name,
            description: $scope.description,
            imageUrl: $scope.imageUrl
          };
        console.log("workouts:", addWorkout);
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
  }]);

  myApp.controller('viewWorkoutController',['$scope', '$http',
  function($scope, $http) {
    $scope.workouts = [];
    console.log('viewWorkoutController');
      $scope.viewWorkoutFunc= function(){ $http({
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
    }]);


    myApp.controller('createExerciseController',['$scope', '$http', '$window',
      function($scope, $http, $window) {
      console.log('in createExerciseController');
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
      }]);

      myApp.controller('viewExerciseController',['$scope', '$http',
      function($scope, $http) {
        $scope.exercises = [];
        console.log('viewExerciseController');
          $scope.viewExerciseFunc= function(){ $http({
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
        }]);


//connect to API
myApp.controller("exerciseController", ["$scope", '$http', function($scope, $http) {
    console.log("exerciseController..its working....");

    $scope.searchExerciseFunc = function() {
        var searchExercise = $scope.searchExercise;
        var exerciseURL = "https://wger.de/api/v2/exercise.json/";//pulls data from API

        // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";//

        // var exerciseURL = "https://wger.de/api/v2/exercise.api/";
        // var exerciseURL = "https://wger.de/api/v2/exercise.json/?";
        // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";
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
