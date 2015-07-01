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

var express = require('express');
var router = express.Router();

var UsersController = require('../controller/UsersController');
var CommentController = require('../controller/CommentController');

router.get('/',function(req, res){
    res.json({ message : "Bem-vindo a api" });
});

/**
* Users
**/

router.route('/users')
    .post(UsersController.create.bind(UsersController))
    .get(UsersController.readAll.bind(UsersController));

router.route('/users/:_id')
    .get(UsersController.readOne.bind(UsersController))
    .put(UsersController.update.bind(UsersController))
    .delete(UsersController.delete.bind(UsersController));

/**
* Comments
**/

router.route('/comments')
    .post(UsersController.create.bind(UsersController))
    .get(UsersController.readAll.bind(UsersController));

router.route('/comments/:_id')
    .get(CommentController.readOne.bind(CommentController))
    .put(CommentController.update.bind(CommentController))
    .delete(CommentController.delete.bind(CommentController));


module.exports = router;