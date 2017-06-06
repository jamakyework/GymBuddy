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
