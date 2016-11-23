var request = require('request')
module.exports = function(cb) {
	request.post({
		url:'https://uu07nuop46.execute-api.us-east-1.amazonaws.com/v1',
		json: true,
	}, function(err,r,body){
		if (err)
			return cb(err)

		return cb(null, body)
	})

}
