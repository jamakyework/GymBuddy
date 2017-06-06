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
                alert("Unsuccesful registration. Please try again");
            });

        };
    }
]);
