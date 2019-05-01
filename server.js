var express = require('express')
var app = express();


app.use(express.static('dist'));
app.use(express.static('KyleBonar_2015/'));
// app.use(express.static('src/images'));
// app.set('views', './build');

//Send Resume
app.get('/resume', function(req, res) {
	res.sendFile(`${process.cwd()}/dist/images/Bonar_Kyle.pdf`);
});

//Send specific JavaScript game
app.get('/JSGames/doublePend', function(req, res) {
	res.sendFile(`${process.cwd()}/JSGames/doublePend/index.html`)
})
app.get('/JSGames/fractalTrees', function(req, res) {
	res.sendFile(`${process.cwd()}/JSGames/fractalTrees/index.html`)
})
app.get('/JSGames/phyllotaxis', function(req, res) {
	res.sendFile(`${process.cwd()}/JSGames/phyllotaxis/index.html`)
})
app.get('/JSGames/pong', function(req, res) {
	res.sendFile(`${process.cwd()}/JSGames/pong/index.html`)
})
app.get('/JSGames/wordCount', function(req, res) {
	res.sendFile(`${process.cwd()}/JSGames/wordCount/index.html`)
})
app.get('/KyleBonar_2015', function(req, res) {
	res.sendFile(`${process.cwd()}/KyleBonar_2015/index.html`)
})

//rest will fall here and be handled by react app
app.get('*', function(req, res) {
	res.sendFile(`${process.cwd()}/dist/index.html`);
});

app.listen(5000, function() {
	console.log('Example app listening on port 5000!');
})
