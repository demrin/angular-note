/**
 * Created by yuluo on 16/8/9.
 */
angular.module('app').controller('showCtrl',['$scope','getDataServices','$routeParams',function($scope,getDataServices,$routeParams){
    getDataServices.getOneData($routeParams.id)
        .then(function(res){
            $scope.data = res.data
        })
        .catch(function (err) {
            console.log(err)
        })
}])