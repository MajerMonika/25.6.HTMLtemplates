var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.set('views','./views');

app.get( '/login', function( req, res ) {
    res.render( 'login', {
        url: "/auth/google",
        
    });
});

app.get( '/auth/google', function( req, res) {
    res.render( 'auth_google', {
        user: {
            first_name: 'Monika',
            last_name: 'Majer'
        }
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});