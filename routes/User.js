/*
	User.js
*/

var express = require('express');
var User = express.Router();
var Resources = express.Router({mergeParams: true});

User.use('/:alias', Resources);

/**
	GET /:alias

	Public route to get basic details of a user.
*/

User.get('/:alias', function(req, res) {

});

/**
	GET  /:alias/liked[?params=value]

	Public route to fetch all liked content by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/liked', function(req, res) {

});

/**
	GET  /:alias/liked/posts[?params=value]

	Public route to fetch all liked blog posts by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/liked/posts', function(req, res) {

});

/**
	GET  /:alias/liked/comments[?params=value]

	Public route to fetch all liked comments by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/liked/comments', function(req, res) {

});

/**
	GET  /:alias/disliked[?params=value]

	Public route to fetch all disliked content by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/disliked', function(req, res) {

});

/**
	GET  /:alias/disliked/posts[?params=value]

	Public route to fetch all disliked blog posts by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/disliked/posts', function(req, res) {

});

/**
	GET  /:alias/disliked/comments[?params=value]

	Public route to fetch all disliked comments by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/disliked/comments', function(req, res) {

});

/**
	GET  /:alias/posts[?params=value]

	Public route to fetch all blog posts authored by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/posts', function(req, res) {

});

/**
	GET  /:alias/comments[?params=value]

	Public route to fetch all comments authored by a user. Filters are :
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

Resources.get('/comments', function(req, res) {

});

/**
	POST  /:alias/posts/new

	Protected route to create a blog post authored by a user. Data fields are :
	- Title
		Format: String
	- Content
		Format: String
	- Tags
		Format: String
*/

Resources.post('/posts/new', function(req, res) {

});

module.exports = User;