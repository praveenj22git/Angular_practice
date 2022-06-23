var app = angular.module("Demo", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Templates/home.html",
            controller: "homeController"
        })
        .when("/course", {
            templateUrl: "Templates/course.html",
            controller: "courseController"
        })
        .when("/students", {
            templateUrl: "Templates/students.html",
            controller: "studentsController"
        })
})
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("courseController", function ($scope) {
        $scope.Course = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.Employee = response.data;
            })
    })