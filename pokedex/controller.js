const data = require('./models/pokemon');
const convertStrToArr = (str) => {
    let arr = [];
    str.includes(",") ? arr = str.split(",") : arr.push(str);
    return arr;
}

const pages = {
    homePage: (req, res) => {
        res.render('home.ejs')
    },
    indexPage: (req, res) => {
        res.render('index.ejs', {
            data
        });
    },
    newPage: (req, res) => {
        res.render('new.ejs');
    },
    createPokemon: (req, res) => {
        req.body.misc = {};
        req.body.misc.classification = 'no information';
        req.body.misc.weight = 'no information';
        req.body.misc.height = 'no information';
        req.body.damages = {};
        if (!Array.isArray(req.body.type)) req.body.type = convertStrToArr(req.body.type);
        data.push(req.body);
        res.redirect(`/pokemon/${data.length-1}`);
    },
    showPage: (req, res) => {
        res.render('show.ejs', {
            pokemon: data[req.params.index],
            index: req.params.index
        })
    },
    deletePokemon: (req, res) => {
        data.splice(req.params.index, 1);
        res.redirect('/pokemon');
    },
    editPage: (req, res) => {
        res.render(
            'edit.ejs',
            {
                pokemon: data[req.params.index],
                index: req.params.index
            }
        );
    },
    updateInfo: (req, res) => {
        const currentItem = data[req.params.index];
        req.body.type = convertStrToArr(req.body.type);
        currentItem.name = req.body.name;
        currentItem.type = req.body.type;
        currentItem.img = req.body.img;
        currentItem.stats = req.body.stats;
        res.redirect(`/pokemon/${req.params.index}`);
    },
    searchPokemon: (req, res) => {
        const str = req.query.name.toLowerCase();
        const index = data.findIndex((item) => {
            return item.name.toLowerCase().includes(str);
        });
        index === -1 ? res.send('Can not find that pokemon') :
        res.redirect(`/pokemon/${index}`);
    }
}

module.exports = pages;

