"use strict";

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld(req, res) {
	var api = require("./keys.json");
	
    console.log(req.body);
    res.status(200);
  }
};
