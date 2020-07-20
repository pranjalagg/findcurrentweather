const request = require('request')

const forecast = (lat, long, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=d1a8969db8594e9f379b1e6635ff073c&query=' + lat + ',' + long + '&units=m'
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Network not available!', undefined)
		}
		else if (body.error) {
			callback('Error Code: ' + body.error.code + '\nUnable to find location', undefined)
		}
		else {
			callback(undefined, body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + '°C out (as of ' + body.current.observation_time + '). It feels like it is ' + body.current.feelslike + '°C. Humidity and visibility are ' + body.current.humidity + '% and ' + body.current.visibility + '% respectively')
		}
	})
}

module.exports = forecast