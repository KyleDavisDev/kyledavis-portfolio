var express = require('express')
var app = express();


app.use(express.static('dist'));
// app.use(express.static('src/images'));
// app.set('views', './build');

app.get('/resume', function(req, res) {
	res.sendFile(`${process.cwd()}/dist/images/Bonar_Kyle_Resume_2017_06.pdf`);
});

app.get('*', function(req, res) {
	res.sendFile(`${process.cwd()}/dist/index.html`);
});

app.listen(8080, function() {
	console.log('Example app listening on port 8080!');
})