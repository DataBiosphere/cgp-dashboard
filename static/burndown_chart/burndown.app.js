'use strict';

var timeStamps = captured_dates;
var allJobs = total_jobs;
var completedJobs = finished_jobs;

var BurndownAPI_Connector = angular.module('BurndownAPI_Connector', ["chart.js"], function($interpolateProvider){
   $interpolateProvider.startSymbol('{-');
   $interpolateProvider.endSymbol('-}');
});

BillingAPI_Connector.controller('burndown_controller', function($scope) {
   $scope.labels = timeStamps;
   $scope.series = ['All Jobs', 'Finished Jobs'];
   $scope.data = [allJobs, completedJobs];
   $scope.onClick = function (points, evt) {
      console.log(points, evt);
   }
})