const router = require('express').Router();//gets express Router
const ShortUrlController = require('./controllers/ShortUrlController');

//sets up routes
router.get('/', (req, res) => {
    res.send('Shortening URLs for ya');
});

router.get('/:id', ShortUrlController.redirect);

router.post('/url', ShortUrlController.store);

//exports routes
module.exports = router;