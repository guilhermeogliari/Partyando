/*

The MIT License (MIT)

Copyright (c) 2015 Guilherme Ogliari Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

'use strict';

var PartyandoControllers = angular.module('PartyandoControllers',[]);

PartyandoControllers.controller('UserController',['$scope','$http','$location','$mdDialog',function($scope, $http, $location,$mdDialog){

    var user = this;
    var host = '/api/users/';

    user.createUser = function($user){
        $http['post'](host,$user).success(function(data){
            $location.url('/readUser');
            user.listUser();
        });
    };

    user.readUser = function(){
        $http['get'](host).success(function(data){
            user.query = data;
        });
    };

    user.updateUser = function($user){
        $http['put'](host+$user._id, $user).success(function(data){
            user.readUser();  
        });
    };

    user.deleteUser = function($user){
        $http['delete'](host+$user._id).success(function(data){
            user.readUser();
        });
    };

    user.showAdvanced = function(ev,user) {
        $mdDialog.show({
            controller: 'UserController',
            templateUrl: '../pages/update/user.html',
            parent: angular.element(document.body),
            targetEvent: ev,
        }).then(function(answer) {
            $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.alert = 'You cancelled the dialog.';
        });

    };

    user.closeDialog = function($mdDialog) {
        $mdDialog.hide();
    };
    
    

    user.readUser();

}]);