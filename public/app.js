/**
 * Created by yuluo on 16/8/9.
 */

/**
 * 在安装js文件的时候 文件名叫 angular-xxx.js
 *       angular-route.js
 * 在引入项目依赖的时候是ngxxx
 *       ngRoute
 */
angular.module('app',['ngRoute','ngAnimate'])

////在config中使用provider的时候  需要加上provider关键字后缀
////配置客户端路由  index.html#/....进行访问
angular.module('app').config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
            ////把template和controller进行关联
            templateUrl:'./assets/tpl/index.html',
            controller:'indexCtrl'      ////控制器名称
        })
        .when('/show/:id',{
            templateUrl:'./assets/tpl/show.html',
            controller:'showCtrl'
        })
        .when('/add',{
            templateUrl:'./assets/tpl/editor.html',
            controller:'editorCtrl'
        })
        .when('/editor/:id',{
            templateUrl:'./assets/tpl/editor.html',
            controller:'editorCtrl'
        })
}])
