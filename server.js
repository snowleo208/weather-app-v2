const express = require('express')
const axios = require('axios')
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.get('/api/weather', async function (req, res) {
	let location = await axios.get('https://ipinfo.io?token=' + process.env.IPINFO_API_KEY)
	.catch(err => console.log(err));
	let weather = await axios.get("https://api.darksky.net/forecast/" + process.env.DARKSKY_API_KEY + "/" + location.data.loc)
		.catch(err => console.log(err));
	weather.data.location = location.data;
	res.send(weather.data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));