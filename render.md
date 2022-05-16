# npm install express-handlebars --save

# Loads the handlebars module

const handlebars = require('express-handlebars');

# Sets our app to use the handlebars engine

app.set('view engine', 'handlebars');

# Sets handlebars configurations (we will go through them later on)

app.engine('handlebars', handlebars({
layoutsDir: \_ \_dirname + '/views/layouts',
}));
