"use strict";

var api = require("./keys.json");
var request = require("request");

exports.helloWorld = function helloWorld(req, res) {

	var author;
	var slug;
	var title;
	var date;
	var alltags;
	var category;
	
	try{
		var featuredExists = false;
		
		slug = req.body.topic.slug;
		author = req.body.topic.details.created_by.username;
		alltags = req.body.topic.tags;
		category = getCategory(req.body.topic.category_id);
		
		for(var i=0; i<alltags.length; i++){
			if("featured" === alltags[i]){
				featuredExists = true;
				break;
			}
		}
		
	}catch(e){
		res.status(200);
		return;
	}
	
	if(!featureExists){
		res.status(200);
		return;
	}
	
    console.log(req.body);
	console.log(req.body.topic.details.suggested_topics);
    res.status(200);
	return;
};

/**
 * @param topic id
 */
function getCooked(id){
	//todo 
}

/**
 * Check if the file already exists in the repo. If so, edit it, else create new file.
 */
function checkFileAlreadyExists(id){
	//todo
}

function getCaregory(id){
	switch(id){
		case 4:
		return "staff";
		case 5:
		return "community";
		case 6:
		return "arma3";
		case 9:
		return "dcs";
		case 10:
		return "squad";
		
		default:
		return "";
	}
}
