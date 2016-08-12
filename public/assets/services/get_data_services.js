/**
 * Created by yuluo on 16/8/9.
 */
////定义一个服务器  从服务器端去数据
angular.module('app').factory('getDataServices',['$http','$q',function($http,$q){
    ////定义一个空对象  用于返回
    var dal = {}

    /////获取所有数据
    dal.getData = function(){
        var url = '/card'
        var deferred = $q.defer()
        ////$http.get(url).succ...
        $http({
            method:'get',
            url:url
            // data:data
        }).success(function(res){
            deferred.resolve(res)
        }).error(function (res,statusCode) { /////报错时的输出信息参数一 错误提示,参数二错误代码
            console.log(res)
            console.log(statusCode)
            deferred.reject(res)
        })
        return deferred.promise
    }

    //////获取单条记录
    dal.getOneData = function(id){
        var url = '/card/'+id
        var deferred = $q.defer()
        $http({
            method:'get',
            url:url
            // data:data
        }).success(function(res){
            deferred.resolve(res)
        }).error(function (res,statusCode) { /////报错时的输出信息参数一 错误提示,参数二错误代码
            console.log(res)
            console.log(statusCode)
            deferred.reject(res)
        })
        return deferred.promise
    }

    return dal
}])