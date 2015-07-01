'use strict';

var User = require('../model/user');
var UsersController = require('express');

UsersController.create = function(req, res){

    var user = new User(req.body);

    user.save(function(err){
        if(err) res.send(err);
        res.json({ message : 'User created' });
    });

};

UsersController.readAll = function(req, res){
    User.find(function(err, users){
        if(err) res.send(err);
        res.json(users);
    });
};

UsersController.readOne = function(req, res) {
    User.findById(req.params._id, function(err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

UsersController.update = function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);
        user = req.body;
        user.save(function(err) {
            if (err) res.send(err);
            res.json({ message: 'User updated!' });
        });
    });
};

UsersController.delete = function(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err) res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
}


module.exports = UsersController;