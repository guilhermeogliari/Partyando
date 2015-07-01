'use strict';

var Comment = require('../model/comment');
var CommentController = require('express');

CommentController.create = function(req, res){

    var comment = new Comment(req.body);

    comment.save(function(err){
        if(err) res.send(err);
        res.json({ message : 'Comment created' });
    });

};

CommentController.readAll = function(req, res){
    Comment.find(function(err, comments){
        if(err) res.send(err);
        res.json(comments);
    });
};

CommentController.readOne = function(req, res) {
    Comment.findById(req.params._id, function(err, comment) {
        if (err) res.send(err);
        res.json(comment);
    });
};

CommentController.update = function(req, res) {
    Comment.findById(req.params.comment_id, function(err, comment) {
        if (err) res.send(err);
        comment = req.body;
        comment.save(function(err) {
            if (err) res.send(err);
            res.json({ message: 'Comment updated!' });
        });
    });
};

CommentController.delete = function(req, res) {
    Comment.remove({
        _id: req.params.comment_id
    }, function(err, comment) {
        if (err) res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
}

module.exports = CommentController;