var ctrls=angular.module("zanonControllers",[]);ctrls.controller("MainController",["$scope",function(o){o.active={all:!0,angular:!1,node:!1,mongodb:!1,aws:!1,android:!1,ios:!1},o.filter=function(n){for(var r in o.active)o.active[r]=!1;o.active[n]=!0}}]),ctrls.controller("404Controller",function(){initInvaders404()}),ctrls.controller("PostsController",function(){});