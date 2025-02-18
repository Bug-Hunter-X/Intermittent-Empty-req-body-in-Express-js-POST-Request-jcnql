# Intermittent Empty req.body in Express.js POST Request

This repository demonstrates a common, yet subtle bug in Express.js applications where the `req.body` object is sometimes empty, even when a POST request is sent with data.  The issue occurs intermittently, making debugging challenging.

## Bug Description

The provided `bug.js` demonstrates a simple Express.js server that listens for POST requests to the `/data` endpoint.  Under normal circumstances, it should successfully receive and process the JSON data in the request body. However, in this buggy implementation,  `req.body` will occasionally be empty, leading to errors in the data processing logic.

## Solution

The `bugSolution.js` shows the corrected code. The problem is solved by explicitly specifying the content-type in the request's headers and ensuring body-parser is correctly used.