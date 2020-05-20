const pages = require('./controller');

module.exports = (app) => {
    app.get('/', pages.homePage);
    app.get('/pokemon', pages.indexPage);
    app.get('/pokemon/new', pages.newPage);
    app.get('/pokemon/search', pages.searchPokemon)
    app.get('/pokemon/:index', pages.showPage);
    app.get('/pokemon/:index/edit', pages.editPage);
    app.post('/pokemon', pages.createPokemon);
    app.put('/pokemon/:index', pages.updateInfo);
    app.delete('/pokemon/:index', pages.deletePokemon);
}