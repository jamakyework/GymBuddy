var myApp = angular.module('myApp', []);
console.log("NG");

myApp.controller('mainController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('inside main controller');

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
        console.log('inside register controller');

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


//connect to API
myApp.controller("exerciseController", ["$scope", '$http', function($scope, $http) {
    console.log("exerciseController..its working....");

    $scope.searchExerciseFunc = function() {
        var searchExercise = $scope.searchExercise;
        var exerciseURL = "https://wger.de/api/v2/exercise.json/";//pulls data from API

        // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json";//

        // var exerciseURL = "https://wger.de/api/v2/exercise.api/";
        // var exerciseURL = "https://wger.de/api/v2/exercise.json/?" + searchExercise;
        // var exerciseURL = "https://wger.de/api/v2/exercise.api/?format=json" + searchExercise;
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


myApp.controller('createWorkoutController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside createWorkoutController');
    $scope.addWorkoutFunc = function() {
      $scope.workouts = [];
      var addWorkout = {
            name: $scope.name,
            description: $scope.description,
            imageUrl: $scope.imageUrl
          };
    $scope.workouts.push(addWorkout);
        console.log("workouts:", $scope.workouts);

      $http({
        method: 'POST',
        url: '/addWorkout',
        data: $scope.workouts
      }).then(function successCallback(response) {
        console.log('success', response);
        // $window.location.href = '/';
      }, function errorCallback(error) {
        console.log('error occurred!');
      });

    };
  }]);

// myApp.controller('navCtrl', function($scope) {
//     $scope.names = ["Emil", "Tobias", "Linus", "James","Kofi", "Kwame"];
// });

// myApp.controller('HomeController',['$scope', '$http', '$window',
//   function($scope, $http, $window) {
//   console.log('inside AddItemController');
//
//   $scope.addItem = function() {
//     var itemToAdd = {
//       description: $scope.descriptionIn,
//       imageUrl: $scope.imageUrlIn
//     };
// console.log("itemToAdd:", itemToAdd);
//     $http({
//       method: 'POST',
//       url: '/addItem',
//       data: itemToAdd
//     }).then(function successCallback(response) {
//       console.log('success', response);
//       $window.location.reload();
//     }, function errorCallback(error) {
//       console.log('error occurred!');
//     });
//   };
// }]);


// myApp.controller("DisplayController", ["$scope", '$http', function($scope, $http) {
//     console.log("DisplayController..its working....");
//         $http({
//           method: 'GET',
//           url: '/getItem',
//         }).then(function successCallback(response) {
//           console.log(response);
//           $scope.shelf = response.data;
//         }, function errorCallback(error) {
//           console.log('error', error);
//         });
// }]);
