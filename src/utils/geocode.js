const request = require('request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJhbmphbGFnZ2Fyd2FsIiwiYSI6ImNrY2RuM2FwaDAwNG8yeG8waWZ1em04bzcifQ.lF67CIZiWq5PhvfC-Kt7DQ&limit=1'
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined)
		}
		else if (body.features.length === 0) {
			callback('Unable to find location!', undefined)
		}
		else {
			callback(undefined, {
				lat: body.features[0].center[1],
				long: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}


module.exports = geocode