var myApp = angular.module('myApp', []);
console.log("NG");

myApp.controller('mainController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside main controller');

  $scope.login = function(){

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
}]);

myApp.controller('registerController',['$scope', '$http', '$window',
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
}]);

myApp.controller('crudController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside crud controller');

    $scope.crud = function() {
      // var customWorkout

      $http({
        method: 'GET',
        url: '/crudView',
      }).then(function successCallback(response) {
        console.log('success', response);
        $window.location.href = '/';
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
