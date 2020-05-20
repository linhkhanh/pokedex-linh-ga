const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
  });

require('./router')(app);

app.listen(port, () => {
  console.log(`Pekedex app listening on port: ${port}`)
});
