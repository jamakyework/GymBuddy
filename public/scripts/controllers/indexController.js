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
